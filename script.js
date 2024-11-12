const students = [
    { id: 0, name: "Janu", English: 50, Maths: 86, Science: 77, SocialScience: 88 },
    { id: 1, name: "Thanu", English: 75, Maths: 96, Science: 67, SocialScience: 91 },
    { id: 2, name: "Tara", English: 90, Maths: 35, Science: 86, SocialScience: 100 },
    { id: 3, name: "Glen", English: 79, Maths: 68, Science: 77, SocialScience: 78 },
    { id: 4, name: "Zara", English: 80, Maths: 85, Science: 96, SocialScience: 68 }
];

document.addEventListener('DOMContentLoaded', () => {
    const subjectDropdown = document.getElementById('subject');
    const filterRadios = document.querySelectorAll('input[name="filter"]');
    const value1Input = document.getElementById('value1');
    const value2Input = document.getElementById('value2');
    const filterBtn = document.getElementById('filterBtn');
    const clearBtn = document.getElementById('clearBtn');
    const tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

    function displayStudents(students) {
        tableBody.innerHTML = '';
        students.forEach(student => {
            const row = tableBody.insertRow();
            row.insertCell(0).innerText = student.id + 1;
            row.insertCell(1).innerText = student.name;
            row.insertCell(2).innerText = student.English;
            row.insertCell(3).innerText = student.Maths;
            row.insertCell(4).innerText = student.Science;
            row.insertCell(5).innerText = student.SocialScience;
        });
    }

    function filterStudents() {
        const selectedSubject = subjectDropdown.value;
        const selectedFilter = document.querySelector('input[name="filter"]:checked').value;
        const value1 = parseInt(value1Input.value);
        const value2 = parseInt(value2Input.value);
        let filteredStudents;

        if (selectedFilter === 'above') {
            filteredStudents = students.filter(student => student[selectedSubject] > value1);
        } else if (selectedFilter === 'below') {
            filteredStudents = students.filter(student => student[selectedSubject] < value1);
        } else if (selectedFilter === 'between') {
            filteredStudents = students.filter(student => student[selectedSubject] >= value1 && student[selectedSubject] <= value2);
        }
        
        displayStudents(filteredStudents);
    }

    filterRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'between') {
                value2Input.style.display = 'inline';
            } else {
                value2Input.style.display = 'none';
            }
        });
    });

    filterBtn.addEventListener('click', filterStudents);
    clearBtn.addEventListener('click', () => {
        value1Input.value = '';
        value2Input.value = '';
        displayStudents(students);
    });

    displayStudents(students);
});
