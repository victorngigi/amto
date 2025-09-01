from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from extensions import db, bcrypt, jwt
from config import Config
from resources.auth import Register, Login, Profile


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # init extensions
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    Migrate(app, db)  # enable migrations

    # register api resources
    api = Api(app)
    api.add_resource(Register, "/register")
    api.add_resource(Login, "/login")
    api.add_resource(Profile, "/profile")

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
