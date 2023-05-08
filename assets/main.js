
//--------------------------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function goToLoginPage(){
  let uniCheck = document.getElementById("university-checkbox");
  let profCheck = document.getElementById("professor-checkbox");
  let stuCheck = document.getElementById("student-checkbox");
  let loginButton = document.getElementById("login-button");
  let username = document.getElementById("username-signin").value;
  let Password = document.getElementById("password-signin").value;

  if(uniCheck.checked == true) {
    let userInfo = localStorage.getItem(username);
    console.log(userInfo)
    if(userInfo != null) {
      let userInfoJson = JSON.parse(userInfo);
      stats = {
        userName: username,
        stat: true
      };
      console.log(userInfoJson["userName"]);
      if(userInfoJson["userName"] == username && userInfoJson["password"] == Password){
        localStorage.setItem("stat", JSON.stringify(stats));
        loginButton.setAttribute("href", "./universityProfile.html");
      }
      else {
        window.alert("username or password is incorrect!");
      }
    }
    else{
      window.alert("this user name does not exist");
    }
  }

  if(stuCheck.checked == true) {
    let userInfo = localStorage.getItem(username);
    console.log(userInfo)
    if(userInfo != null) {
      let userInfoJson = JSON.parse(userInfo);
      stats = {
        userName: username,
        stat: true
      };
      console.log(userInfoJson["userName"]);
      if(userInfoJson["userName"] == username && userInfoJson["password"] == Password){
        localStorage.setItem("stat", JSON.stringify(stats));
        loginButton.setAttribute("href", "./studentProfile.html");
      }
      else {
        window.alert("student ID or password is incorrect!");
      }
    }
    else{
      window.alert("this student ID does not exist");
    }
  }

  if(profCheck.checked == true) {
    let userInfo = localStorage.getItem(username);
    console.log(userInfo)
    if(userInfo != null) {
      let userInfoJson = JSON.parse(userInfo);
      if(userInfoJson['access']){
        stats = {
          userName: username,
          stat: true
        };
        console.log(userInfoJson["userName"]);
        if(userInfoJson["userName"] == username && userInfoJson["password"] == Password){
          localStorage.setItem("stat", JSON.stringify(stats));
          loginButton.setAttribute("href", "./professorProfile.html");
        }
        else {
          window.alert("username or password is incorrect!");
        }
      }
      else {
        window.alert("university has not accepted you!");
      }
    }
    else{
      window.alert("this professor username does not exist");
    }
  }
}

function goToSignupPage(){
  let uniCheck = document.getElementById("university-checkbox");
  let profCheck = document.getElementById("professor-checkbox");
  let stuCheck = document.getElementById("student-checkbox");
  let loginButton = document.getElementById("signup-button");

  if(uniCheck.checked == true) {
    loginButton.setAttribute("href", "./universitySignUp.html");
  }
  if(profCheck.checked == true) {
    loginButton.setAttribute("href", "./professorSignUp.html");
  }
  if(stuCheck.checked == true) {
    loginButton.setAttribute("href", "./studentSignUp.html");
  }
}

function submitStudent() {
  let studentId = document.getElementById("student-id").value;
  let student = {
    type: 'student',
    nameLastName: document.getElementById("name-lastname").value,
    studentId: document.getElementById("student-id").value,
    phoneNumber: document.getElementById("phone-number").value,
    email: document.getElementById("email").value,
    nationalId: document.getElementById("national-id").value,
    entranceYear: document.getElementById("entrance-year").value,
    university: document.getElementById("university").value,
    major: document.getElementById("major").value,
    userName: document.getElementById("username").value,
    password: document.getElementById("password").value,
    courses: [],
  };
  let test = localStorage.getItem(studentId);
  if (test != null) window.alert("this Student id is used by another user, try a valid student id.");
  else {
    localStorage.setItem(studentId, JSON.stringify(student));
    window.alert("new student created!")
  }
}

function submitProfessor(){
  let userName = document.getElementById("username").value;
  let professor = {
    access: false,
    type: 'professor',
    nameLastName: document.getElementById("name-lastname").value,
    degree: document.getElementById("degree").value,
    phd: document.getElementById("phd").value,
    email: document.getElementById("email").value,
    educationalMajor: document.getElementById("education-major").value,
    university: document.getElementById("university").value,
    userName: document.getElementById("username").value,
    password: document.getElementById("password").value,
    courses: [],
  };
  let test = localStorage.getItem(userName);
  if (test != null) window.alert("this user name is used by another user, try a valid user name.");
  else {
    let verify = JSON.parse(localStorage.getItem("verification"))
    if(verify == null) {
      let verifyProfessors = {
        professorUserNames: [userName,],
      };
      localStorage.setItem("verification",JSON.stringify(verifyProfessors));
    }
    else{
      verify["professorUserNames"].push(userName);
      localStorage.setItem("verification",JSON.stringify(verify));
    }
    localStorage.setItem(userName, JSON.stringify(professor));
    window.alert("new professor created! wait till university verify you!")
  }
}

function submitUniversity() {
  let userName = document.getElementById("username").value;
  let university = {
    type: 'university',
    universityName: document.getElementById("university-name").value,
    universityType: document.getElementById("university-type").value,
    phoneNumber: document.getElementById("phone-number").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    userName: document.getElementById("username").value,
    password: document.getElementById("password").value,
    professors:[]
  };
  let test = localStorage.getItem(userName);
  if (test != null) window.alert("this user name is used by another user, try a valid user name.");
  else {
    localStorage.setItem(userName, JSON.stringify(university));
    window.alert("new university created!")
  }
}

function signOut(){
  let stat = JSON.parse(localStorage.getItem("stat"));
  stat["stat"] = false;
  localStorage.setItem("stat", JSON.stringify(stat));
  let signout = document.getElementById("signout");
  signout.setAttribute("href","./index.html");
}

function acceptProfessor(profId){
  let prof = JSON.parse(localStorage.getItem(profId));
  prof['access'] = true;
  localStorage.setItem(profId, JSON.stringify(prof));
  window.alert("professor accepted!");
}