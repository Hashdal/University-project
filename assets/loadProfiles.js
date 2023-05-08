function universityProfileOnLoad(){
    let stat = JSON.parse(localStorage.getItem("stat"));
    if(stat != null && stat["stat"] == true){
        let userInfoJson = JSON.parse(localStorage.getItem(stat["userName"]));
        document.getElementById("university-name").innerHTML = userInfoJson["universityName"];
        document.getElementById("university-type").innerHTML = userInfoJson["universityType"];
        document.getElementById("phone-number").innerHTML = userInfoJson["phoneNumber"];
        document.getElementById("email").innerHTML = userInfoJson["email"];
        document.getElementById("address").innerHTML = userInfoJson["address"];
        document.getElementById("username").innerHTML = userInfoJson["userName"];
    }
}

function professorProfileOnLoad(){
    let stat = JSON.parse(localStorage.getItem("stat"));
    if(stat != null && stat["stat"] == true){
        let userInfoJson = JSON.parse(localStorage.getItem(stat["userName"]));
        document.getElementById("name-lastname").innerHTML = userInfoJson["nameLastName"];
        document.getElementById("email").innerHTML = userInfoJson["email"];
        document.getElementById("degree").innerHTML = userInfoJson["degree"];
        document.getElementById("education-major").innerHTML = userInfoJson["educationalMajor"];
        document.getElementById("thesis").innerHTML = userInfoJson["phd"];
        document.getElementById("username").innerHTML = userInfoJson["userName"];
    }
}

function studentProfileOnLoad(){
    let stat = JSON.parse(localStorage.getItem("stat"));
    if(stat != null && stat["stat"] == true){
        let userInfoJson = JSON.parse(localStorage.getItem(stat["userName"]));
        document.getElementById("name-lastname").innerHTML = userInfoJson["nameLastName"];
        document.getElementById("student-id").innerHTML = userInfoJson["studentId"];
        document.getElementById("phone-number").innerHTML = userInfoJson["phoneNumber"];
        document.getElementById("email").innerHTML = userInfoJson["email"];
        document.getElementById("national-id").innerHTML = userInfoJson["nationalId"];
        document.getElementById("entrance-year").innerHTML = userInfoJson["entranceYear"];
        document.getElementById("university").innerHTML = userInfoJson["university"];
        document.getElementById("major").innerHTML = userInfoJson["major"];
        document.getElementById("username").innerHTML = userInfoJson["userName"];
    }
}

function professorVerification() {
    output = []
    let stat = JSON.parse(localStorage.getItem("stat"));
    let userName = stat["userName"];
    let profs = JSON.parse(localStorage.getItem("verification"));
    let profsUsers = profs["professorUserNames"];
    let len = profsUsers.length;
    let docOutput = '';
    for(let i = 0; i < len; i++){
        prof = JSON.parse(localStorage.getItem(profsUsers[i]))
        if(prof["access"] == false && prof["university"] == userName){
            let profName = prof["userName"];
            let profUserName = profsUsers[i];
            let profDegree = prof["degree"];
            let profEmail = prof["email"];
            let profMajor = prof["educationalMajor"];
            let thesis = prof["phd"];
            docOutput += '<div style="border:solid 1px; margin-bottom:10px; border-radius:8px;"><h3>userName:<br></h3>'+
            '<p id="professor-username">'+ profUserName + '</p>'+
            '<h3>name and lastName:<br></h3>'+
            '<p id="name-lastname">' + profName + '</p>'+
            '<h3>degree:<br></h3>'+
            '<p id="degree">' + profDegree + '</p>'+
            '<h3>E-mail:<br></h3>'+
            '<p id="email">' + profEmail + '</p>'+
            '<h3>education major:<br></h3>'+
            '<p id="education-major">' + profMajor + '</p>'+
            '<h3>thesis:<br></h3>'+
            '<p id="thesis">' + thesis + '</p>'+
            '<a class="flex-container blue-button" id="accept" onclick="acceptProfessor('+"\'"+profUserName+"\'"+')"><span>accept</span></a></div>';
            output.push(profsUsers[i]);
        }
    }
    console.log(output)
    let doc = document.getElementById("student-signin-information");
    doc.innerHTML = docOutput;
}

function loadProfessorList(){
    output = []
    let stat = JSON.parse(localStorage.getItem("stat"));
    let userName = stat["userName"];
    let profs = JSON.parse(localStorage.getItem("verification"));
    let profsUsers = profs["professorUserNames"];
    let len = profsUsers.length;
    let docOutput = '';
    for(let i = 0; i < len; i++){
        prof = JSON.parse(localStorage.getItem(profsUsers[i]))
        if(prof["access"] == true && prof["university"] == userName){
            let profName = prof["userName"];
            let profUserName = profsUsers[i];
            let profDegree = prof["degree"];
            let profEmail = prof["email"];
            let profMajor = prof["educationalMajor"];
            let thesis = prof["phd"];
            docOutput += '<div style="border:solid 1px; margin-bottom:10px; border-radius:8px;"><h3>userName:<br></h3>'+
            '<p id="professor-username">'+ profUserName + '</p>'+
            '<h3>name and lastName:<br></h3>'+
            '<p id="name-lastname">' + profName + '</p>'+
            '<h3>degree:<br></h3>'+
            '<p id="degree">' + profDegree + '</p>'+
            '<h3>E-mail:<br></h3>'+
            '<p id="email">' + profEmail + '</p>'+
            '<h3>education major:<br></h3>'+
            '<p id="education-major">' + profMajor + '</p>'+
            '<h3>thesis:<br></h3>'+
            '<p id="thesis">' + thesis + '</p>'+
            '</div>';
            output.push(profsUsers[i]);
        }
    }
    console.log(output)
    let doc = document.getElementById("student-signin-information");
    doc.innerHTML = docOutput;
}