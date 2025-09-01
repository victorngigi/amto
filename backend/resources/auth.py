from flask_restful import Resource, reqparse
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from models import User
from extensions import db

# --- Request Parsers ---
register_parser = reqparse.RequestParser()
register_parser.add_argument("name", required=True, help="Name is required")
register_parser.add_argument("email", required=True, help="Email is required")
register_parser.add_argument("password", required=True, help="Password is required")

login_parser = reqparse.RequestParser()
login_parser.add_argument("email", required=True, help="Email is required")
login_parser.add_argument("password", required=True, help="Password is required")


# --- Resources ---
class Register(Resource):
    def post(self):
        data = register_parser.parse_args()

        # Prevent duplicate accounts
        if User.query.filter_by(email=data["email"]).first():
            return {"message": "Email already exists"}, 400

        # Create user (password handled in __init__)
        user = User(
            name=data["name"],
            email=data["email"],
            password=data["password"]
        )

        db.session.add(user)
        db.session.commit()

        return {"message": "User registered successfully"}, 201


class Login(Resource):
    def post(self):
        data = login_parser.parse_args()
        user = User.query.filter_by(email=data["email"]).first()

        if user and user.check_password(data["password"]):
            token = create_access_token(identity=user.id)
            return {
                "access_token": token,
                "user": user.to_dict()
            }, 200

        return {"message": "Invalid credentials"}, 401


class Profile(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user = User.query.get(user_id)

        if not user:
            return {"message": "User not found"}, 404

        return {"user": user.to_dict()}, 200
