import sqlite3

from flask import current_app, g, Flask
from flask.cli import with_appcontext

current_app = Flask('suryoyolyrics')

def get_db():
    db = sqlite3.connect('LyricsDB.db'
                         #,detect_types=sqlite3.PARSE_DECLTYPES
        )
    #db.row_factory = sqlite3.Row
    return db

def init_db():
    db = get_db()
    with current_app.open_resource('CreateTable.sql') as f:
        db.executescript(f.read().decode('utf8'))
        print("Table created.")

def insert_song(artist, song):
    db = get_db()
    sql = """insert into 'artists' (artist, song)
                        VALUES ('{}', '{}');""".format(artist, song)
    #print(sql)
    db.executescript(sql)
    print("Inserted.")

def get_song(artist):
    db = get_db()
    cur = db.cursor()
    
    sql = """select * from 'artists'
                WHERE artist = ('{}');""".format(artist)
    
    cur.execute(sql)
    rows = cur.fetchone()
    print("Gottem.")
    return rows

if __name__ == '__main__':
    #init_db()
    insert_song("Gab", "Mas")