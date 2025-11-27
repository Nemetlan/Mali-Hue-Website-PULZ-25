import time
import random
from flask import Blueprint, request, jsonify
from db import products_collection, orders_collection
from bson import ObjectId
from datetime import datetime

checkout_bp = Blueprint('checkout_bp', __name__)

def simulate_stripe_payment():
    """
    Mock Stripe Integration: Simulates a payment process.
    Waits for 2 seconds and then randomly returns success or failure.
    """
    time.sleep(2)
    return random.choice([True, False])

@checkout_bp.route('/', methods=['POST'])
def checkout():
    """
    Endpoint 3: Checkout & Payment
    Processes a customer order, simulates payment, and updates database.
    """
    data = request.get_json()
    if not data or 'customer_details' not in data or 'items' not in data:
        return jsonify({"error": "Bad Request: Missing customer details or items"}), 400

    customer_details = data['customer_details']
    items = data['items']
    total_amount = 0

    # --- Transaction-like validation: Check stock first ---
    for item in items:
        try:
            product = products_collection.find_one({"_id": ObjectId(item['product_id'])})
            if not product or product['stock'] < item['quantity']:
                return jsonify({"error": f"Insufficient stock for product ID {item['product_id']}"}), 400
            
            # Find the price for the selected variant
            variant_found = False
            for variant in product.get('variants', []):
                if variant.get('size') == item.get('selected_size'):
                    total_amount += variant['price'] * item['quantity']
                    variant_found = True
                    break
            if not variant_found:
                return jsonify({"error": f"Variant size '{item.get('selected_size')}' not found for product ID {item['product_id']}"}), 400

        except Exception as e:
            return jsonify({"error": f"Invalid product ID: {item.get('product_id')}"}), 400

    # --- Simulate Payment ---
    payment_successful = simulate_stripe_payment()

    if not payment_successful:
        return jsonify({"error": "Payment failed"}), 402 # 402 Payment Required

    # --- Create Order and Update Stock ---
    try:
        order = {
            "customer_details": customer_details,
            "items": items,
            "total_amount": total_amount,
            "status": "Pending",
            "order_type": data.get("order_type", "Daily"), # Default to "Daily"
            "created_at": datetime.utcnow()
        }
        result = orders_collection.insert_one(order)
        new_order_id = result.inserted_id

        # Deduct stock
        for item in items:
            products_collection.update_one(
                {"_id": ObjectId(item['product_id'])},
                {"$inc": {"stock": -item['quantity']}}
            )

        return jsonify({"message": "Checkout successful", "order_id": str(new_order_id)}), 201
    except Exception as e:
        # This part is tricky. If this fails, we should ideally roll back the payment.
        # In a real app, this would involve more complex transaction management.
        return jsonify({"error": "Failed to save order after payment", "details": str(e)}), 500
