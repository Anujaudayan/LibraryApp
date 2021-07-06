let email = document.getElementById("inputEmail3");
let pwd = document.getElementById("inputPassword3");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
let inputtxt = document.getElementById("inputPhonenumber");
let firstname = document.getElementById("formGroupExampleInput");
let lastname = document.getElementById("formGroupExampleInput2");
let pwd1 = document.getElementById("inputPassword");

inputPassword3.addEventListener('keyup',function(){
    strength();
  })
  function strength(){
    var val = document.getElementById("inputPassword3").value;
    var status = document.getElementById("length");
    let regexpWeak=/([a-z].*[A-Z]+)|([A-Z]+)|([a-z]+)|([A-Z].*[a-z]+)/;
    let regexpMedium=/([0-9]+)/;
    let regexpStrong=/([a-z].*[A-Z]+)|([A-Z].*[a-z]+)/;

    var counter = 0;
    if(val!=""){
        if(val.length <= 3 && (val.match(regexpWeak)||val.match(regexpMedium)))
        counter=1; 
        if(val.length >= 5 && val.match(regexpWeak)&&val.match(regexpMedium))
        counter=2; 
        if(val.length >= 8 && val.match(regexpWeak)&&val.match(regexpMedium)&&val.match(regexpStrong))
        counter=3;


      if(counter==1){
        status.innerHTML="Weak";
        status.style.background="red";
        status.style.color="#ffffff";
      }
      if(counter==2){
        status.innerHTML="Medium";
        status.style.background="orange";
        status.style.color="#ffffff";
      }
      if(counter==3){
        status.innerHTML="Strong";
        status.style.background="green";
        status.style.color="#ffffff";
      }

    }
  }




function validation(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        error.innerHTML="Valid";
        error.style.color= "green";
        email.style.border="2px solid green";
    }
    else{
        error.innerHTML="Invalid";
        error.style.color=" red"; 
        email.style.border="2px solid red";
        return false;
    }
    let regexp1=/(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if(regexp1.test(pwd.value)){
        error1.innerHTML="valid";
        error1.style.color= "green";
        return true;
    }
    else{
        error1.innerHTML="Invalid";
        error1.style.color=" red"; 
        pwd.style.border="2px solid red";
        return false;
    }}
    function auth(){
var u = "Admin@gmail.com";
var p =12345;
if(u != email.value)
    {
      window.location = "http://localhost:5000/books";
    }
else{
  window.location = "http://localhost:5000/authors";
}}

function validate(){
    let val1 = document.getElementById("formGroupExampleInput").value;
    let fname= /^[a-zA-Z\s]+$/;
    if(fname.test(firstname.value)&&val1.length>=3){
      firstname.style.border="2px solid green";

    }
    else{
      firstname.style.border="2px solid red";
      alert("Please enter a valid First name");
    }

    let Lname= /^[a-zA-Z\s]+$/;
    if(Lname.test(lastname.value)&&val1.length>=3){
      lastname.style.border="2px solid green";

    }
    else{
      lastname.style.border="2px solid red";
      alert("Please enter a valid Last name");
    }

    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneno.test(inputtxt.value)){
        inputtxt.style.border="2px solid green";
    
    }
    else{
        inputtxt.style.border="2px solid red";
        alert("Enter a 10 digit valid phone number");
        return false;
        
    }


    let regexp=/^([A-Za-z0-9\.-]+)@([A-za-z0-9\-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        email.style.border="2px solid green";
    }
    else{
        email.style.border="2px solid red";
        alert("Enter a valid Email");
        return false;
    }
    let regexp1=/(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if(regexp1.test(pwd.value)){
        pwd.style.border="2px solid green";
       
    }
    else{
        pwd.style.border="2px solid red";
        alert("Enter a valid Password");
        return false;
    }
    
    if(pwd.value!=pwd1.value){
        pwd1.style.border="2px solid red";
        alert("Re-confirm Password");
        return false;
        
    }
    else{
        return true;
    }

    

    }


