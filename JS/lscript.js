function validateForm() {
    var name = document.getElementById("name").value;
    var regNo = document.getElementById("reg-no").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (name === "" || regNo === "" || username === "" || password === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}
