from flask import Blueprint, request, jsonify
from db import products_collection, orders_collection
from datetime import datetime, time
from bson import ObjectId
import json

# Custom JSON encoder to handle MongoDB's ObjectId for this blueprint
class CustomAdminJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super(CustomAdminJSONEncoder, self).default(obj)

admin_bp = Blueprint('admin_bp', __name__)
admin_bp.json_encoder = CustomAdminJSONEncoder

@admin_bp.route('/dashboard', methods=['GET'])
def get_admin_dashboard():
    """
    Endpoint 4: Admin Dashboard (Optimized)
    Provides statistics and lists of orders using a MongoDB aggregation pipeline.
    """
    try:
        today_start = datetime.combine(datetime.utcnow().date(), time.min)
        
        # Aggregation pipeline to calculate stats and fetch all orders
        pipeline = [
            {
                "$facet": {
                    "orders": [
                        {"$match": {}}
                    ],
                    "stats": [
                        {
                            "$group": {
                                "_id": None,
                                "total_revenue": {"$sum": "$total_amount"},
                                "orders_today": {
                                    "$sum": {
                                        "$cond": [{"$gte": ["$created_at", today_start]}, 1, 0]
                                    }
                                }
                            }
                        }
                    ]
                }
            },
            {
                "$unwind": "$stats"
            }
        ]

        result = list(orders_collection.aggregate(pipeline))
        
        # Count active products in a separate query
        active_products_count = products_collection.count_documents({})

        if not result:
            # Handle case with no orders
            dashboard_data = {
                "daily_orders": [],
                "custom_orders": [],
                "statistics": {
                    "total_revenue": 0,
                    "orders_today": 0,
                    "total_active_products": active_products_count
                }
            }
        else:
            all_orders = result[0]['orders']
            stats = result[0]['stats']
            
            daily_orders = [order for order in all_orders if order.get('order_type') == 'Daily']
            custom_orders = [order for order in all_orders if order.get('order_type') == 'Custom']

            dashboard_data = {
                "daily_orders": daily_orders,
                "custom_orders": custom_orders,
                "statistics": {
                    "total_revenue": stats.get('total_revenue', 0),
                    "orders_today": stats.get('orders_today', 0),
                    "total_active_products": active_products_count
                }
            }
            
        # Manually serialize with the custom encoder to ensure consistency
        return admin_bp.json.dumps(dashboard_data), {'Content-Type': 'application/json'}

    except Exception as e:
        return jsonify({"error": "An unexpected error occurred", "details": str(e)}), 500

@admin_bp.route('/products', methods=['POST'])
def add_new_product():
    """
    Endpoint 5: Admin Product Management
    Allows an admin to upload new artwork details.
    """
    data = request.get_json()
    
    required_fields = ['title', 'artist', 'description', 'thumbnail_url', 'category', 'stock', 'variants']
    if not data or not all(field in data for field in required_fields):
        return jsonify({"error": "Bad Request: Missing required fields"}), 400
    
    if not isinstance(data['variants'], list) or not data['variants']:
        return jsonify({"error": "Bad Request: 'variants' must be a non-empty list"}), 400
    for variant in data['variants']:
        if 'size' not in variant or 'price' not in variant:
            return jsonify({"error": "Bad Request: Each variant must have 'size' and 'price'"}), 400

    try:
        result = products_collection.insert_one(data)
        new_product_id = result.inserted_id
        return jsonify({"message": "Product added successfully", "product_id": str(new_product_id)}), 201
    except Exception as e:
        return jsonify({"error": "Failed to add product", "details": str(e)}), 500