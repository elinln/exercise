
window.addEventListener("load", initSite())
document.getElementById("logInButton").addEventListener("click", login)

const username = "Elin"
const password = "123abc"

function initSite() {
    console.log("Sidan är laddad.")
}

function login() {
    const usernameToCheck = document.getElementById("username").value 
    const passwordToCheck = document.getElementById("password").value 

    if(usernameToCheck == username && passwordToCheck == password) {
        //LOGGA IN
        console.log("LOGGA IN")
        sessionStorage.setItem("loggedInUser", usernameToCheck)
        window.location = "/logInPage.html"

    } else {
        //FEL UPPGIFTER
        let feedbackContainer = document.getElementById("logInFeedback")

        feedbackContainer.innerText = ""

        let logInFeedback = document.createElement("h3")
        logInFeedback.innerText = "Fel uppgifter..."

        feedbackContainer.appendChild(logInFeedback)

    }
}



/* var deltagare, text, dLen;
 deltagare = [
    "Pelle",
    "Anna",
    "Gunilla",
    "Kalle",
    "Johanna"
];

dLen = deltagare.length;
text = "<div>";


for(i = 0; i < dLen; i++) {
    text += "<div>" + deltagare[i] + "</div>";  
}

document.getElementById("list").innerHTML = text;

function myFunction() {
    deltagare.push("Elin");
    deltagare.splice(3,1);
    document.getElementById("list").innerHTML = deltagare;
}
 

function functionOne() {
    deltagare.push("Mamma")
    document.getElementById("list").innerHTML = deltagare;
}

function functionTwo() {
    deltagare.push("Pappa")
    document.getElementById("list").innerHTML = deltagare;
}

console.log(deltagare) */


/*
__________________________________________________________________
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("main").innerHTML = text; */