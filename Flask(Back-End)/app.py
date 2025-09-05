from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/login", methods=["POST"])
def criar_usuario():
    data = request.json
    email = data.get("email")
    senha = data.get("senha")
    print(email,senha)

    return jsonify({"message": f"Usuário {email} criado com sucesso!"})

if __name__ == "__main__":
    app.run(debug=True, port=5174)