from tinydb import TinyDB, Query
import os

class Database():
    def __init__(self):
        for dir in ['data', 'data/semi_products', 'data/products', 'data/orders']:
            if not os.path.exists(dir):
                os.makedirs(dir)

        print("Initializing database...")
        self.semi_products = TinyDB('data/semi_products/semiProducts.json')
        self.products = TinyDB('data/products/products.json')
        self.orders = TinyDB('data/orders/orders.json')

    def get_semi_products(self):
        print(self.semi_products.all())
        return self.semi_products.all()
    
    def get_product(self, product_id):
        productData = Query()
        result = self.products.search(productData.id == product_id)
        return result[0] if result else None
    
    def add_order(self, order_data):
        self.orders.insert(order_data)

    def get_orders(self):
        return self.orders.all()  
    
    def add_product(self, product_data):
        self.products.insert(product_data)
        tempdata = {
        "id": product_data["id"],
        "title": product_data["title"],
        "artist": product_data["artist"],
        "short_description": product_data["short_description"],
        "thumbnail": product_data["thumbnail"],
        "variants": product_data["variants"],
        "lowest_price": product_data["lowest_price"]
        }
        print(self.semi_products.insert(tempdata))

# Sample Products Data
SEMI_PRODUCTS = [
        {
        "id": "1",
        "title": "Timeless Bark",
        "artist": "Nemetlan",
        "short_description": "Evokes natural resilience and enduring beauty.",
        "thumbnail": "/photos/id/1.png",
        "variants": [{"size": "12x16\"", "price": 85}, {"size": "18x24\"", "price": 150}],
        "lowest_price": 85
    },
    {
        "id": "2",
        "title": "Quiet Resolve",
        "artist": "Nemetlan",
        "short_description": "Emphasizes inner strength and peaceful determination.",
        "thumbnail": "/photos/id/2.png",
        "variants": [{"size": "24x36\"", "price": 300}],
        "lowest_price": 300
    },
    {
        "id": "3",
        "title": "Ethereal Swirl",
        "artist": "Nemetlan",
        "short_description": "Focuses on the dreamy, almost ghostly quality of movement.",
        "thumbnail": "/photos/id/3.png",
        "variants": [{"size": "12x16\"", "price": 120}, {"size": "16x20\"", "price": 180}],
        "lowest_price": 120
    },
    {
        "id": "4",
        "title": "Urban Solitude",
        "artist": "Nemetlan",
        "short_description": "The silence of the city at dawn.",
        "thumbnail": "/photos/id/4.png",
        "variants": [{"size": "12x16\"", "price": 95}],
        "lowest_price": 95
    }
]


PRODUCTS = [
    {
        "id": "1",
        "title": "Timeless Bark",
        "artist": "Nemetlan",
        "short_description": "Evokes natural resilience and enduring beauty.",
        "description": "Raw, monochromatic texture that anchors your space in lasting calm and quiet strength. This piece explores the intricate details of nature that often go unnoticed.",
        "thumbnail": "/photos/id/1.png",
        "category": "Digital",
        "stock": 10,
        "variants": [{"size": "12x16\"", "price": 85}, {"size": "18x24\"", "price": 150}],
        "lowest_price": 85
    },
    {
        "id": "2",
        "title": "Quiet Resolve",
        "artist": "Nemetlan",
        "short_description": "Emphasizes inner strength and peaceful determination.",
        "description": "A study in contrast and solitude. The figure stands resilient against a dark, brooding background, illuminated by a single source of hope.",
        "thumbnail": "/photos/id/2.png",
        "category": "Oil",
        "stock": 5,
        "variants": [{"size": "24x36\"", "price": 300}],
        "lowest_price": 300
    },
    {
        "id": "3",
        "title": "Ethereal Swirl",
        "artist": "Nemetlan",
        "short_description": "Focuses on the dreamy, almost ghostly quality of movement.",
        "description": "Soft strokes and blending colors create a sense of motion that is both calming and invigorating. Perfect for modern minimalist spaces.",
        "thumbnail": "/photos/id/3.png",
        "category": "Acrylic",
        "stock": 8,
        "variants": [{"size": "12x16\"", "price": 120}, {"size": "16x20\"", "price": 180}],
        "lowest_price": 120
    },
    {
        "id": "4",
        "title": "Urban Solitude",
        "artist": "Nemetlan",
        "short_description": "The silence of the city at dawn.",
        "description": "Capturing the moments before the city wakes up. Grey tones mixed with the warmth of the rising sun.",
        "thumbnail": "/photos/id/4.png",
        "category": "Digital",
        "stock": 12,
        "variants": [{"size": "12x16\"", "price": 95}],
        "lowest_price": 95
    }
]
