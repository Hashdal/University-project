export class docs {
    constructor(linkAddress, subject, name) {
        this.linkAddress = linkAddress;
        this.subject = subject;
        this.name = name;
    }
}
export class exam {
    constructor(date, duration, title) {
        this.date = date;
        this.duration = duration;
        this.title = title;
    }
}
export class course {
    constructor(title, schedule, participants, id) {
        this.title  = title;
        this.schedule = schedule;
        this.participants = participants;
        this.id = id;
        this.uploadedDocs = [];
        this.exams = [];
    }
    addUploadedDoc(doc) {
        this.uploadedDocs.push(doc);
        return true;
    }
    addExam(exam) {
        this.exams.push(exam)
    }
}
export class message {
    constructor(title, text, date, type, senderId, receiver, score = null) {
        this.title = title;
        this.text = text;
        this.date = date;
        this.type = type;
        this.senderId = senderId;
        this.receiver = receiver;
        this.score = score;
    }
}
export class professor {
    constructor(userName, password, nameLastname, degree, educationMajor, email) {
        this.userName = userName;
        this.password = password;
        this.nameLastname = nameLastname;
        this.degree = degree;
        this.educationMajor = educationMajor;
        this.email = email;
        this.course = [];
        this.rank = 0;
    }
    addCourse(course) {
        this.course.push(course);
        return true;
    }
    setRank(rank) {
        this.rank = rank;
    }
}
export class student {
    constructor(id, userName, nameLastname, password, phoneNumber, email, major, entranceYear, university, nationalId) {
        this.id = id;
        this.userName = userName;
        this.userName = userName;
        this.nameLastname = nameLastname;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.major = major;
        this.entranceYear = entranceYear;
        this.courses = [];
        this.university = university;
        this.nationalId = nationalId;
    }
    addCourse(course) {
        this.course = course;
        return true;
    } 
}
export class university {
    constructor(userName, name, password, address, phoneNumber, type, email) {
        this.userName = userName;
        this.name = name;
        this.password = password;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.type = type;
        this.email = email;
        this.professor = []
    }
    addProfessor(professor) {
        this.professor.push(professor)
    }
}