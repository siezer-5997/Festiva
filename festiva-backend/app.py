from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/recommendations', methods=['GET'])
def recommendations():
    return jsonify({"products": ["Product1", "Product2", "Product3"]})

if __name__ == '__main__':
    app.run(debug=True)
