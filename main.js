document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('backend/registro.php', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('responseMsg').textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMsg').textContent = 'Error en la solicitud';
    });
});