<div align="center">

```
  ██████╗ ███████╗████████╗████████╗██╗   ██╗██╗      ██████╗ ██████╗
  ██╔══██╗██╔════╝╚══██╔══╝╚══██╔══╝╚██╗ ██╔╝██║     ██╔═══██╗██╔══██╗
  ██████╔╝█████╗     ██║      ██║    ╚████╔╝ ██║     ██║   ██║██████╔╝
  ██╔══██╗██╔══╝     ██║      ██║     ╚██╔╝  ██║     ██║   ██║██╔═══╝
  ██████╔╝███████╗   ██║      ██║      ██║   ███████╗╚██████╔╝██║
  ╚═════╝ ╚══════╝   ╚═╝      ╚═╝      ╚═╝   ╚══════╝ ╚═════╝ ╚═╝
```

### `> designer.mind + developer.logic` — **Born to Code** 💜

[![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![Made with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Made with Flask](https://img.shields.io/badge/Flask-9B59D0?style=for-the-badge&logo=flask&logoColor=white)](#)

[![Status](https://img.shields.io/badge/status-en_desarrollo-A8D832?style=flat-square)](#)
[![License](https://img.shields.io/badge/license-MIT-F5C518?style=flat-square)](#)
[![PRs](https://img.shields.io/badge/PRs-welcome-9B59D0?style=flat-square)](#)

</div>

---

## `$ cat about.md`

**Registro — BettyLopDesigner** es el formulario de registro oficial de
[bettylopdesigner.com](#), diseñado como una ventana de terminal/editor de
código — porque aquí la moda también se compila. 👗⌨️

Un formulario no tenía por qué verse como un formulario más. Este pide tus
datos como si estuvieras corriendo un script, con una barra de estado que
va de `esperando datos...` a `listo para enviar ✔`, y un botón que cambia de
morado a verde lima cuando lo compilas con éxito.

<br>

## `$ ls features/`

```
✔ Formulario interactivo   → nombre, apellido, correo, teléfono, contraseña
✔ Verificación en vivo      → coincidencia de contraseñas en tiempo real
✔ Mostrar / ocultar clave   → toggle con ícono de ojo
✔ Barra de estado           → feedback tipo consola mientras se llena el form
✔ Validación en servidor    → Flask valida y responde con errores claros
✔ Persistencia simple       → cada registro se guarda en usuarios.json
✔ Identidad de marca 100%   → paleta, tipografía y microcopy de BettyLop
```

<br>

## `$ tree .`

```
Registro/
├── index.html         → estructura del formulario
├── style.css           → estilos con la paleta de marca
├── script.js            → interactividad del lado del cliente
├── app.py               → servidor Flask (recibe, valida y guarda datos)
├── usuarios.json        → se genera automáticamente (no se sube al repo)
└── assets/
    └── logo.png          → logo de BettyLopDesigner
```

<br>

## `$ npm run design-tokens`

Paleta oficial usada en cada componente del formulario:

| Token            | Preview                                                                 | HEX       | Uso                                          |
|-------------------|:------------------------------------------------------------------------:|-----------|-----------------------------------------------|
| `BETTYLOPURPLE`   | ![#9B59D0](https://placehold.co/18x18/9B59D0/9B59D0.png)                | `#9B59D0` | Botón CTA · identidad de marca               |
| `CODE LIME`       | ![#A8D832](https://placehold.co/18x18/A8D832/A8D832.png)                | `#A8D832` | Estados de éxito · hover del botón           |
| `DEBUG GOLD`      | ![#F5C518](https://placehold.co/18x18/F5C518/F5C518.png)                | `#F5C518` | Advertencias · badges · contenido destacado  |
| `VOID BLACK`      | ![#0D0D0D](https://placehold.co/18x18/0D0D0D/0D0D0D.png)                | `#0D0D0D` | Fondo principal (dark mode)                  |
| `TERMINAL BG`     | ![#CCCCCC](https://placehold.co/18x18/CCCCCC/CCCCCC.png)                | `#CCCCCC` | Texto secundario                             |
| `OUTPUT WHITE`    | ![#FFFFFF](https://placehold.co/18x18/FFFFFF/FFFFFF.png)                | `#FFFFFF` | Texto principal                              |

<br>

## `$ ./run.sh`

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/registro-bettylopdesigner.git
cd registro-bettylopdesigner/Registro

# 2. Instala la única dependencia
pip install flask

# 3. Levanta el servidor
python app.py

# 4. Ábrelo en tu navegador
# → http://127.0.0.1:5000
```

<br>

## `$ curl -X POST /registro`

El formulario envía los datos por `fetch()` en JSON hacia la ruta `/registro`.
El servidor valida cada campo y responde así:

```jsonc
// ✔ 201 Created
{ "ok": true, "mensaje": "¡Bienvenido/a, Camila!" }

// ✖ 400 Bad Request
{ "ok": false, "errores": ["El correo electrónico no es válido."] }
```

Cada registro exitoso queda guardado en `usuarios.json`, sin exponer nunca la
contraseña en texto plano dentro del archivo.

<br>

## `$ git log --oneline`

- 🎨 Formulario con estética de terminal/editor de código
- 🔐 Validación en vivo de contraseñas + toggle de visibilidad
- 🟢 Barra de estado con feedback en tiempo real
- 🐍 Backend en Flask con validación de datos
- 💾 Persistencia en `usuarios.json`

<br>

## `$ whoami`

Un formulario diseñado para **BettyLopDesigner**, donde el estilo se define
tanto en Photoshop como en un archivo `.css`.

<div align="center">

**Hecho con 💜 y `console.log("¡bienvenido/a!")`**

</div>
