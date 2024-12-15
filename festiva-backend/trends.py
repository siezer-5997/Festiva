from pytrends.request import TrendReq
from models import db, AmazonProductCombined
import time

def fetch_trending_products():
    """
    Fetch trending product data from Google Trends.
    Returns a dictionary of keywords and their interest over time.
    """
    pytrends = TrendReq()
    keywords = ['laptop', 'smartphone', 'headphones', 'shoes', 'shopping']  # Example keywords

    # Build payload for each keyword with a delay to avoid 429 errors
    trends = {}
    for keyword in keywords:
        try:
            pytrends.build_payload([keyword], timeframe='now 7-d', geo='US')
            data = pytrends.interest_over_time()
            if not data.empty:
                trends[keyword] = data[keyword].tolist()
            time.sleep(10)  # Wait 10 seconds between requests
        except Exception as e:
            print(f"Error fetching data for {keyword}: {e}")
    return trends

def save_trending_products_to_db(trends):
    """
    Save the fetched trending products to the database.
    """
    # Clear existing trending products to keep data fresh
    AmazonProductCombined.query.filter(AmazonProductCombined.main_category == "Trending").delete()

    # Save new trending products
    for product, data in trends.items():
        # Calculate the average interest over the last 7 days as an example metric
        avg_interest = sum(data) / len(data) if data else 0.0
        new_product = AmazonProductCombined(
            name=product,
            main_category="Trending",
            sub_category="Trending",
            ratings=avg_interest,  # Use average interest as a mock rating
            no_of_ratings=0,
            discount_price=0.0,  # Set to 0 as placeholder
            actual_price=0.0,    # Set to 0 as placeholder
            discount_percentage=0.0  # Set to 0 as placeholder
        )
        db.session.add(new_product)

    # Commit changes to the database
    db.session.commit()
