from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return '<h1>Hello from Google App Engine!</h1><p>This is a simple Flask app deployed on GCP.</p>'

@app.route('/about')
def about():
    return '<h2>About This App</h2><p>This Flask app was deployed using Google App Engine Standard Environment.</p>'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
