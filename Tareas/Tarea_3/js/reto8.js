document.addEventListener('DOMContentLoaded', function() {
    const studentForm = document.getElementById('studentForm');
    const studentsDropdown = document.getElementById('studentsDropdown');
    const calculateAverageBtn = document.getElementById('calculateAverage');
    const averageResult = document.getElementById('averageResult');

    // Cargar estudiantes desde localStorage
    const students = JSON.parse(localStorage.getItem('students')) || [];

    function updateDropdown() {
        studentsDropdown.innerHTML = '<option value="" disabled selected>Seleccione un estudiante</option>';
        students.forEach((student, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${student.firstName} ${student.lastName}`;
            studentsDropdown.appendChild(option);
        });
    }

    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const grade1 = parseFloat(document.getElementById('grade1').value);
        const grade2 = parseFloat(document.getElementById('grade2').value);
        const grade3 = parseFloat(document.getElementById('grade3').value);

        const student = { firstName, lastName, grade1, grade2, grade3 };
        students.push(student);

        localStorage.setItem('students', JSON.stringify(students));
        updateDropdown();

        studentForm.reset();
    });

    calculateAverageBtn.addEventListener('click', function() {
        const selectedIndex = studentsDropdown.value;
        if (selectedIndex === "") {
            averageResult.textContent = "Por favor, seleccione un estudiante.";
            return;
        }

        const student = students[selectedIndex];
        const average = (student.grade1 + student.grade2 + student.grade3) / 3;
        averageResult.textContent = `El promedio de ${student.firstName} ${student.lastName} es ${average.toFixed(2)}`;
    });

    updateDropdown();
});
