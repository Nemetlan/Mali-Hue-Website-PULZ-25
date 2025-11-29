from flask import Blueprint, request, jsonify
# from db import products_collection, orders_collection
from dbMap import database
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
    Provides statistics and lists of orders.
    """
    try:
        all_orders = database.get_orders()
        active_products_count = len(database.get_products())
        
        total_revenue = 0
        orders_today = 0
        daily_orders = []
        custom_orders = []
        
        today_start = datetime.utcnow().date()

        for order in all_orders:
            total_revenue += order.get('total_amount', 0)
            order_date = datetime.fromisoformat(order.get('created_at')).date()
            if order_date == today_start:
                orders_today += 1
            
            if order.get('order_type') == 'Daily':
                daily_orders.append(order)
            elif order.get('order_type') == 'Custom':
                custom_orders.append(order)

        dashboard_data = {
            "daily_orders": daily_orders,
            "custom_orders": custom_orders,
            "statistics": {
                "total_revenue": total_revenue,
                "orders_today": orders_today,
                "total_active_products": active_products_count
            }
        }
            
        return jsonify(dashboard_data)

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
        database.add_product(data)
        return jsonify({"message": "Product added successfully"}), 201
    except Exception as e:
        return jsonify({"error": "Failed to add product", "details": str(e)}), 500