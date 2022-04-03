// let data = [
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/hkYAAOSwgJ5hYb68/s-l225.webp",
//     price: 55.0,
//     title:
//       "Dell Chromebook 11 3189 11.6 2in1 Touchscreen Intel 1.6GHz 4GB 32GB SSD Laptop",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/EXgAAOSwJw5hZKO8/s-l225.webp",
//     price: 151.5,
//     title:
//       "Dell Latitude E6520 Laptop - 15.5. Core i7, 8GB RAM, 320GB HDD, Win10",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/hewAAOSwqwhhOk0~/s-l225.webp",
//     price: 104.95,
//     title:
//       "Dell Latitude E5400 Laptop 14 Intel Core2Duo 2.26GHz 4GB RAM 160GB Windows 7",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/oBcAAOSwxbBgzKQj/s-l225.webp",
//     price: 59.99,
//     title: "HP Chromebook 14-SMB 14Laptop Intel Celeron 2GB RAM 16GB eMMC",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/tIUAAOSwY89h-xcX/s-l225.webp",
//     price: 229.0,
//     title:
//       "Apple Macbook Pro 13 Laptop | i5 8GB RAM | 500GB HD | MacOS Catalina | WARRANTY",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/GzMAAOSwP9FgC14v/s-l225.webp",
//     price: 499.99,
//     title:
//       "Apple MacBook Pro 13Laptop | 1TB SSD | 16GB RAM | OSX-2019 | WARRANTY ! ! !",
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSmbYgXUq1KLIrkDAUtHXz-mrQc8fbRtPGb2zHrn4irAWYt27PqE4WFmYFco8n6tZxbu0mgxXOHWjTzRrP8hu0oJ_0KIggD1yUyextAHoSvFAAdSDiahW8ITQ&usqp=CAE",
//     price: 11499,
//     title: "Galaxy M12",
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQPGlCDDJ-bPheOZ3i028NsmpvCRrX4lBhRByOwo92OnFAPh72lYEDRYPkkhj1L-ufRqqV6pyA9fPqRGNBEbn-CsH0-QYopwVo5LY3Lodg8HwFrZyoIr2F8A&usqp=CAE",
//     price: 16400,
//     title: "Vivo v17",
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2-VSvI4Qh1BNXkAIaDTz5Y6VnTN41B9FoWl3ZoRUTRoBjSOLr0WlY_lizDXbjWOJx55v5N5vVzzSh3_Q5IjOBhsD5biON4p8jmoJnfP6ScqpiuJ5Fw9p2sg&usqp=CAE",
//     price: 14560,
//     title: "Mate4opo",
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4va6kmHZdvDBJqcq_Wve_AI9y8H35J0agfCi3XQeuqBIA9Lz-TZe_SBVoQMGE9A5lucOag_o8c9rxKm0XwIHjPYiYHQh0POqe32v7QpmdVIA47nUV9ZKW&usqp=CAE",
//     price: 6700,
//     title: "New phones",
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgyiCJFQcSo8CTgqfPR_aRx-PHtNbbUWsqVnLuRn1SIPrMNFWKOKRB_4AQDYJa8azgxdQbHwJ87KWtC2W9Zm148NXyaAnvO9RmcJmF3_Td6-D2bUMAbTJ8&usqp=CAE",
//     price: 8000,
//     title: "5G LTE MOBILE PHONES",
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsK1d3SbY_qxwOPzs4gbhL2J_1bm9vOJrokMilA3ONlk_SAcOn_WIU6WZVfeCTzCjJVZsPumP8wP0&usqp=CAc",
//     price: 23999,
//     title: "Samsung Galaxy 40mm",
//   },
//   {
//     image:
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZbAXXwqiuCaIK4raT8Cnp77hperrBbIS7g6JJqW5WQWCaZB0VZwcJsGIBfSzXqy-VmDDzpR6ki5M&usqp=CAc",
//     price: 31999,
//     title: "Samaung Galaxy 44mm",
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTre0e_5r8Js0NRZoelx41dzxoZ7tOJXd_Nu6lYRJrhuqu7WmDuqPgg2Wyw3wm5DMfYnOKjzv_ytyiB&usqp=CAc",
//     price: 39999,
//     title: "Samsung Galaxy classics 46mm",
//   },
//   {
//     image: "https://images.meesho.com/images/products/77746502/azsil_512.jpg",
//     price: 1150,
//     title: "Bluetooth Call Heart Rate Function Smartwatch",
//   },
//   {
//     image: "https://images.meesho.com/images/products/26405694/50c86_512.jpg",
//     price: 580,
//     title: "M3 Fitness Band SQ21",
//   },
//   {
//     image: "https://images.meesho.com/images/products/51764778/cqwwi_512.jpg",
//     price: 337,
//     title: "Modern Smart Watches",
//   },
//   {
//     image: "https://images.meesho.com/images/products/76652106/g1cgz_512.jpg",
//     price: 178,
//     title: "Consumer Electronics Smart Watches",
//   },
// ];
let cart = [];

const mapDatatoDOM = (data) => {
  data.map((elem) => {
    let main = document.getElementById("products-list");

    let card = document.createElement("div");
    card.id = "product-card";
    let img = document.createElement("img");
    img.src = elem.productImageURL;
    let title = document.createElement("p");
    title.textContent = elem.productTitle;
    let price = document.createElement("h6");
    price.textContent = `Price : $ ${elem.productPrice.toFixed(2)}`;

    let shippingCharges = document.createElement("h6");

    shippingCharges.textContent = `Shipping : $ ${elem.shippingCharges.toFixed(
      2
    )}`;

    let btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.addEventListener("click", () => {
      console.log("clicked");
      cart.push(elem);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added Successfully");
    });

    card.append(img, title, price, shippingCharges, btn);
    main.append(card);
  });
};

const loadProducts = async () => {
  const response = await fetch("http://localhost:4000/product");
  const data = await response.json();
  console.log(data);
  mapDatatoDOM(data.products);
};

loadProducts();

import navbar1 from "../components/navbar1.js";

let nav = document.getElementById("nav");
nav.innerHTML = navbar1();

// localStorage.setItem("cart", JSON.stringify(cart));
