from flask import Blueprint, jsonify
from db import products_collection
from bson import ObjectId
from bson.errors import InvalidId
import json

# Custom JSON encoder to handle MongoDB's ObjectId for this blueprint
class CustomProductJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(CustomProductJSONEncoder, self).default(obj)

products_bp = Blueprint('products_bp', __name__)
products_bp.json_encoder = CustomProductJSONEncoder

@products_bp.route('/', methods=['GET'])
def get_products():
    """
    Endpoint 1: Product Showcase
    Fetches a list of products with essential fields for the main gallery page.
    """
    try:
        products = []
        for product in products_collection.find():
            lowest_price = 0
            if product.get('variants'):
                prices = [variant['price'] for variant in product['variants'] if 'price' in variant]
                if prices:
                    lowest_price = min(prices)

            products.append({
                "_id": str(product['_id']),
                "title": product.get('title'),
                "thumbnail_url": product.get('thumbnail_url'),
                "short_description": product.get('short_description'),
                "lowest_price": lowest_price
            })
        return jsonify(products)
    except Exception as e:
        return jsonify({"error": "An unexpected error occurred", "details": str(e)}), 500

@products_bp.route('/<product_id>', methods=['GET'])
def get_product_detail(product_id):
    """
    Endpoint 2: Product Detail Page
    Fetches the complete details for a single product.
    """
    try:
        product = products_collection.find_one({"_id": ObjectId(product_id)})
        if product:
            # The blueprint's JSON encoder will handle the ObjectId serialization
            return jsonify(product)
        else:
            return jsonify({"error": "Product not found"}), 404
    except InvalidId:
        return jsonify({"error": "Invalid product ID format"}), 400
    except Exception as e:
        return jsonify({"error": "An unexpected error occurred", "details": str(e)}), 500
    



