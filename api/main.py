import datetime
from flask import Flask
import database.db as db

app = Flask(__name__)

@app.route('/api/time')
def get_current_time():
    return {'time': datetime.datetime.utcnow()}

@app.route('/api/db')
def get_current_time2():
    #with app.app_context():
    db.insert_song('Masso', 'Bellyoyo')
    return {'time':  datetime.datetime.utcnow()}

@app.route('/api/get')
def get_data_from_db():
    #with app.app_context():
    res = db.get_song('Masso')
    print(res[1], res[2])
    return {'artist':  res[1], 'song':res[2]}
  