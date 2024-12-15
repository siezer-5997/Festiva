import pandas as pd
import os

# Define the directory where the CSV files are stored
data_dir = "C:\\Users\\Siem Zeresenay\\Desktop\\Semester 3\\REST API\Final Project\\e-commerce datasets"


############################## Already done ###############################
# # Create a list to store dataframes
# dfs = []

# # Iterate through all CSV files in the directory
# for file in os.listdir(data_dir):
#     if file.endswith(".csv"):
#         file_path = os.path.join(data_dir, file)
#         df = pd.read_csv(file_path)
#         dfs.append(df)

# # Concatenate all dataframes
# combined_df = pd.concat(dfs, ignore_index=True)

# # Save the combined dataset
# combined_df.to_csv("combined_amazon_products.csv", index=False)

# print(f"Combined dataset shape: {combined_df.shape}")

df = pd.read_csv('C:\\Users\\Siem Zeresenay\\Desktop\\Semester 3\\REST API\\Final Project\\combined_amazon_products.csv\\combined_amazon_products.csv')
# print(df.head())

# Drop rows with missing values
df = df.dropna()

# Standardize column names
df.columns = df.columns.str.strip().str.lower().str.replace(' ', '_')

# Convert price columns to numeric
df['discount_price'] = df['discount_price'].str.replace('₹', '').str.replace(',', '').astype(float)
df['actual_price'] = df['actual_price'].str.replace('₹', '').str.replace(',', '').astype(float)

# Add a new column for discount percentage
df['discount_percentage'] = ((df['actual_price'] - df['discount_price']) / df['actual_price']) * 100

# Print a summary of the cleaned dataset
# print(df.info())

from sqlalchemy import create_engine
# Connect to your PostgreSQL database
engine = create_engine(os.getenv('DATABASE_URL'))

# Save the data to a new table in your database
df.to_sql('amazon_products_combined', engine, if_exists='replace', index=False)


