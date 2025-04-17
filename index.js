// 1
function checkScore(studentScore){
    // If score is greater than or equal to 180
   if (studentScore >= 180) {
        console.log("Passed") // Log "Passed" to the console
    } else {
        console.log("Failed"); // Otherwise, log "Failed"
    }
}

checkScore()

// 2
function checkVotingAge(age){
    // If age is 18 0r above
    if(age >= 18){
        return "You are eligible to vote";
        // Return eligible message
    } else {
        return "Not eligible"; // Otherwise, return not eligible
    }
}

console.log(checkVotingAge(17));
console.log(checkVotingAge(21));

// 3
function studentGrade(name, score ){
    // Check the score range and assign
    //  the appropriate grade
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
    // If the user has ID and is above 18
    if(hasID && isAbove18) {
        return "Access Granted"; // Grant access
    } else {
        return "Access Denied" // Otherwise, deny access
    }
}

console.log(checkAccess(true, false));


// 5
const arrayOfStudentScores = [50, 70, 49, 55, 78, 95, 40]; // array of scores

for(let i = 0; i < arrayOfStudentScores.length; i++ ){
    // If score is greater than 50
    if (arrayOfStudentScores[i] > 50){
        console.log("Pass"); // Print "Pass"
    } else {
        console.log("Fail"); // Otherwise, print "Fail"
    }
}
 

// 6
const passBoth = (math, english) => {
    // If both scores are greater than or equal to 50
    if (math >= 50 && english >= 50) {
        return "Yes"; // Return "Yes"
    } else {
        return "No" // Otherwise, reurn "No"
    }
};

console.log(passBoth(50, 40));
console.log(passBoth(50, 70));


// 7
function checkUser(email, phoneNumber) {
    // If either email or phone is provided
    if (email || phoneNumber) {
        return "signUp allowed"; // Allow signup
    } else {
        return "signUp denied: provide email or phoneNumber";
        // Deny signup
    }
}

console.log(checkUser("king@yahoo.com", "098664333456"));
console.log(checkUser("",));


// 8
function validLogin(username, password) {
    // If username or password is missing
    if (!username || !password) {
        return "Invalid input"; // Return Invalid message
    } else {
        return "Login successful" // Otherwise, login is successful
    }
}

console.log(validLogin("kingsley", "pass009"))


// 9
function workStatus(hoursWorked) {
    // Return "Full-time" if hours >= 40, else "Part-time"
    return hoursWorked >= 40 ? "Full-time" : "Part-Time";
}

console.log(workStatus(40));
console.log(workStatus(35));


// 10
const getLarger = (a, b) => a > b ? a : b;
    // Return "a" if greater, else return "b" 
console.log(getLarger(10, 5));
