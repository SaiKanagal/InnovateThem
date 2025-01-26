from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello World</p>"

@app.route("/register", methods=['GET'])
def register_user():
    return {"data": "sample user"}


if __name__ == "__main__":
    app.run(debug=True)