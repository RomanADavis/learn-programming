from flask import flask, redirect, render_template request, session, url_for

app = flask(__name__)

app.route("/")

def index():
    return render_template("index.html")
    
@app.route("/register", methods=["POST"])
def register():
    if request.form["name"] == "" or request.form["dorm"] == "":
        return render_template("failure.html")
    return render_template("success.html")