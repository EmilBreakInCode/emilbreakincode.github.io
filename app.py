from flask import Flask, jsonify
import time
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    return "<h1>Статическая страница (Origin)</h1>"

@app.route('/api/time')
def dynamic_time():
    # Имитируем тяжелый SQL-запрос или задержку бэкенда в 1 секунду
    time.sleep(1)
    return jsonify({
        "current_time": datetime.utcnow().isoformat() + "Z",
        "data": "Это динамический ответ с сервера АСУБ"
    })

if __name__ == '__main__':
    # Запускаем локальный сервер на порту 8000
    app.run(host='0.0.0.0', port=8000)