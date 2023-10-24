// Function to handle card1
function handleCard1() {
  // Get references to the input elements for price and description of card1
  const priceInput = document.getElementById("TRMolar28Price");
  const descriptionInput = document.getElementById("TRMolar28Desc");

  // Get references to the price and description display elements for card1
  const priceDisplay = document.querySelector("#card1 .price p");
  const descriptionDisplay = document.querySelector("#card1 .descript2 p");

  // Retrieve the saved data from local storage when the page loads
  const savedPrice = localStorage.getItem("TRMolar28Price");
  const savedDescription = localStorage.getItem("TRMolar28Desc");

  if (savedPrice) {
    // Update the input field with the saved price
    priceInput.value = savedPrice;
    // Update the price display for card1
    priceDisplay.textContent = `Price: $${savedPrice}`;
  }

  if (savedDescription) {
    // Update the input field with the saved description
    descriptionInput.value = savedDescription;
    // Update the description display for card1
    descriptionDisplay.textContent = savedDescription;
  }

  // Add a click event listener to the "Edit" button for card1
  const editButtonCard1 = document.querySelector("#card1 button");
  editButtonCard1.addEventListener("click", function () {
    // Toggle the visibility of the form for card1 when the button is clicked
    const formCard1 = document.querySelector("#card1 .form");
    formCard1.style.display =
      formCard1.style.display === "none" ? "block" : "none";
  });

  // Get a reference to the form element for card1
  const formCard1 = document.querySelector("#card1 .form");

  // Add a submit event listener to the form for card1
  formCard1.addEventListener("submit", function (event) {
    // Prevent the form from submitting to another page
    event.preventDefault();

    // Update the price and description with the values from the input fields for card1
    const newPriceCard1 = priceInput.value;
    const newDescriptionCard1 = descriptionInput.value;

    // Save the updated data to local storage for card1
    localStorage.setItem("TRMolar28Price", newPriceCard1);
    localStorage.setItem("TRMolar28Desc", newDescriptionCard1);

    // You can perform additional logic here, e.g., displaying a success message
    console.log(
      "Data updated and saved to local storage for card1 (TRMolar28)"
    );

    // Update the displayed price text for card1
    priceDisplay.textContent = `Price: $${newPriceCard1}`;

    // Update the displayed description text for card1
    descriptionDisplay.textContent = newDescriptionCard1;

    // Hide the form section for card1
    formCard1.style.display = "none";
  });
}

// Function to handle card2
function handleCard2() {
  // Get references to the input elements for price and description of card2
  const priceInput = document.getElementById("TRMolar27Price");
  const descriptionInput = document.getElementById("TRMolar27Desc");

  // Get references to the price and description display elements for card2
  const priceDisplay = document.querySelector("#card2 .price p");
  const descriptionDisplay = document.querySelector("#card2 .descript2 p");

  // Retrieve the saved data from local storage when the page loads
  const savedPrice = localStorage.getItem("TRMolar27Price");
  const savedDescription = localStorage.getItem("TRMolar27Desc");

  if (savedPrice) {
    // Update the input field with the saved price
    priceInput.value = savedPrice;
    // Update the price display for card2
    priceDisplay.textContent = `Price: $${savedPrice}`;
  }

  if (savedDescription) {
    // Update the input field with the saved description
    descriptionInput.value = savedDescription;
    // Update the description display for card2
    descriptionDisplay.textContent = savedDescription;
  }

  // Add a click event listener to the "Edit" button for card2
  const editButtonCard2 = document.querySelector("#card2 button");
  editButtonCard2.addEventListener("click", function () {
    // Toggle the visibility of the form for card2 when the button is clicked
    const formCard2 = document.querySelector("#card2 .form");
    formCard2.style.display =
      formCard2.style.display === "none" ? "block" : "none";
  });

  // Get a reference to the form element for card2
  const formCard2 = document.querySelector("#card2 .form");

  // Add a submit event listener to the form for card2
  formCard2.addEventListener("submit", function (event) {
    // Prevent the form from submitting to another page
    event.preventDefault();

    // Update the price and description with the values from the input fields for card2
    const newPriceCard2 = priceInput.value;
    const newDescriptionCard2 = descriptionInput.value;

    // Save the updated data to local storage for card2
    localStorage.setItem("TRMolar27Price", newPriceCard2);
    localStorage.setItem("TRMolar27Desc", newDescriptionCard2);

    // You can perform additional logic here, e.g., displaying a success message
    console.log(
      "Data updated and saved to local storage for card2 (TRMolar27)"
    );

    // Update the displayed price text for card2
    priceDisplay.textContent = `Price: $${newPriceCard2}`;

    // Update the displayed description text for card2
    descriptionDisplay.textContent = newDescriptionCard2;

    // Hide the form section for card2
    formCard2.style.display = "none";
  });
}
// Function to handle card3
function handleCard3() {
  // Get references to the input elements for price and description of card3
  const priceInput = document.getElementById("TRMolar26Price");
  const descriptionInput = document.getElementById("TRMolar26Desc");

  // Get references to the price and description display elements for card3
  const priceDisplay = document.querySelector("#card3 .price p");
  const descriptionDisplay = document.querySelector("#card3 .descript2 p");

  // Retrieve the saved data from local storage when the page loads
  const savedPrice = localStorage.getItem("TRMolar26Price");
  const savedDescription = localStorage.getItem("TRMolar26Desc");

  if (savedPrice) {
    // Update the input field with the saved price
    priceInput.value = savedPrice;
    // Update the price display for card3
    priceDisplay.textContent = `Price: $${savedPrice}`;
  }

  if (savedDescription) {
    // Update the input field with the saved description
    descriptionInput.value = savedDescription;
    // Update the description display for card3
    descriptionDisplay.textContent = savedDescription;
  }

  // Add a click event listener to the "Edit" button for card3
  const editButtonCard3 = document.querySelector("#card3 button");
  editButtonCard3.addEventListener("click", function () {
    // Toggle the visibility of the form for card3 when the button is clicked
    const formCard3 = document.querySelector("#card3 .form");
    formCard3.style.display =
      formCard3.style.display === "none" ? "block" : "none";
  });

  // Get a reference to the form element for card3
  const formCard3 = document.querySelector("#card3 .form");

  // Add a submit event listener to the form for card3
  formCard3.addEventListener("submit", function (event) {
    // Prevent the form from submitting to another page
    event.preventDefault();

    // Update the price and description with the values from the input fields for card3
    const newPriceCard3 = priceInput.value;
    const newDescriptionCard3 = descriptionInput.value;

    // Save the updated data to local storage for card3
    localStorage.setItem("TRMolar26Price", newPriceCard3);
    localStorage.setItem("TRMolar26Desc", newDescriptionCard3);

    // You can perform additional logic here, e.g., displaying a success message
    console.log(
      "Data updated and saved to local storage for card3 (TRMolar26)"
    );

    // Update the displayed price text for card3
    priceDisplay.textContent = `Price: $${newPriceCard3}`;

    // Update the displayed description text for card3
    descriptionDisplay.textContent = newDescriptionCard3;

    // Hide the form section for card3
    formCard3.style.display = "none";
  });
}

