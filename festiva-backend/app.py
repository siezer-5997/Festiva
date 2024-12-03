from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from ml_model import train_model

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///festiva.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.Text, nullable=True)

@app.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{'id': p.id, 'name': p.name, 'price': p.price} for p in products])

model = train_model()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = data.get('features', [])
    if not features or len(features) != 2:
        return jsonify({'error': 'Invalid input. Provide a list with two feature values.'}), 400

    prediction = model.predict([features])
    return jsonify({'demand_prediction': int(prediction[0])})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
