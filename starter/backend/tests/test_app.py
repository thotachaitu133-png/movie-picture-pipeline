import pytest

from app import app


@pytest.fixture
def client():
    app.config["TESTING"] = True

    with app.test_client() as client:
        yield client


def test_health_endpoint(client):
    response = client.get("/health")

    assert response.status_code == 200

    data = response.get_json()

    assert data["status"] == "healthy"


def test_movies_endpoint(client):
    response = client.get("/movies")

    assert response.status_code == 200

    data = response.get_json()

    assert isinstance(data, dict)
    assert "movies" in data
    assert isinstance(data["movies"], list)

    assert len(data["movies"]) == 3


def test_movies_content(client):
    response = client.get("/movies")

    assert response.status_code == 200

    data = response.get_json()
    movies = data["movies"]

    assert movies[0]["title"] == "The Great Adventure"
    assert movies[1]["title"] == "Midnight Stories"
    assert movies[2]["title"] == "Beyond the Stars"