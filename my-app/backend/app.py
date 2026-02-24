# Fichier app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__) #Création d'une application Flask
CORS(app) #Accès depuis n'importe quelle origine

@app.route("/calculate", methods=["POST"])

def calculate(operation : str, field1 : float, field2 : float) :
    result = None

    if operation == "sub":
        result = field1 - field2
    elif operation == "add":
        result = field1 + field2
    elif operation == "multi":
        result = field1 * field2
    else:
        if field2 != 0:
            result = field1 / field2
    return result


if __name__ == "__main__":
    app.run(debug=True)