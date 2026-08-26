from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

MOVIES = [
    {
        "id": 1,
        "title": "The Great Adventure",
        "year": 2024,
        "genre": "Adventure",
    },
    {
        "id": 2,
        "title": "Midnight Stories",
        "year": 2023,
        "genre": "Drama",
    },
    {
        "id": 3,
        "title": "Beyond the Stars",
        "year": 2025,
        "genre": "Science Fiction",
    },
]


@app.get("/")
def home():
    return jsonify(
        {
            "message": "Movie Picture Backend is running",
            "status": "success",
        }
    )


@app.get("/movies")
def get_movies():
    return jsonify({"movies": MOVIES})


@app.get("/health")
def health_check():
    return jsonify(
        {
            "status": "healthy",
        }
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
