from app import create_app
from extensions import db
from models import Member, Vehicle, Payment
from datetime import datetime

app = create_app()

with app.app_context():
    # Clear existing data
    Payment.query.delete()
    Vehicle.query.delete()
    Member.query.delete()
    db.session.commit()

    # Seed Members
    members = [
        Member(name="John Doe", phone="0712345678", email="john@example.com"),
        Member(name="Jane Smith", phone="0723456789", email="jane@example.com"),
    ]
    db.session.add_all(members)
    db.session.commit()  # Commit so member IDs are generated

    # Seed Vehicles
    vehicles = [
        Vehicle(plate_number="KAA123A", model="Toyota Hiace", route="Nairobi-Mombasa", capacity=14, member_id=members[0].id),
        Vehicle(plate_number="KBB456B", model="Nissan Matatu", route="Nairobi-Kajiado", capacity=16, member_id=members[1].id),
    ]
    db.session.add_all(vehicles)
    db.session.commit()

    # Seed Payments (yearly contributions)
    current_year = datetime.utcnow().year
    payments = [
        Payment(amount=60000, date=datetime(current_year, 1, 1), purpose="Yearly contribution", member_id=members[0].id),
        Payment(amount=60000, date=datetime(current_year, 1, 1), purpose="Yearly contribution", member_id=members[1].id),
    ]
    db.session.add_all(payments)
    db.session.commit()

    print("Seed data added successfully.")
