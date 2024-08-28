document.addEventListener("DOMContentLoaded", function () {
  const containerButton = document.querySelector(".containerButton");
  const containerForm = document.querySelector(".containerForm");
  const addButton = document.querySelector(".addButton");
  const ingredientInput = document.getElementById("ingredientInput");
  const amountInput = document.getElementById("amountInput");
  const dropDown = document.getElementById("dropDown");

  let ingredients = [];

  containerForm.style.display = "block";
  containerButton.addEventListener("click", function () {
    if (
      containerForm.style.display === "none" ||
      containerForm.style.display === ""
    ) {
      containerForm.style.display = "block";
    } else {
      containerForm.style.display = "none";
    }
  });

  addButton.addEventListener("click", function () {
    const ingridient = ingredientInput.value.trim();
    const unit = dropDown.value;
    const amount = amountInput.value.trim();

    if (ingridient && unit && amount) {
      const ingredientObject = {
        name: ingridient,
        unit: unit,
        amount: amount,
      };

      ingredients.push(ingredientObject);
      ingredientInput.value = "";
      amountInput.value = "";
    }
  });
});
