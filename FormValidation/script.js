function submit(){
    const nm = document.getElementById("name").value.trim();
    const em = document.getElementById("email").value.trim();
    const phn = document.getElementById("phone").value.trim();
    const db = document.getElementById("dob").value.trim();

    if(!/^[A-Za-z ]+$/.test(nm)){
        alert("Wrong Name");
        return;
    }

    if(!/^[\w\.]+@(gmail|outlook)\.(com|in)$/.test(em)){
        alert("Wrong Email");
        return;
    }

    if(!/^[6-9]\d{9}$/){
        alert("Wrong Mobile No.");
        return;
    }

    const currentyear = new Date().getFullYear();

    const birthyear = Number(db.split("-")[0]);

    if(currentyear-birthyear < 17){
        alert("Not eligible by Age");
        return;
    }

    const Data = {
        Fullname: nm,
        Email: em,
        Phone: phn,
        DoB: db, 
    };

    console.log(Data);
}