// Function to handle card4
function handleCard4() {
  // Get references to the input elements for price and description of card4
  const priceInput = document.getElementById("TRPreMolar25Price");
  const descriptionInput = document.getElementById("TRPreMolar25Desc");

  // Get references to the price and description display elements for card4
  const priceDisplay = document.querySelector("#card4 .price p");
  const descriptionDisplay = document.querySelector("#card4 .descript2 p");

  // Retrieve the saved data from local storage when the page loads
  const savedPrice = localStorage.getItem("TRPreMolar25Price");
  const savedDescription = localStorage.getItem("TRPreMolar25Desc");

  if (savedPrice) {
    // Update the input field with the saved price
    priceInput.value = savedPrice;
    // Update the price display for card4
    priceDisplay.textContent = `Price: $${savedPrice}`;
  }

  if (savedDescription) {
    // Update the input field with the saved description
    descriptionInput.value = savedDescription;
    // Update the description display for card4
    descriptionDisplay.textContent = savedDescription;
  }

  // Add a click event listener to the "Edit" button for card4
  const editButtonCard4 = document.querySelector("#card4 button");
  editButtonCard4.addEventListener("click", function () {
    // Toggle the visibility of the form for card4 when the button is clicked
    const formCard4 = document.querySelector("#card4 .form");
    formCard4.style.display =
      formCard4.style.display === "none" ? "block" : "none";
  });

  // Get a reference to the form element for card4
  const formCard4 = document.querySelector("#card4 .form");

  // Add a submit event listener to the form for card4
  formCard4.addEventListener("submit", function (event) {
    // Prevent the form from submitting to another page
    event.preventDefault();

    // Update the price and description with the values from the input fields for card4
    const newPriceCard4 = priceInput.value;
    const newDescriptionCard4 = descriptionInput.value;

    // Save the updated data to local storage for card4
    localStorage.setItem("TRPreMolar25Price", newPriceCard4);
    localStorage.setItem("TRPreMolar25Desc", newDescriptionCard4);

    // You can perform additional logic here, e.g., displaying a success message
    console.log(
      "Data updated and saved to local storage for card4 (TRPreMolar25)"
    );

    // Update the displayed price text for card4
    priceDisplay.textContent = `Price: $${newPriceCard4}`;

    // Update the displayed description text for card4
    descriptionDisplay.textContent = newDescriptionCard4;

    // Hide the form section for card4
    formCard4.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Call the functions to handle each card
  handleCard1();
  handleCard2();
  handleCard3();
  handleCard4();
});
