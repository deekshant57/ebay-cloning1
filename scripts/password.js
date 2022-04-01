// var email_data = JSON.parse(localStorage.getItem("login_Datas"));
document.querySelector("form").addEventListener("submit", signin);
// var email_data=JSON.parse(localStorage.getItem("login_Datas"));

var count = 0;
async function signin(event) {
  event.preventDefault();

  let data = {
    email: localStorage.getItem("email"),
    password: document.getElementById("password").value,
  };
  console.log(data);
  data = JSON.stringify(data);

  let result = await fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  let response = await result.json();

  console.log(response);

  if (response.token) {
    // console.log("loggedin");
    window.location.href = "home.html";
  } else {
    alert(response.message);
  }

  //   for (var i = 0; i < email_data.length; i++) {
  //     if (email_data[i].pass == pass) {
  //       window.location.href = "home.html";
  //     } else {
  //       count++;
  //     }
  //   }
  //   if (count == email_data.length) {
  //     alert("invalid Credentials");
}
