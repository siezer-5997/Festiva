import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Placeholder function to train a simple ML model
def train_model():
    # Example dataset
    data = {
        'feature1': [10, 20, 30, 40, 50],
        'feature2': [5, 15, 25, 35, 45],
        'demand': [1, 0, 1, 0, 1]  # 1 = High demand, 0 = Low demand
    }
    df = pd.DataFrame(data)

    # Split data into features (X) and target (y)
    X = df[['feature1', 'feature2']]
    y = df['demand']

    # Train/test split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train a Random Forest model
    model = RandomForestClassifier()
    model.fit(X_train, y_train)

    # Test accuracy
    accuracy = model.score(X_test, y_test)
    print(f"Model accuracy: {accuracy * 100:.2f}%")

    return model

# Train the model and return it
if __name__ == "__main__":
    model = train_model()
