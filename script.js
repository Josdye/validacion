document.getElementById('controlNumberForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    const controlNumber = document.getElementById('controlNumber').value;
    const messageDiv = document.getElementById('message');

    // Validar el número de control
    if (/^2184\d{4}$/.test(controlNumber)) {
        messageDiv.textContent = 'valido';
        messageDiv.style.color = 'white';
    } else {
        messageDiv.textContent = 'invalido';
        messageDiv.style.color = 'red';
    }
});
