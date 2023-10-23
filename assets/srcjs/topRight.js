// Function to handle card1
function handleCard1() {
  // Get references to the input elements for price and description of card1
  const priceInput = document.getElementById("TLMolar18Price");
  const descriptionInput = document.getElementById("TLMolar18Desc");

  // Get references to the price and description display elements for card1
  const priceDisplay = document.querySelector("#card1 .price p");
  const descriptionDisplay = document.querySelector("#card1 .descript2 p");

  // Retrieve the saved data from local storage when the page loads
  const savedPrice = localStorage.getItem("TLMolar18Price");
  const savedDescription = localStorage.getItem("TLMolar18Desc");

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
    localStorage.setItem("TLMolar18Price", newPriceCard1);
    localStorage.setItem("TLMolar18Desc", newDescriptionCard1);

    // You can perform additional logic here, e.g., displaying a success message
    console.log(
      "Data updated and saved to local storage for card1 (TLMolar18)"
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
  const priceInput = document.getElementById("TLMolar17Price");
  const descriptionInput = document.getElementById("TLMolar17Desc");

  // Get references to the price and description display elements for card2
  const priceDisplay = document.querySelector("#card2 .price p");
  const descriptionDisplay = document.querySelector("#card2 .descript2 p");

  // Retrieve the saved data from local storage when the page loads
  const savedPrice = localStorage.getItem("TLMolar17Price");
  const savedDescription = localStorage.getItem("TLMolar17Desc");

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
    localStorage.setItem("TLMolar17Price", newPriceCard2);
    localStorage.setItem("TLMolar17Desc", newDescriptionCard2);

    // You can perform additional logic here, e.g., displaying a success message
    console.log(
      "Data updated and saved to local storage for card2 (TLMolar17)"
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
  const priceInput = document.getElementById("TLMolar16Price");
  const descriptionInput = document.getElementById("TLMolar16Desc");

  // Get references to the price and description display elements for card3
  const priceDisplay = document.querySelector("#card3 .price p");
  const descriptionDisplay = document.querySelector("#card3 .descript2 p");

  // Retrieve the saved data from local storage when the page loads for card3
  const savedPrice = localStorage.getItem("TLMolar16Price");
  const savedDescription = localStorage.getItem("TLMolar16Desc");

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
    localStorage.setItem("TLMolar16Price", newPriceCard3);
    localStorage.setItem("TLMolar16Desc", newDescriptionCard3);

    // You can perform additional logic here, e.g., displaying a success message
    console.log(
      "Data updated and saved to local storage for card3 (TLMolar16)"
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
  const priceInput = document.getElementById("TLBicusp15Price");
  const descriptionInput = document.getElementById("TLBicusp15Desc");

  // Get references to the price and description display elements for card4
  const priceDisplay = document.querySelector("#card4 .price p");
  const descriptionDisplay = document.querySelector("#card4 .descript2 p");

  // Retrieve the saved data from local storage when the page loads
  const savedPrice = localStorage.getItem("TLBicusp15Price");
  const savedDescription = localStorage.getItem("TLBicusp15Desc");

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
    localStorage.setItem("TLBicusp15Price", newPriceCard4);
    localStorage.setItem("TLBicusp15Desc", newDescriptionCard4);

    // You can perform additional logic here, e.g., displaying a success message
    console.log(
      "Data updated and saved to local storage for card4 (TLBicusp15)"
    );

    // Update the displayed price text for card4
    priceDisplay.textContent = `Price: $${newPriceCard4}`;

    // Update the displayed description text for card4
    descriptionDisplay.textContent = newDescriptionCard4;

    // Hide the form section for card4
    formCard4.style.display = "none";
  });
}
// Function to handle card5
function handleCard5() {
  // Get references to the input elements for price and description of card5
  const priceInput = document.getElementById("TLBicusp14Price");
  const descriptionInput = document.getElementById("TLBicusp14Desc");

  // Get references to the price and description display elements for card5
  const priceDisplay = document.querySelector("#card5 .price p");
  const descriptionDisplay = document.querySelector("#card5 .descript2 p");

  // Retrieve the saved data from local storage when the page loads
  const savedPrice = localStorage.getItem("TLBicusp14Price");
  const savedDescription = localStorage.getItem("TLBicusp14Desc");

  if (savedPrice) {
    // Update the input field with the saved price
    priceInput.value = savedPrice;
    // Update the price display for card5
    priceDisplay.textContent = `Price: $${savedPrice}`;
  }

  if (savedDescription) {
    // Update the input field with the saved description
    descriptionInput.value = savedDescription;
    // Update the description display for card5
    descriptionDisplay.textContent = savedDescription;
  }

  // Add a click event listener to the "Edit" button for card5
  const editButtonCard5 = document.querySelector("#card5 button");
  editButtonCard5.addEventListener("click", function () {
    // Toggle the visibility of the form for card5 when the button is clicked
    const formCard5 = document.querySelector("#card5 .form");
    formCard5.style.display =
      formCard5.style.display === "none" ? "block" : "none";
  });

  // Get a reference to the form element for card5
  const formCard5 = document.querySelector("#card5 .form");

  // Add a submit event listener to the form for card5
  formCard5.addEventListener("submit", function (event) {
    // Prevent the form from submitting to another page
    event.preventDefault();

    // Update the price and description with the values from the input fields for card5
    const newPriceCard5 = priceInput.value;
    const newDescriptionCard5 = descriptionInput.value;

    // Save the updated data to local storage for card5
    localStorage.setItem("TLBicusp14Price", newPriceCard5);
    localStorage.setItem("TLBicusp14Desc", newDescriptionCard5);

    // You can perform additional logic here, e.g., displaying a success message
    console.log(
      "Data updated and saved to local storage for card5 (TLBicusp14)"
    );

    // Update the displayed price text for card5
    priceDisplay.textContent = `Price: $${newPriceCard5}`;

    // Update the displayed description text for card5
    descriptionDisplay.textContent = newDescriptionCard5;

    // Hide the form section for card5
    formCard5.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Call the functions to handle each card
  handleCard1();
  handleCard2();
  handleCard3();
  handleCard4();
  handleCard5();
});
