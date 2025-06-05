
from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
import datetime

app = Flask(__name__)
CORS(app)
SECRET_KEY = 'kusbahkey'


users = {
    "test@example.com": {
        "password": "123456",
        "id": 1
    }
}


def generate_token(user_id):
    payload = {
        'user_id': user_id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm='HS256')


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = users.get(email)
    if user and user['password'] == password:
        token = generate_token(user['id'])
        return jsonify({'token': token})
    return jsonify({'error': 'Invalid credentials'}), 401


def token_required(f):
    def wrapper(*args, **kwargs):
        token = request.headers.get('Authorization', None)
        if token:
            try:
                token = token.split()[1]
                payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
                request.user_id = payload['user_id']
            except jwt.ExpiredSignatureError:
                return jsonify({'error': 'Token expired'}), 401
            except jwt.InvalidTokenError:
                return jsonify({'error': 'Invalid token'}), 401
        else:
            return jsonify({'error': 'Token missing'}), 401
        return f(*args, **kwargs)
    wrapper.__name__ = f.__name__ 
    return wrapper


@app.route('/protected', methods=['GET'])
@token_required
def protected():
    return jsonify({'message': f'Hello user {request.user_id}'})

if __name__ == '__main__':
    app.run(debug=True)
