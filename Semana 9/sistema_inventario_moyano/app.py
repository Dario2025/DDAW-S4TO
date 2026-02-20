<<<<<<< HEAD
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/productos')
def productos():
    return render_template("productos.html")

if __name__ == '__main__':
=======
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/productos')
def productos():
    return render_template("productos.html")

if __name__ == '__main__':
>>>>>>> e06ce9decf0e60957145b20ceabd82e594b1ec01
    app.run(host="0.0.0.0", port=5000)