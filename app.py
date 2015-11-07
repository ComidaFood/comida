from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def begin():
    return "HI"

if __name__=="__main__":
    app.debug = True
    app.run('0.0.0.0', port = 8000)
