const stateCapitals = {
  "Rajasthan": "Jaipur",
  "Gujarat": "Gandhinagar",
  "Maharashtra": "Mumbai",
  "Madhya Pradesh": "Bhopal",
  "Uttar Pradesh": "Lucknow",
  "Punjab": "Chandigarh",
  "Haryana": "Chandigarh",
  "Bihar": "Patna",
  "West Bengal": "Kolkata",
  "Tamil Nadu": "Chennai",
  "Kerala": "Thiruvananthapuram",
  "Karnataka": "Bengaluru",
  "Andhra Pradesh": "Amaravati",
  "Telangana": "Hyderabad",
  "Odisha": "Bhubaneswar",
  "Chhattisgarh": "Raipur",
  "Jharkhand": "Ranchi",
  "Assam": "Dispur",
  "Arunachal Pradesh": "Itanagar",
  "Nagaland": "Kohima",
  "Manipur": "Imphal",
  "Mizoram": "Aizawl",
  "Tripura": "Agartala",
  "Meghalaya": "Shillong",
  "Sikkim": "Gangtok",
  "Uttarakhand": "Dehradun",
  "Himachal Pradesh": "Shimla",
  "Jammu and Kashmir": "Srinagar/Jammu",
  "Delhi": "New Delhi",
  "Laddakh": "Leh"
};


function search() {
  const state = document.getElementById("search").value;

  if (!state) {
    alert("Please select a state!");
    return;
  }

  const map = document.getElementById("indiaMap");

  const flag = document.createElement("img");
  flag.src =
    "https://tse1.mm.bing.net/th/id/OIP.Xh2vVpc6mC3cKTY4uNk95gHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3";
  flag.id = "flag";
  flag.className = "flag";
  flag.style.position = "absolute";
  flag.title = `${state}, ${stateCapitals[state]}`;


  if (state === "Rajasthan") {
    flag.style.top = "230px";
    flag.style.left = "140px";
  } 

  else if (state === "Gujarat") {
    flag.style.top = "280px";
    flag.style.left = "100px";
  } 
  
  else if (state === "Maharashtra") {
    flag.style.top = "350px";
    flag.style.left = "160px";
  } 
  
  else if (state === "Madhya Pradesh") {
    flag.style.top = "280px";
    flag.style.left = "200px";
  } 
  
  else if (state === "Uttar Pradesh") {
    flag.style.top = "220px";
    flag.style.left = "250px";
  } 
  
  else if (state === "Punjab") {
    flag.style.top = "140px";
    flag.style.left = "160px";
  } 
  
  else if (state === "Haryana") {
    flag.style.top = "160px";
    flag.style.left = "180px";
  } 
  
  else if (state === "Bihar") {
    flag.style.top = "240px";
    flag.style.left = "330px";
  } 
  
  else if (state === "West Bengal") {
    flag.style.top = "280px";
    flag.style.left = "370px";
  } 
  
  else if (state === "Tamil Nadu") {
    flag.style.top = "500px";
    flag.style.left = "200px";
  } 
  
  else if (state === "Kerala") {
    flag.style.top = "500px";
    flag.style.left = "160px";
  } 
  
  else if (state === "Karnataka") {
    flag.style.top = "420px";
    flag.style.left = "160px";
  } 
  
  else if (state === "Andhra Pradesh") {
    flag.style.top = "430px";
    flag.style.left = "200px";
  } 
  
  else if (state === "Telangana") {
    flag.style.top = "380px";
    flag.style.left = "210px";
  } 
  
  else if (state === "Odisha") {
    flag.style.top = "330px";
    flag.style.left = "310px";
  } 
  
  else if (state === "Chhattisgarh") {
    flag.style.top = "310px";
    flag.style.left = "270px";
  } 
  
  else if (state === "Jharkhand") {
    flag.style.top = "270px";
    flag.style.left = "320px";
  } 
  
  else if (state === "Assam") {
    flag.style.top = "220px";
    flag.style.left = "460px";
  } 
  
  else if (state === "Arunachal Pradesh") {
    flag.style.top = "180px";
    flag.style.left = "480px";
  } 
  
  else if (state === "Nagaland") {
    flag.style.top = "220px";
    flag.style.left = "485px";
  } 
  
  else if (state === "Manipur") {
    flag.style.top = "245px";
    flag.style.left = "475px";
  } 
  
  else if (state === "Mizoram") {
    flag.style.top = "270px";
    flag.style.left = "460px";
  } 
  
  else if (state === "Tripura") {
    flag.style.top = "260px";
    flag.style.left = "440px";
  } 
  
  else if (state === "Meghalaya") {
    flag.style.top = "230px";
    flag.style.left = "430px";
  } 
  
  else if (state === "Sikkim") {
    flag.style.top = "200px";
    flag.style.left = "380px";
  } 
  
  else if (state === "Uttarakhand") {
    flag.style.top = "150px";
    flag.style.left = "230px";
  } 
  
  else if (state === "Himachal Pradesh") {
    flag.style.top = "120px";
    flag.style.left = "200px";
  } 
  
  else if (state === "Jammu and Kashmir") {
    flag.style.top = "85px";
    flag.style.left = "160px";
  } 
  
  
  else if (state === "Delhi") {
    flag.style.top = "175px";
    flag.style.left = "192px";
  } 

  else if (state === "Laddakh") {
    flag.style.top = "70px";
    flag.style.left = "200px";
  } 
  
  
  else {
    alert("Flag location not set for this area yet!");
    return;
  }

  map.appendChild(flag);
}

function clearFlags() {
  const flags = document.querySelectorAll(".flag");
  flags.forEach(flag => flag.remove());
}

