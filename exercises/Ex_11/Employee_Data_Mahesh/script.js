function EmployeeData(empType) {
    let vEmpId = document.getElementById('empid')
    let vEmpName = document.getElementById('empName')
    let vMType = empType;
    if (empType == 'Trainer') {
        document.getElementById('empId').value = 'TID0001';
        document.getElementById('empName').value = 'Balaji';
        document.getElementById('dob').value = '17-05-1977';
        document.getElementById('Qualification').value = 'B.Sc.,Mathematics, MCA';
        document.getElementById('mType').value = empType;
    }
    else if (empType == 'Student 1') {
        document.getElementById('empId').value = 'SID0001';
        document.getElementById('empName').value = 'Mahesh';
        document.getElementById('dob').value = '15-11-1993';
        document.getElementById('Qualification').value = 'B.Sc.,Computer Science';
        document.getElementById('mType').value = empType;
    }
    else if (empType == 'Student 2') {
        document.getElementById('empId').value = 'SID0002';
        document.getElementById('empName').value = 'Akshay';
        document.getElementById('dob').value = '26-10-1999';
        document.getElementById('Qualification').value = 'B.E,Computer Engineering';
        document.getElementById('mType').value = empType;
    }
    else if (empType == 'Student 3') {
        document.getElementById('empId').value = 'SID0003';
        document.getElementById('empName').value = 'Gokul';
        document.getElementById('dob').value = '10-10-2000';
        document.getElementById('Qualification').value = 'B.E,Mechanical';
        document.getElementById('mType').value = empType;
    }
    else if (empType == 'Student 4') {
        document.getElementById('empId').value = 'SID0004';
        document.getElementById('empName').value = 'Harish';
        document.getElementById('dob').value = '14-12-2000';
        document.getElementById('Qualification').value = 'B.E,Computer Science and Engineering';
        document.getElementById('mType').value = empType;
    }
    else if (empType == 'Student 5') {
        document.getElementById('empId').value = 'SID0005';
        document.getElementById('empName').value = 'Harathi';
        document.getElementById('dob').value = '23-08-2003';
        document.getElementById('Qualification').value = 'B.Sc.,Mathematics';
        document.getElementById('mType').value = empType;
    }
    else if (empType == 'Student 6') {
        document.getElementById('empId').value = 'SID0006';
        document.getElementById('empName').value = 'Julusmitha';
        document.getElementById('dob').value = '06-09-2001';
        document.getElementById('Qualification').value = 'B.Sc.,Chemistry, MCA';
        document.getElementById('mType').value = empType;
    }
    else if (empType == 'Student 7') {
        document.getElementById('empId').value = 'SID0007';
        document.getElementById('empName').value = 'Sarmila';
        document.getElementById('dob').value = '29-05-1998';
        document.getElementById('Qualification').value = 'B.E, Computer Science';
        document.getElementById('mType').value = empType;
    }
    else if (empType == 'Student 8') {
        document.getElementById('empId').value = 'SID0008';
        document.getElementById('empName').value = 'Bharathi Dhasan';
        document.getElementById('dob').value = '14-11-1998';
        document.getElementById('Qualification').value = 'B.E, Mechanical';
        document.getElementById('mType').value = empType;
    }
    else if (empType == 'Student 9') {
        document.getElementById('empId').value = 'SID0009';
        document.getElementById('empName').value = 'Santhana Kannan';
        document.getElementById('dob').value = '05-11-2001';
        document.getElementById('Qualification').value = 'B.E, Mechanical';
        document.getElementById('mType').value = empType;
    }

}