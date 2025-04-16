// 1
function checkScore(studentScore){
   if (studentScore >= 180) {
        console.log("Passed")
    } else {
        console.log("Failed")
    }
}

checkScore()

// 2
function checkVotingAge(age){
    if(age >= 18){
        return "You are eligible to vote";
    } else {
        return "Not eligible";
    }
}

console.log(checkVotingAge(17));
console.log(checkVotingAge(21));

// 3
function studentGrade(name, score ){
    if(score >= 90){
        return "Excellent";
    } else if (score >= 75){
        return "Good";
    } else if (score >= 50){
        return "Average";
    } else {
        return "Fail"
    }
}
 
console.log(studentGrade("kingsley", 78));


// 4
function checkAccess(hasID, isAbove18){
    if(hasID && isAbove18) {
        return "Access Granted";
    } else {
        return "Access Denied"
    }
}

console.log(checkAccess(true, false));


// 5
const arrayOfStudentScores = [50, 70, 49, 55, 78, 95, 40];

for(let i = 0; i < arrayOfStudentScores.length; i++ ){
    if (arrayOfStudentScores[i] > 50){
        console.log("Pass");
    } else {
        console.log("Fail")
    }
}
 

// 6
const passBoth = (math, english) => {
    if (math >= 50 && english >= 50) {
        return "Yes";
    } else {
        return "No"
    }
};

console.log(passBoth(50, 40));
console.log(passBoth(50, 70));


// 7
function checkUser(email, phoneNumber) {
    if (email || phoneNumber) {
        return "signUp allowed";
    } else {
        return "signUp denied: provide email or phoneNumber";
    }
}

console.log(checkUser("king@yahoo.com", "098664333456"));
console.log(checkUser("",));


// 8
function validLogin(username, password) {
    if (!username || !password) {
        return "Invalid input";
    } else {
        return "Login successful"
    }
}

console.log(validLogin("kingsley", "pass009"))


// 9
function workStatus(hoursWorked) {
    return hoursWorked >= 40 ? "Full-time" : "Part-Time";
}

console.log(workStatus(40));
console.log(workStatus(35));


// 10
const getLarger = (a, b) => a > b ? a : b;
    
console.log(getLarger(10, 5));
