document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Limpia mensajes previos
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';

  // Lógica para determinar el rol basado en el correo
  if (email.startsWith('2024_')) {
      // Alumno
      window.location.href = 'alumno.html';
  } else if (/^[a-zA-Z]+\.[a-zA-Z]+@iticbcn\.cat$/.test(email)) {
      // Profesor
      window.location.href = 'profesor.html';
  } else if (email.includes('admin')) {
      // Administrador
      window.location.href = 'admin.html';
  } else {
      // Correo no reconocido
      errorMessage.textContent = 'Correo no reconocido. Verifica tus datos.';
      errorMessage.style.display = 'block';
  }

  // Puedes incluir validación adicional para la contraseña aquí si es necesario
});
