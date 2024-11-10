let btn = document.getElementById("generate-resume");

btn.addEventListener("click", function(evt) {
    evt.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let education = document.getElementById("education").value;
let skills = document.getElementById("skills").value;

let resumeDiv = document.getElementById("resume");
   resumeDiv.innerHTML = `
    <h2><span contenteditable="true">${name}</span></h2>
    <h3><span contenteditable="false">Email</span></h3>
    <p>Email address: <span contenteditable="true">${email}</span></p>
    <h3><span contenteditable="false">Phone</span></h3>
    <p>Phone Number: <span contenteditable="true">${phone}</span></p>
    <h3><span contenteditable="false">Education</span></h3>
    <p>Educational Background: <span contenteditable="true">${education}</span></p>
    <h3><span contenteditable="false">Skills</span></h3>
    <p>Programming Languages: <span contenteditable="true">${skills}</span></p>
   `; 
});