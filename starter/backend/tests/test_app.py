import pytest

from app import app


@pytest.fixture
def client():
    app.config["TESTING"] = True

    with app.test_client() as test_client:
        yield test_client


def test_home_endpoint(client):
    response = client.get("/")

    assert response.status_code == 200

    data = response.get_json()

    assert data["status"] == "success"


def test_movies_endpoint(client):
    response = client.get("/movies")

    assert response.status_code == 200

    data = response.get_json()

    assert isinstance(data, list)
    assert len(data) > 0


def test_health_endpoint(client):
    response = client.get("/health")

    assert response.status_code == 200

    data = response.get_json()

    assert data["status"] == "healthy"
