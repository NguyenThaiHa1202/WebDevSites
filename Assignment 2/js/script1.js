/*Validation Check*/ 
function validate() {
    /*Defining Variables*/
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var num = document.getElementById("number").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var genm = document.getElementById("genm").checked;
    var genf = document.getElementById("genf").checked;
    var geno = document.getElementById("geno").checked;
    var dob = document.getElementById("dob").value;
    var sea = document.getElementById("sea").checked;
    var pine = document.getElementById("pine").checked;
    var meat = document.getElementById("meat").checked;
    var ckn = document.getElementById("ckn").checked;
    var freq = document.getElementById("freq").value;
    var errMsg = "";
    var result = true;
    var pattern= /^[a-zA-Z]+$/;
    /*Defining Variables*/

    /*Checking All Fields Filled*/
    if(email==""){
        errMsg+="Please enter your email address.\n";
    }
    if(pass1==""){
        errMsg+="Please enter your password here.\n";
    }
    if(pass2==""){
        errMsg+="Please enter your password again.\n";
    }
    if(num==""){
        errMsg+="Please enter your phone number.\n";
    }
    if(fname==""){
        errMsg+="Please enter your first name.\n";
    }
    if(lname==""){
        errMsg+="Please enter your last name.\n";
    }
    if(!genm && !genf && !geno){
        errMsg+="A gender must be selected.\n";
    }
    if(dob==""){
        errMsg+="Please choose a date.\n";
    }
    if(!sea && !pine && !meat && !ckn){
        errMsg+="Please select your favourite pizza(s) (Minimum 1).\n";
    }
    if(freq==""){
        errMsg+="Please answer the questions.\n";
    }
    /*Checking All Fields Filled*/

    /*Check Password Duplication*/
    if (pass1 != pass2) {
        errMsg+= "Passwords do not match.\n";
      }
    /*Check Password Duplication*/

    /*Check Minimum Password Length*/
    if(pass1.length<8){
        errMsg+="Your password must be at least 8 characters long.\n";
    }
    /*Check Minimum Password Length*/

    /*Check that name only contain letters and spaces*/
    if(! fname.match (pattern)) {
        errMsg+="First name contains symbols.\n";
      }
    if(! lname.match (pattern)) {
        errMsg+="Last name contains symbols.\n";
    }
    /*Check that name only contain letters and spaces*/

    /*Error Submission Validation*/
    if (errMsg!="") {
        alert (errMsg);
        result=false;
    }
    /*Error Submission Validation*/
    return result;
}
/*Validation Check*/    
 
/*Validation Start-up*/ 
function init() {
    var regForm=document.getElementById("regform");
    regForm.onsubmit=validate;
}
/*Validation Start-up*/
 window.onload=init;