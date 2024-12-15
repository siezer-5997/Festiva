from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class AmazonProductCombined(db.Model):
    __tablename__ = 'amazon_products_combined'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    main_category = db.Column(db.Text, nullable=True)
    sub_category = db.Column(db.Text, nullable=True)  # Short description
    image = db.Column(db.Text, nullable=True)
    link = db.Column(db.Text, nullable=True)
    ratings = db.Column(db.Float, nullable=True)
    no_of_ratings = db.Column(db.Integer, nullable=True)
    discount_price = db.Column(db.Float, nullable=True)
    actual_price = db.Column(db.Float, nullable=True)
    discount_percentage = db.Column(db.Float, nullable=True)

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    joined_date = db.Column(db.DateTime, default=datetime.utcnow)

    def set_password(self, password):
        """Hash the password and store it."""
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """Check the password against the stored hash."""
        return check_password_hash(self.password_hash, password)