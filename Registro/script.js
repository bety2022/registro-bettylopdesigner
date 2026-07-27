// ===================================================
// BettyLopDesigner — Registro
// Lógica de interactividad del formulario
// ===================================================

document.addEventListener('DOMContentLoaded', () => {

  const form        = document.getElementById('registroForm');
  const password     = document.getElementById('password');
  const password2     = document.getElementById('password2');
  const matchMsg     = document.getElementById('matchMsg');
  const statusText   = document.getElementById('statusText');
  const statusDot    = document.getElementById('statusDot');
  const inputs       = form.querySelectorAll('input[required]');

  // --- Mostrar / ocultar contraseña (cursor: pointer definido en CSS) ---
  document.querySelectorAll('.toggle-eye').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      const showing = target.type === 'text';
      target.type = showing ? 'password' : 'text';
      btn.textContent = showing ? '\u{1F441}' : '\u{1F576}';
    });
  });

  // --- Verificación en vivo de coincidencia de contraseñas ---
  function checkMatch(){
    if (!password.value || !password2.value){
      matchMsg.textContent = '';
      matchMsg.className = 'match-msg';
      return false;
    }
    if (password.value === password2.value){
      matchMsg.textContent = '✔ las contraseñas coinciden';
      matchMsg.className = 'match-msg ok';
      return true;
    } else {
      matchMsg.textContent = '✖ las contraseñas no coinciden';
      matchMsg.className = 'match-msg bad';
      return false;
    }
  }

  password.addEventListener('input', checkMatch);
  password2.addEventListener('input', checkMatch);

  // --- Barra de estado tipo consola: refleja el progreso del formulario ---
  function updateStatus(){
    const total = inputs.length;
    let filled = 0;
    inputs.forEach(inp => { if (inp.value.trim() !== '') filled++; });

    if (filled === 0){
      statusText.textContent = '> esperando datos...';
      statusDot.className = 'status-dot';
    } else if (filled < total){
      statusText.textContent = `> compilando... (${filled}/${total} campos)`;
      statusDot.className = 'status-dot warn';
    } else if (checkMatch()){
      statusText.textContent = '> listo para enviar ✔';
      statusDot.className = 'status-dot ok';
    } else {
      statusText.textContent = '> error: revisa la contraseña';
      statusDot.className = 'status-dot error';
    }
  }

  inputs.forEach(inp => inp.addEventListener('input', updateStatus));

  // --- Envío del formulario al servidor ---
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!checkMatch()){
      statusText.textContent = '> error: las contraseñas no coinciden';
      statusDot.className = 'status-dot error';
      return;
    }

    const data = {
      nombre: form.nombre.value.trim(),
      apellido: form.apellido.value.trim(),
      correo: form.correo.value.trim(),
      telefono: form.telefono.value.trim(),
      password: password.value
    };

    statusText.textContent = '> enviando datos al servidor...';
    statusDot.className = 'status-dot warn';

    try {
      const res = await fetch('/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok){
        statusText.textContent = '> registro exitoso ✔ ¡bienvenido/a!';
        statusDot.className = 'status-dot ok';
        form.reset();
        matchMsg.textContent = '';
      } else {
        statusText.textContent = '> el servidor respondió con un error';
        statusDot.className = 'status-dot error';
      }
    } catch (err){
      statusText.textContent = '> no fue posible conectar con el servidor';
      statusDot.className = 'status-dot error';
    }
  });

});
