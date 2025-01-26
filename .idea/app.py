from flask import Flask
from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Grandcanyon1!@localhost/users'
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'user_info'
    id = db.Column(db.Integer, primary_key=True)
    purdue_id = db.Column(db.String(80), unique=True, nullable=False)
    purdue_email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

    def __init__(self, purdue_id, purdue_email, password):
        self.purdue_id = purdue_id
        self.purdue_email = purdue_email
        self.password = password

@app.route("/")
def hello_world():
    
    return "<p>Hello World</p>"

@app.route("/register", methods=['POST'])
def register_user():
    print("lol")


if __name__ == "__main__":
    app.run(debug=True)
    with app.app_context():
        db.create_all()


# # Database configuration (replace this with your actual database URI)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# # Initialize the SQLAlchemy object
# db = SQLAlchemy(app)

# # Define the Users table
# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100), nullable=False)
#     username = db.Column(db.String(50), unique=True, nullable=False)
#     password = db.Column(db.String(100), nullable=False)
#     interests = db.Column(db.String(255), nullable=False)
#     age = db.Column(db.Integer, nullable=False)
#     gender = db.Column(db.String(10), nullable=False)
#     availability = db.Column(db.String(255), nullable=False)
#     level_of_expertise = db.Column(db.String(20), nullable=False)

#     def __repr__(self):
#         return f'<User {self.name}>'

# # Create the tables in the database (only once, when the app is first run)
# @app.before_first_request
# def create_tables():
#     db.create_all()

# # Route to add a new user
# @app.route('/add_user', methods=['POST'])
# def add_user():

# # Get data from the incoming POST request
#     data = request.get_json()

# # Create a new User object
#     new_user = User(
#         name=data['name'],
#         username=data['username'],
#         password=data['password'],
#         interests=data['interests'],
#         age=data['age'],
#         gender=data['gender'],
#         availability=data['availability'],
#         level_of_expertise=data['level_of_expertise']
#     )

# # Add the user to the database and commit
#     db.session.add(new_user)
#     db.session.commit()

#     return jsonify({"message": "User added successfully!"}), 201

# # Route to get all users (for testing)
# @app.route('/users', methods=['GET'])
# def get_users():
#     users = User.query.all()
#     users_list = [{"name": user.name, "username": user.username, "interests": user.interests, 
#                    "age": user.age, "gender": user.gender, "availability": user.availability,
#                    "level_of_expertise": user.level_of_expertise} for user in users]
#     return jsonify(users_list)

# # Run the Flask app
# if __name__ == '__main__':
#     app.run(debug=True)