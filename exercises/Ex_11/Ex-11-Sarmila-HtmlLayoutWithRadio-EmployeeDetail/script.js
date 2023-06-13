
function EmployeeDetails(empType) {
   let parttime, fullTime;

   /////////////////////////////Intially making all the checkbox as uncheck//////////////////////////////////
   document.getElementById("transBike").checked = false;
   document.getElementById("transCar").checked = false;
   document.getElementById("transBus").checked = false;
   document.getElementById("transOfz").checked = false;

    /////////////////////////////Function used to hide and show the identity section//////////////////////////////////
   hideAndShowIdentity();

    //////////////////Assigning the values for the main content and identy section based on empType////////////////////
    if (empType == 'Freasher') {
        document.getElementById("empId").value = 'E001';
        document.getElementById("empFName").value = 'Sarmila Shankar';
        document.getElementById("empName").textContent = 'Sarmila Shankar';
        document.getElementById("empHiredate").value = "2023-01-12";
        document.getElementById("transBus").checked = true;
        document.getElementById("transOfz").checked = true;
        parttime = document.getElementById("partTime");
        fullTime = document.getElementById("fullTime");
        parttime.checked = true;
        fullTime.checked = false;
        document.getElementById("empDept").value = '1';
        salaryCalculation(empType);
        monthDiff(document.getElementById("empHiredate").value);

        document.getElementById("emp1").style.display = "none";
        document.getElementById("emp2").style.display = "none";
        document.getElementById("emp3").style.display = "none";
        document.getElementById("emp4").style.display = "block";
        document.getElementById("emp5").style.display = "none";
        document.getElementById("emp6").style.display = "none";

        //////////////////Hiding other user images and showing one particular img////////////////////
        document.getElementById("idNo").textContent = "ID0000112";
        document.getElementById("empDOB").textContent = "20 May 2000";
        document.getElementById("empContact").textContent = "+91 9123456780";
        document.getElementById("empEmail").textContent = "SarmiS@gmail.com";
        document.getElementById("empAdd").textContent = "Appavu Nagar, Hosur";
        document.getElementById("idIssueDate").textContent = "2023-01-15";

        //////////////////Hiding other user QR and showing one particular QR///////////////////
        document.getElementById("qr1").style.display = "block";
        document.getElementById("qr2").style.display = "none";
        document.getElementById("qr3").style.display = "none";
        document.getElementById("qr4").style.display = "none";
        document.getElementById("qr5").style.display = "none";
    }
    else if (empType == 'Supervisor') {
        document.getElementById("empId").value = 'E002';
        document.getElementById("empFName").value = 'Nishnth Shankar';
        document.getElementById("empHiredate").value = "2018-05-20";
        document.getElementById("transBike").checked = true;
        document.getElementById("transCar").checked = true;
        parttime = document.getElementById("partTime");
        fullTime = document.getElementById("fullTime");
        parttime.checked = false;
        fullTime.checked = true;
        document.getElementById("empDept").value = '2';
        salaryCalculation(empType);
        monthDiff(document.getElementById("empHiredate").value);

        document.getElementById("emp1").style.display = "none";
        document.getElementById("emp2").style.display = "block";
        document.getElementById("emp3").style.display = "none";
        document.getElementById("emp4").style.display = "none";
        document.getElementById("emp5").style.display = "none";
        document.getElementById("emp6").style.display = "none";

        document.getElementById("empName").textContent = 'Nishnth Shankar';
        document.getElementById("idNo").textContent = "ID0000103";
        document.getElementById("empDOB").textContent = "31 March 1990";
        document.getElementById("empContact").textContent = "+91 8723526454";
        document.getElementById("empEmail").textContent = "NishS@yahoo.com";
        document.getElementById("empAdd").textContent = "Vinayaga street, coimbatore";
        document.getElementById("idIssueDate").textContent = "2018-05-25";

        document.getElementById("qr1").style.display = "none";
        document.getElementById("qr2").style.display = "block";
        document.getElementById("qr3").style.display = "none";
        document.getElementById("qr4").style.display = "none";
        document.getElementById("qr5").style.display = "none";
    }
    else if (empType == 'Fitter') {
        document.getElementById("empId").value = 'E003';
        document.getElementById("empFName").value = 'Bavith Balaji';
        document.getElementById("empHiredate").value = "2020-08-15";
        document.getElementById("transCar").checked = true;
        document.getElementById("transOfz").checked = true;
        parttime = document.getElementById("partTime");
        fullTime = document.getElementById("fullTime");
        parttime.checked = false;
        fullTime.checked = true;
        document.getElementById("empDept").value = '3';
        salaryCalculation(empType);
        monthDiff(document.getElementById("empHiredate").value);

        document.getElementById("emp1").style.display = "none";
        document.getElementById("emp2").style.display = "none";
        document.getElementById("emp3").style.display = "block";
        document.getElementById("emp4").style.display = "none";
        document.getElementById("emp5").style.display = "none";
        document.getElementById("emp6").style.display = "none";

        document.getElementById("empName").textContent = 'Bavith Balaji';
        document.getElementById("idNo").textContent = "ID0000107";
        document.getElementById("empDOB").textContent = "02 Apr 1996";
        document.getElementById("empContact").textContent = "+91 7452532890";
        document.getElementById("empEmail").textContent = "bavith@gmail.com";
        document.getElementById("empAdd").textContent = "Anna nagar, Mayiladudurai";
        document.getElementById("idIssueDate").textContent = "2020-08-20";

        document.getElementById("qr1").style.display = "none";
        document.getElementById("qr2").style.display = "none";
        document.getElementById("qr3").style.display = "block";
        document.getElementById("qr4").style.display = "none";
        document.getElementById("qr5").style.display = "none";
    }
    else if (empType == 'Welder') {
        document.getElementById("empId").value = 'E004';
        document.getElementById("empFName").value = 'Shreesha Sambath';
        document.getElementById("empHiredate").value = "2019-07-01";
        document.getElementById("transBike").checked = true;
        document.getElementById("transOfz").checked = true;
        parttime = document.getElementById("partTime");
        fullTime = document.getElementById("fullTime");
        parttime.checked = true;
        fullTime.checked = false;
        document.getElementById("empDept").value = '4';
        salaryCalculation(empType);
        monthDiff(document.getElementById("empHiredate").value);

        document.getElementById("emp1").style.display = "none";
        document.getElementById("emp2").style.display = "none";
        document.getElementById("emp3").style.display = "none";
        document.getElementById("emp4").style.display = "block";
        document.getElementById("emp5").style.display = "none";
        document.getElementById("emp6").style.display = "none";

        document.getElementById("empName").textContent = 'Shreesha Sambath';
        document.getElementById("idNo").textContent = "ID0000130";
        document.getElementById("empDOB").textContent = "20 Dec 1996";
        document.getElementById("empContact").textContent = "+91 6324832322";
        document.getElementById("empEmail").textContent = "ShreeS@gmail.com";
        document.getElementById("empAdd").textContent = "Valluvar Street, Kumbakonam";
        document.getElementById("idIssueDate").textContent = "2019-07-08";

        document.getElementById("qr1").style.display = "none";
        document.getElementById("qr2").style.display = "none";
        document.getElementById("qr3").style.display = "none";
        document.getElementById("qr4").style.display = "block";
        document.getElementById("qr5").style.display = "none";
    }
    else if (empType == 'Rigger') {
        document.getElementById("empId").value = 'E005';
        document.getElementById("empFName").value = 'Harini Karthick';
        document.getElementById("empHiredate").value = "2021-04-23";
        document.getElementById("transOfz").checked = true;
        parttime = document.getElementById("partTime");
        fullTime = document.getElementById("fullTime");
        parttime.checked = true;
        fullTime.checked = false;
        document.getElementById("empDept").value = '5';
        salaryCalculation(empType);
        monthDiff(document.getElementById("empHiredate").value);

        document.getElementById("emp1").style.display = "none";
        document.getElementById("emp2").style.display = "none";
        document.getElementById("emp3").style.display = "none";
        document.getElementById("emp4").style.display = "none";
        document.getElementById("emp5").style.display = "block";
        document.getElementById("emp6").style.display = "none";

        document.getElementById("empName").textContent = 'Harini Karthick';
        document.getElementById("idNo").textContent = "ID0000160";
        document.getElementById("empDOB").textContent = "03 Sep 1997";
        document.getElementById("empContact").textContent = "+91 9882163721";
        document.getElementById("empEmail").textContent = "Harini@gmail.com";
        document.getElementById("empAdd").textContent = "Mullai street, Chennai";
        document.getElementById("idIssueDate").textContent = "2021-04-27";

        document.getElementById("qr1").style.display = "none";
        document.getElementById("qr2").style.display = "none";
        document.getElementById("qr3").style.display = "none";
        document.getElementById("qr4").style.display = "none";
        document.getElementById("qr5").style.display = "block";
    }
    else if (empType == 'Grinder') {
        document.getElementById("empId").value = 'E006';
        document.getElementById("empFName").value = 'Madhan Kumar';
        document.getElementById("empHiredate").value = "2022-03-09";
        document.getElementById("transCar").checked = true;
        parttime = document.getElementById("partTime");
        fullTime = document.getElementById("fullTime");
        parttime.checked = false;
        fullTime.checked = true;
        document.getElementById("empDept").value = '6';
        salaryCalculation(empType);
        monthDiff(document.getElementById("empHiredate").value);

        document.getElementById("emp1").style.display = "block";
        document.getElementById("emp2").style.display = "none";
        document.getElementById("emp3").style.display = "none";
        document.getElementById("emp4").style.display = "none";
        document.getElementById("emp5").style.display = "none";
        document.getElementById("emp6").style.display = "none";

        document.getElementById("empName").textContent = 'Madhan Kumar';
        document.getElementById("idNo").textContent = "ID0000890";
        document.getElementById("empDOB").textContent = "06 July 2000";
        document.getElementById("empContact").textContent = "+91 9364354332";
        document.getElementById("empEmail").textContent = "madan@gmail.com";
        document.getElementById("empAdd").textContent = "Titan township, Hosur";
        document.getElementById("idIssueDate").textContent = "2022-03-13";

        document.getElementById("qr1").style.display = "block";
        document.getElementById("qr2").style.display = "none";
        document.getElementById("qr3").style.display = "none";
        document.getElementById("qr4").style.display = "none";
        document.getElementById("qr5").style.display = "none";
    }
    else if (empType == 'Supervisor1') {
        document.getElementById("empId").value = 'E007';
        document.getElementById("empFName").value = 'Dhakshu Santhosh';
        document.getElementById("empHiredate").value = "2017-02-11";
        document.getElementById("transOfz").checked = true;
        parttime = document.getElementById("partTime");
        fullTime = document.getElementById("fullTime");
        parttime.checked = true;
        fullTime.checked = false;
        document.getElementById("empDept").value = '2';
        salaryCalculation(empType);
        monthDiff(document.getElementById("empHiredate").value);

        document.getElementById("emp1").style.display = "none";
        document.getElementById("emp2").style.display = "none";
        document.getElementById("emp3").style.display = "none";
        document.getElementById("emp4").style.display = "block";
        document.getElementById("emp5").style.display = "none";
        document.getElementById("emp6").style.display = "none";

        document.getElementById("empName").textContent = 'Dhakshu Santhosh';
        document.getElementById("idNo").textContent = "ID0000789";
        document.getElementById("empDOB").textContent = "09 Oct 1994";
        document.getElementById("empContact").textContent = "+91 9654234123";
        document.getElementById("empEmail").textContent = "Dhaks@gmail.com";
        document.getElementById("empAdd").textContent = "Tank Street, Namakkal";
        document.getElementById("idIssueDate").textContent = "2017-02-13";

        document.getElementById("qr1").style.display = "none";
        document.getElementById("qr2").style.display = "block";
        document.getElementById("qr3").style.display = "none";
        document.getElementById("qr4").style.display = "none";
        document.getElementById("qr5").style.display = "none";
    }
    else if (empType == 'Freasher1') {
        document.getElementById("empId").value = 'E008';
        document.getElementById("empFName").value = 'Geetha Arumugam';
        document.getElementById("empHiredate").value = "2023-03-01";
        document.getElementById("transBus").checked = true;
        parttime = document.getElementById("partTime");
        fullTime = document.getElementById("fullTime");
        parttime.checked = true;
        fullTime.checked = false;
        document.getElementById("empDept").value = '1';
        salaryCalculation(empType);
        monthDiff(document.getElementById("empHiredate").value);

        document.getElementById("emp1").style.display = "none";
        document.getElementById("emp2").style.display = "none";
        document.getElementById("emp3").style.display = "none";
        document.getElementById("emp4").style.display = "none";
        document.getElementById("emp5").style.display = "block";
        document.getElementById("emp6").style.display = "none";

        document.getElementById("empName").textContent = 'Geetha Arumugam';
        document.getElementById("idNo").textContent = "ID0000345";
        document.getElementById("empDOB").textContent = "01 Sep 1994";
        document.getElementById("empContact").textContent = "+91 9364354332";
        document.getElementById("empEmail").textContent = "geethu@yahoo.com";
        document.getElementById("empAdd").textContent = "Maragatham nagar, Thanjavur";
        document.getElementById("idIssueDate").textContent = "2023-03-03";

        document.getElementById("qr1").style.display = "none";
        document.getElementById("qr2").style.display = "none";
        document.getElementById("qr3").style.display = "block";
        document.getElementById("qr4").style.display = "none";
        document.getElementById("qr5").style.display = "none";
    }
    else if (empType == 'Welder1') {
        document.getElementById("empId").value = 'E009';
        document.getElementById("empFName").value = 'Priyanka Kamal';
        document.getElementById("empHiredate").value = "2019-07-02";
        document.getElementById("transCar").checked = true;
        document.getElementById("transOfz").checked = true;
        parttime = document.getElementById("partTime");
        fullTime = document.getElementById("fullTime");
        parttime.checked = false;
        fullTime.checked = true;
        document.getElementById("empDept").value = '4';
        salaryCalculation(empType);
        monthDiff(document.getElementById("empHiredate").value);

        document.getElementById("emp1").style.display = "none";
        document.getElementById("emp2").style.display = "none";
        document.getElementById("emp3").style.display = "none";
        document.getElementById("emp4").style.display = "block";
        document.getElementById("emp5").style.display = "none";
        document.getElementById("emp6").style.display = "none";

        document.getElementById("empName").textContent = 'Priyanka Kamal';
        document.getElementById("idNo").textContent = "ID0000235";
        document.getElementById("empDOB").textContent = "01 Jan 1998";
        document.getElementById("empContact").textContent = "+91 746457439";
        document.getElementById("empEmail").textContent = "Priya@yahoo.com";
        document.getElementById("empAdd").textContent = "Mullai street, Chennai";
        document.getElementById("idIssueDate").textContent = "2019-07-10";

        document.getElementById("qr1").style.display = "none";
        document.getElementById("qr2").style.display = "none";
        document.getElementById("qr3").style.display = "none";
        document.getElementById("qr4").style.display = "block";
        document.getElementById("qr5").style.display = "none";
    }
    else if (empType == 'Grinder1') {
        document.getElementById("empId").value = 'E0010';
        document.getElementById("empFName").value = 'Dayalan Sanju';
        document.getElementById("empHiredate").value = "2022-11-02";
        document.getElementById("transBike").checked = true;
        parttime = document.getElementById("partTime");
        fullTime = document.getElementById("fullTime");
        parttime.checked = true;
        fullTime.checked = false;
        document.getElementById("empDept").value = '6';
        salaryCalculation(empType);
        monthDiff(document.getElementById("empHiredate").value);

        document.getElementById("emp1").style.display = "none";
        document.getElementById("emp2").style.display = "block";
        document.getElementById("emp3").style.display = "none";
        document.getElementById("emp4").style.display = "none";
        document.getElementById("emp5").style.display = "none";
        document.getElementById("emp6").style.display = "none";

        document.getElementById("empName").textContent = 'Dayalan Sanju';
        document.getElementById("idNo").textContent = "ID0000678";
        document.getElementById("empDOB").textContent = "03 Sep 1997";
        document.getElementById("empContact").textContent = "+91 9364354332";
        document.getElementById("empEmail").textContent = "Daya@gmail.com";
        document.getElementById("empAdd").textContent = "Tank Street, Namakkal";
        document.getElementById("idIssueDate").textContent = "2022-11-10";

        document.getElementById("qr1").style.display = "none";
        document.getElementById("qr2").style.display = "none";
        document.getElementById("qr3").style.display = "none";
        document.getElementById("qr4").style.display = "none";
        document.getElementById("qr5").style.display = "block";
    }
}

