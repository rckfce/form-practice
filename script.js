const errorMsg = document.getElementById("hidden");
const pswMain = document.getElementById("pwd");
const pswCheck = document.getElementById("pwd-conf");
const form = document.getElementsByTagName("form")[0];

pswCheck.addEventListener("input", passwordCheck);

pswMain.addEventListener("input", passwordCheck);

function passwordCheck() {
    if(pswCheck.value === pswMain.value) {
        errorMsg.classList.add("hidden");
        pswCheck.classList.remove("error");
        pswMain.classList.remove("error");
    } else {
        errorMsg.classList.remove("hidden");
        pswCheck.classList.add("error");
        pswMain.classList.add("error");
    }
}

form.addEventListener("submit", function (event) {
    if(pswCheck.value !== pswMain.value) event.preventDefault();
});