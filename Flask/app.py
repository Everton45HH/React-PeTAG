from flask import Flask, render_template
from routes.user_route import users_bp
from routes.device_route import devices_bp
#
app = Flask(__name__)
app.register_blueprint(users_bp)
app.register_blueprint(devices_bp)
@app.route('/')
def webHome():
    return render_template('u.html')

if __name__ == '__main__':
    app.run(debug=True)