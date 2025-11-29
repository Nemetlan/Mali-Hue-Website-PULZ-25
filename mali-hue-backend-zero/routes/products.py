from flask import Blueprint, jsonify
from dbMap import database
import json

products_bp = Blueprint('products_bp', __name__)

@products_bp.route('/', methods=['GET'])
def get_products():
    # print("Fetching products...")
    """
    Endpoint 1: Product Showcase
    Fetches a list of products with essential fields for the main gallery page.
    """
    try:
        products = database.get_semi_products()
        print(products)
        return jsonify(products)
    except Exception as e:
        print(f"Error fetching products: {e}")
        return jsonify({"error": "An unexpected error occurred", "details": str(e)}), 500

@products_bp.route('/<product_id>', methods=['GET'])
def get_product_detail(product_id):
    """
    Endpoint 2: Product Detail Page
    Fetches the complete details for a single product.
    """
    try:
        product = database.get_product(product_id)
        if product:
            return jsonify(product)
        else:
            return jsonify({"error": "Product not found"}), 404
    except Exception as e:
        print(f"Error fetching product: {e}")
        return jsonify({"error": "An unexpected error occurred", "details": str(e)}), 500
    



