function login(){
    console.log("Login button clicked")

    const em = document.getElementById("loginEmail").value;
    const ps = document.getElementById("loginPassword").value;

    console.log("Email : " + em);
    console.log("Password : " + ps);

    alert("Login Done")

    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";    
}

function registration(){
    console.log("Registration button clicked")

    const name = document.getElementById("fullName").value;
    const em = document.getElementById("registerEmail").value;
    const ps = document.getElementById("registerPassword").value;
    const cps = document.getElementById("confirmPassword").value;

    console.log("Name : " + name);
    console.log("Email : " + em);
    console.log("Password : " + ps);
    console.log("Password : " + cps);

    alert("Login Done")

    document.getElementById("fullName").value = "";
    document.getElementById("registerPassword").value = "";
    document.getElementById("registerEmail").value = "";
    document.getElementById("confirmPassword").value = "";
}