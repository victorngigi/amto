from extensions import db, bcrypt
from datetime import datetime

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.set_password(password)

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode("utf-8")

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
        }


class Member(db.Model):
    __tablename__ = "members"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=True)
    join_date = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default="active")

    # relationships
    vehicles = db.relationship("Vehicle", backref="member", lazy=True)
    payments = db.relationship("Payment", backref="member", lazy=True)

    def __init__(self, name, phone, email=None):
        self.name = name
        self.phone = phone
        self.email = email

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone": self.phone,
            "email": self.email,
            "join_date": self.join_date.isoformat(),
            "status": self.status,
        }


class Vehicle(db.Model):
    __tablename__ = "vehicles"

    id = db.Column(db.Integer, primary_key=True)
    plate_number = db.Column(db.String(20), unique=True, nullable=False)
    model = db.Column(db.String(100), nullable=True)
    route = db.Column(db.String(50), nullable=True)
    capacity = db.Column(db.Integer, nullable=True)

    member_id = db.Column(db.Integer, db.ForeignKey("members.id"), nullable=False)

    def __init__(self, plate_number, model, route, capacity, member_id):
        self.plate_number = plate_number
        self.model = model
        self.route = route
        self.capacity = capacity
        self.member_id = member_id

    def to_dict(self):
        return {
            "id": self.id,
            "plate_number": self.plate_number,
            "model": self.model,
            "route": self.route,
            "capacity": self.capacity,
            "member_id": self.member_id,
        }


class Payment(db.Model):
    __tablename__ = "payments"

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Numeric(10, 2), nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    purpose = db.Column(db.String(200), nullable=True)

    member_id = db.Column(db.Integer, db.ForeignKey("members.id"), nullable=False)

    def __init__(self, amount, date, purpose, member_id):
        self.amount = amount
        self.date = date
        self.purpose = purpose
        self.member_id = member_id

    def to_dict(self):
        return {
            "id": self.id,
            "amount": float(self.amount),
            "date": self.date.isoformat(),
            "purpose": self.purpose,
            "member_id": self.member_id,
        }
