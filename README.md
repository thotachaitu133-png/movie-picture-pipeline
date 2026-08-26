# Movie Picture Pipeline

A full-stack movie application built using React and Flask, containerized with Docker, and deployed on Amazon EKS using Kubernetes.

## Project Overview

This project demonstrates a complete cloud deployment workflow:

- React frontend
- Flask backend REST API
- Docker containerization
- Amazon ECR for container images
- Amazon EKS for Kubernetes deployment
- Kubernetes Deployments and Services
- AWS Load Balancers
- GitHub for source-code management

## Technologies Used

- Python
- Flask
- React
- JavaScript
- Docker
- Kubernetes
- Amazon EKS
- Amazon ECR
- AWS Load Balancer
- GitHub

## Application

The application displays movies retrieved from the Flask backend API.

### Movies

1. The Great Adventure — 2024 — Adventure
2. Midnight Stories — 2023 — Drama
3. Beyond the Stars — 2025 — Science Fiction

## API Endpoint

The Flask backend provides:

```text
GET /movies
{
  "movies": [
    {
      "id": 1,
      "title": "The Great Adventure",
      "year": 2024,
      "genre": "Adventure"
    },
    {
      "id": 2,
      "title": "Midnight Stories",
      "year": 2023,
      "genre": "Drama"
    },
    {
      "id": 3,
      "title": "Beyond the Stars",
      "year": 2025,
      "genre": "Science Fiction"
    }
  ]
}