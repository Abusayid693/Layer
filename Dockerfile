FROM python:3.9.9-buster

RUN pip install --upgrade pip

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY ./backend ./backend

CMD [ "python", "./backend/main.py" , "--host", "0.0.0.0", "--port", "80"]

EXPOSE 8000