//////////////////Function for assigning salary and employee manager user string function////////////////////
function salaryCalculation(empType){
    if(empType.includes('Freasher')){
        document.getElementById("empSalary").value = '2.5 Lakh/Annum';
        document.getElementById("empManager").value = 'Mr.Kalyan';
    }
    else if(empType.includes('Supervisor')){
        document.getElementById("empSalary").value = '8.5 Lakh/Annum';
        document.getElementById("empManager").value = 'Mr.Balaji k';
    }
    else if(empType.includes('Fitter')){
        document.getElementById("empSalary").value = '4 Lakh/Annum';
        document.getElementById("empManager").value = 'Mr.Manikandan';
    }
    else if(empType.includes('Welder')){
        document.getElementById("empSalary").value = '3.2 Lakh/Annum';
        document.getElementById("empManager").value = 'Mr.Kalyan';
    }
    else if(empType.includes('Rigger')){
        document.getElementById("empSalary").value = '4.5 Lakh/Annum';
        document.getElementById("empManager").value = 'Mr.Manikandan';
    }
    else if(empType.includes('Grinder')){
        document.getElementById("empSalary").value = '6 Lakh/Annum';
        document.getElementById("empManager").value = 'Mr.Balaji k';
    }
}

//////////////////Function for assigning total experience from today////////////////////
function monthDiff(dob) {
    var Difference_In_years, days;
    const d = new Date(dob);
    const today = new Date();   
    var days =(today.getTime() - d.getTime()) / 1000;
    days /= (60 * 60 * 24);
    Difference_In_years = Math.abs(Math.round(days/365.25));
    if(Difference_In_years == 0){
        Difference_In_years = Math.abs(Math.round(days/31));
        document.getElementById("empExp").value = Difference_In_years + " Month (Less then a year)";
    } 
    else{
        document.getElementById("empExp").value = Difference_In_years + " Years";
    }
}

    /////////////////////////////Function used to hide and show the identity section//////////////////////////////////
    function hideAndShowIdentity() {
    var x = document.getElementById("idDiv");
    var y = document.getElementById("hideDiv");
    if (x.style.display == "") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }