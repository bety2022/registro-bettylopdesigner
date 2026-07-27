# ===================================================
# BettyLopDesigner — Registro
# Servidor en Python (Flask) que recibe el formulario
# ===================================================
#
# Instalación:
#   pip install flask
#
# Ejecución:
#   python app.py
#   Luego abre http://127.0.0.1:5000 en tu navegador
#
# El formulario (index.html) envía los datos por fetch()
# a la ruta /registro mediante POST en formato JSON.

from flask import Flask, request, jsonify, send_from_directory
import os
import re
import json

app = Flask(__name__, static_folder=".", static_url_path="")

USUARIOS = []  # En un proyecto real esto se guardaría en una base de datos

ARCHIVO_USUARIOS = "usuarios.json"


def guardar_usuario(usuario):
    """Agrega un usuario al archivo usuarios.json (crea el archivo si no existe)."""
    if os.path.exists(ARCHIVO_USUARIOS):
        with open(ARCHIVO_USUARIOS, "r", encoding="utf-8") as f:
            try:
                datos = json.load(f)
            except json.JSONDecodeError:
                datos = []
    else:
        datos = []

    datos.append(usuario)

    with open(ARCHIVO_USUARIOS, "w", encoding="utf-8") as f:
        json.dump(datos, f, ensure_ascii=False, indent=2)


def validar_correo(correo: str) -> bool:
    patron = r"^[^@\s]+@[^@\s]+\.[^@\s]+$"
    return re.match(patron, correo) is not None


@app.route("/")
def home():
    return send_from_directory(".", "index.html")


@app.route("/registro", methods=["POST"])
def registro():
    datos = request.get_json(silent=True) or {}

    nombre = (datos.get("nombre") or "").strip()
    apellido = (datos.get("apellido") or "").strip()
    correo = (datos.get("correo") or "").strip()
    telefono = (datos.get("telefono") or "").strip()
    password = datos.get("password") or ""

    # --- Validaciones básicas del lado del servidor ---
    errores = []
    if not nombre:
        errores.append("El nombre es obligatorio.")
    if not apellido:
        errores.append("El apellido es obligatorio.")
    if not correo or not validar_correo(correo):
        errores.append("El correo electrónico no es válido.")
    if not telefono:
        errores.append("El teléfono es obligatorio.")
    if len(password) < 8:
        errores.append("La contraseña debe tener al menos 8 caracteres.")

    if errores:
        return jsonify({"ok": False, "errores": errores}), 400

    # Nunca guardar la contraseña en texto plano en un proyecto real:
    # aquí solo se simula el registro, usar hashing (bcrypt/werkzeug) en producción.
    usuario = {
        "nombre": nombre,
        "apellido": apellido,
        "correo": correo,
        "telefono": telefono,
    }
    USUARIOS.append(usuario)
    guardar_usuario(usuario)

    print(f"[Registro] Nuevo usuario: {usuario}")

    return jsonify({"ok": True, "mensaje": f"¡Bienvenido/a, {nombre}!"}), 201


if __name__ == "__main__":
    app.run(debug=True)
