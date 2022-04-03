const submitForm = () => {
  event.preventDefault();
  let productTitle = document.getElementById("productTitle").value;
  let productPrice = document.getElementById("productPrice").value;
  let shippingCharges = document.getElementById("shippingCharges").value;
  let productImageURL = document.getElementById("productImageURL").value;
  let sellerId = document.getElementById("sellerId").value;

  //   console.log({
  //     // your expected POST request payload goes here
  //     productTitle: productTitle,
  //     productPrice: productPrice,
  //     shippingCharges: shippingCharges,
  //     productImageURL: productImageURL,
  //     sellerId: sellerId,
  //   });
  if (
    productTitle.length === 0 ||
    productPrice.length === 0 ||
    shippingCharges.length === 0 ||
    productImageURL.length === 0 ||
    sellerId.length === 0
  ) {
    alert("Input cannot be left blank");
  } else {
    const postProduct = async () => {
      let response = await fetch("http://ec2-34-222-169-2.us-west-2.compute.amazonaws.com:4000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWxsZXIiOnsic2VsbGVyTmFtZSI6InNlbGxlcjEiLCJzZWxsZXJFbWFpbCI6InNlbGxlcjFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMDgkWk44RDhwbVllUU05OFRVdVhzVWh4dTdvSXAub1cvVjhiQVNXa3pVbm5VS3Y5N0dvZzlhakciLCJzZWxsZXJMb2NhdGlvbiI6IkRlbGhpIiwiX2lkIjoiNjI0NGE4MjFjOGViNzk3MmJmMDVkODYwIiwiY3JlYXRlZEF0IjoiMjAyMi0wMy0zMFQxODo1NzozNy44NTZaIiwidXBkYXRlZEF0IjoiMjAyMi0wMy0zMFQxODo1NzozNy44NTZaIn0sImlhdCI6MTY0ODY2NjY1N30.fG2SKLQLvtMPXsPK-9WK_7Gcny3ulnTvbts5w70v2lI",
        },
        body: JSON.stringify({
          // your expected POST request payload goes here
          productTitle: productTitle,
          productPrice: productPrice,
          shippingCharges: shippingCharges,
          productImageURL: productImageURL,
          sellerId: sellerId,
        }),
      });
      let data = await response.json();

      console.log(data);
      alert(data.message);
    };
    postProduct();
  }

  //   console.log(
  //     productTitle,
  //     productPrice,
  //     shippingCharges,
  //     productImageURL,
  //     sellerId
  //   );
};
