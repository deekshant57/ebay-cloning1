document.querySelector("form"), addEventListener("submit", formSubmit);

var login_data = JSON.parse(localStorage.getItem("login_Datas")) || [];
function formSubmit(event) {
  event.preventDefault();
  var sellerName = document.getElementById("sellername").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
// var select = document.getElementById('location');
// var location = select.options[select.selectedIndex].value
var location=india;
  if (
    firstname.length == 0 ||
    email.length == 0 ||
    pass.length == 0||
    location.length==0
  ) {
    alert("Input can not be left blank");
  } else {
    const asyncPostCall = async () => {
      try {
        const response = await fetch("http://localhost:4000/registerSeller", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            // your expected POST request payload goes here
            sellerName: sellerName,
            sellerEmail: email,
            password: pass,
            sellerLocation:location
          }),
        });
        const data = await response.json();
        // enter you logic when the fetch is successful
        window.location.href = "/signin.html"
        console.log(data);
      } catch (error) {
        // enter your logic for when there is an error (ex. error toast)

        console.log(error);
      }
    };

    asyncPostCall();

    // if (!login_data) login_data = [];
    // login_data.forEach((user) => {
    //   if (user.mail == email) {
    //     alert("User already exists!");
    //     return;
    //   }
    // });
    // var obj = {
    //   firstname: firstname,
    //   lastname: lastname,
    //   mail: email,
    //   pass: pass,
    // };
    // login_data.push(obj);
    // localStorage.setItem("login_Datas", JSON.stringify(login_data));
    // alert("sign in success");
    // window.location.href = "/signin.html";
    // console.log(login_data);
  }
}
