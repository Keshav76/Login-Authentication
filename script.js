import data from './data.json' assert { type: 'json' };


var toast = document.getElementById("toast");

function myFunction() {
    toast.style.display = "block";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){toast.style.display = "none";}, 3000);
  }

const form = document.querySelector("form");
const id = document.getElementById("userid");
const pass = document.getElementById("pass");
const keepLoggedIn = document.getElementById("keepLoggedIn");

const submitForm = () => {
    console.log(toast.childNodes)
    var id_val = id.value;
    var pass_val = pass.value;
    if (id_val in data) {
        if (pass_val === data[id_val]) {
            toast.innerHTML = "Logged In";
            myFunction();
            return;
        }
    }
    toast.innerHTML = "Login Failed";
    console.log("Failure");
    myFunction()
    return;
}; 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
});
