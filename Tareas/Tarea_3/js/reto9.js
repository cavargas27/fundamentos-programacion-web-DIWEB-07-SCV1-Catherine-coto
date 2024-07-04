function showResult() {
    const courseForm = document.getElementById('courseForm');
    const course = courseForm.course.value;
    const features = [...courseForm.feature]
                      .filter(feature => feature.checked)
                      .map(feature => feature.value);

    let resultText = `Has seleccionado el curso: ${course}<br>`;
    resultText += `Características adicionales: ${features.join(', ') || 'Ninguna'}`;

    document.getElementById('result').innerHTML = resultText;
}
