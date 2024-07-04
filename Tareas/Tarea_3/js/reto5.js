const versionOptions = {
    'spark': ['LTZ', 'LS', 'Active'],
    'tracker': ['Premier', 'LT', 'LS'],
    'captiva': ['Premier', 'LTZ', 'LS']
};

const carImages = {
    'spark': '../imagenes/chevySpark.jpg',
    'tracker': '../imagenes/chevytraker.png',
    'captiva': '../imagenes/chevytrax.jpg'
};

function updateVersions() {
    const modelSelect = document.getElementById('modelSelect');
    const versionSelect = document.getElementById('versionSelect');
    const selectedModel = modelSelect.value;

    versionSelect.innerHTML = '<option value="">--Selecciona una versión--</option>';

    if (selectedModel && versionOptions[selectedModel]) {
        versionOptions[selectedModel].forEach(version => {
            const option = document.createElement('option');
            option.value = version;
            option.textContent = version;
            versionSelect.appendChild(option);
        });
    }
}

function calcularCuota() {
    const modelSelect = document.getElementById('modelSelect');
    const versionSelect = document.getElementById('versionSelect');
    const carImage = document.getElementById('carImage');
    const cuotaText = document.getElementById('cuota');

    const selectedModel = modelSelect.value;
    const selectedVersion = versionSelect.value;

    if (selectedModel && selectedVersion) {
        const cuota = (Math.random() * (1000 - 500) + 500).toFixed(2);
        cuotaText.textContent = `La cuota aproximada para el ${selectedModel} (${selectedVersion}) es $${cuota}`;
        carImage.src = carImages[selectedModel];
        carImage.style.display = 'block';
    } else {
        cuotaText.textContent = 'Por favor, selecciona un modelo y una versión.';
        carImage.style.display = 'none';
    }
}
