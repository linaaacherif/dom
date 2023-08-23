// get all increment buttons
const incButtons = document.getElementsByClassName("fa-square-plus");
console.log(incButtons);

// get all decrement buttons
const decButtons = document.getElementsByClassName("fa-square-minus");

// get trash buttons
const trashButtons = document.getElementsByClassName("fa-trash");

// get thumbs buttons
const thumbsButtons = document.getElementsByClassName("fa-thumbs-up");

// loop through increment buttons and increment quantity
for (let index = 0; index < incButtons.length; index++) {
  incButtons[index].addEventListener("click", function (event) {
    console.log(event.target.previousElementSibling.innerText++);
    calculateTotal();
  });
}

// loop through decrement buttons and decrement quantity
for (let index = 0; index < decButtons.length; index++) {
  decButtons[index].addEventListener("click", function (event) {
    if (event.target.nextElementSibling.innerText > 1)
      console.log(event.target.nextElementSibling.innerText--);
    calculateTotal();
  });
}

// loop through trash buttons
for (let index = 0; index < trashButtons.length; index++) {
  trashButtons[index].addEventListener("click", function (event) {
    console.log(event.target.closest(".single-item").remove());
    calculateTotal();
  });
}

// loop through like buttons
for (let index = 0; index < thumbsButtons.length; index++) {
  thumbsButtons[index].addEventListener("click", function (event) {
    console.log(event.target.classList.toggle("like"));
  });
}

function calculateTotal() {
  // get all products
  const products = document.querySelectorAll(".single-item");
  console.log(products);

  //initialize total price
  let totalPrice = 0;
  for (let index = 0; index < products.length; index++) {
    const unitPrice = products[index].querySelector(".price").innerText;
    const quantity = products[index].querySelector(".quantity").innerText;
    totalPrice += unitPrice * quantity;
  }
  const total = document.getElementById("total");
  total.innerText = totalPrice;
}
calculateTotal();
