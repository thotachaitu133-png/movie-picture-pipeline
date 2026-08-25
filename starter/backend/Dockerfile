FROM python:3.10-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

COPY Pipfile Pipfile.lock ./

RUN pip install --no-cache-dir pipenv \
    && pipenv install --system --deploy

COPY app.py ./

EXPOSE 5000

CMD ["python", "app.py"]