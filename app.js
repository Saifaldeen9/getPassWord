
const btn = document.getElementById('getPassword')

btn.addEventListener('click', printOut);

function printOut() {
    let fName = document.getElementById('firstName').value
    let lName = document.getElementById('lastName').value
 

    alert(`${fName[0].toUpperCase()}${lName[0].toUpperCase()}${getSchoolName()}`); 
}


function getSchoolName() {
    let schoolName = document.getElementById('school').value;
    return schoolName != 'null'? schoolName:'000';
}

