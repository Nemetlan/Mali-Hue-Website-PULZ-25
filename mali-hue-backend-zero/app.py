from flask import Flask, jsonify
from flask_cors import CORS
from bson import ObjectId
import json
from db import Database

# A custom JSON encoder to handle MongoDB's ObjectId
class CustomJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(CustomJSONEncoder, self).default(obj)

def create_app():
    app = Flask(__name__)
    app.json_encoder = CustomJSONEncoder
    CORS(app) # Enable CORS for all routes

    # Import blueprints
    from routes.products import products_bp
    from routes.checkout import checkout_bp
    from routes.admin import admin_bp

    # Register blueprints
    app.register_blueprint(products_bp, url_prefix='/api/products')
    app.register_blueprint(checkout_bp, url_prefix='/api/checkout')
    app.register_blueprint(admin_bp, url_prefix='/api/admin')

    # Basic error handling
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({"error": "Not Found"}), 404

    @app.errorhandler(500)
    def internal_server_error(error):
        return jsonify({"error": "Internal Server Error"}), 500

    @app.route("/")
    def index():
        return "Welcome to the Mali Hue API!"

    return app

if __name__ == "__main__":
    import dbMap  # Ensure database is initialized
    app = create_app()
    app.run(debug=True)
