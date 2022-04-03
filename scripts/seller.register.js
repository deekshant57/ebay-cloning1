document.querySelector("#formSubmit"), addEventListener("submit", formSubmit);

var login_data = JSON.parse(localStorage.getItem("login_Datas")) || [];
function formSubmit(event) {
  event.preventDefault();
  var sellerName = document.getElementById("sellername").value;
  var sellerEmail = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var location = document.getElementById("location").value;
  console.log(sellerName, sellerEmail, password, location);
  if (
    sellerName.length == 0 ||
    sellerEmail.length == 0 ||
    password.length == 0 ||
    location.length == 0
  ) {
    alert("Input can not be left blank");
  } else {
    const asyncPostCall = async () => {
      try {
        const response = await fetch("http://ec2-34-222-169-2.us-west-2.compute.amazonaws.com:4000/registerSeller", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            // your expected POST request payload goes here
            sellerName: sellerName,
            sellerEmail: sellerEmail,
            password: password,
            sellerLocation: location,
          }),
        });
        const data = await response.json();
        // enter you logic when the fetch is successful
        console.log(data);

        if (data.token) {
          console.log("loggedin");
          window.location.href = "sellerSignin.html";
        } else {
          alert(data.message);
        }
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
