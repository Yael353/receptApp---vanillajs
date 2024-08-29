document.addEventListener("DOMContentLoaded", function () {
  const containerButton = document.querySelector(".containerButton");
  const containerForm = document.querySelector(".containerForm");
  //ingredients
  const addButton = document.querySelector(".addButton");
  const ingredientInput = document.getElementById("ingredientInput");
  const amountInput = document.getElementById("amountInput");
  const dropDown = document.getElementById("dropDown");
  const ingredientList = document.getElementById("ingredientOutput");
  //steps
  const stepInput = document.getElementById("stepInput");
  const addStepBtn = document.getElementById("addStepBtn");
  const stepList = document.getElementById("stepsOutput");
  //image
  const standardImage = document.getElementById("standardImage");
  const imageInput = document.getElementById("imageInput");
  
  //add recipe
  const addImageBtn = document.getElementById("addRecipeBtn");

  let ingredients = [];
  let steps = [];

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

  //add ingredients on click:
  addButton.addEventListener("click", function () {
    const ingridient = ingredientInput.value; //trim()
    const unit = dropDown.value;
    const amount = amountInput.value.trim();

    //if ingredient, amount and unit new ingredientObject
    if (ingridient && unit && amount) {
      const ingredientObject = {
        name: ingridient,
        unit: unit,
        amount: amount,
      };

      //push the ingredients to ingredients arr
      ingredients.push(ingredientObject);

      //create list el to the ul
      const listItem = document.createElement("li");
      //content to put in the li el
      listItem.textContent = `${ingredientObject.name} - ${ingredientObject.unit} - ${ingredientObject.amount} `;
      //add li to ul
      ingredientList.appendChild(listItem);

      //clear input filelds
      ingredientInput.value = "";
      amountInput.value = "";
    } else {
      console.log("No ingredient!!");
    }
  });

  //add steps on click:
  addStepBtn.addEventListener("click", function () {
    const step = stepInput.value.trim();
    console.log(stepInput);
    //push the ingredients to ingredients arr
    if (step) {
      steps.push(step);

      //create list el to the ul
      const stepItem = document.createElement("li");
      //content to put in the li el
      stepItem.textContent = step;
      //add li to ul
      stepList.appendChild(stepItem);

      /*
      if(step.length > 0) {
        stepInput.removeAttribute("required")
      }
*/

      //clear input field
      stepInput.value = "";
    } else {
      console.log("nothing too see here");
    }
  });

  //add/upload/change image
});
