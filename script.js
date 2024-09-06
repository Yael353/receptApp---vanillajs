document.addEventListener("DOMContentLoaded", function () {
  const containerButton = document.querySelector(".containerButton");
  const containerForm = document.querySelector(".containerForm");
  //title
  const titleInput = document.getElementById("titleInput");
  //description
  const descriptionInput = document.getElementById("descriptionInput");
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
  const imgSrc = document.getElementById("imgSrc");
  const imageInput = document.getElementById("imageInput");
  //add recipe
  const addRecipeBtn = document.getElementById("addRecipeBtn");
  //created recipe
  const recipeCard = document.getElementById("recipeCard");

  let ingredients = [];
  let steps = [];
  let imageUrl = "";

  //show/hide create new recipe
  containerForm.style.display = "none";
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
    const ingridient = ingredientInput.value;
    const amount = amountInput.value.trim();
    const unit = dropDown.value;

    //if ingredient, amount and unit new ingredientObject
    if (ingridient && unit && amount) {
      const ingredientObject = {
        name: ingridient,
        amount: amount,
        unit: unit,
      };

      //push the ingredients to ingredients arr
      ingredients.push(ingredientObject);

      //create list el to the ul
      const listItem = document.createElement("li");
      //content to put in the li el
      listItem.textContent = `${ingredientObject.name} - ${ingredientObject.amount} - ${ingredientObject.unit} `;
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
    //console.log(stepInput);
    //push the ingredients to ingredients arr
    if (step) {
      steps.push(step);

      //create list el to the ul
      const stepItem = document.createElement("li");
      //content to put in the li el
      stepItem.textContent = step;
      //add li to ul
      stepList.appendChild(stepItem);

      //clear input field
      stepInput.value = "";
    } else {
      console.log("nothing too see here");
    }
  });

  //add/upload/change image
  imageInput.onchange = function () {
    imageUrl = URL.createObjectURL(imageInput.files[0]);
    imgSrc.src = imageUrl;

    //if uploaded file failure
    imgSrc.onerror = function () {
      imgSrc.alt = "Error uploading file"; //if error uploading file show this alt
      imgSrc.src = "/img/emptyImg.png";
    };
  };

  //create recipe
  addRecipeBtn.addEventListener("click", function () {
    const title = titleInput.value.trim(); //get title value
    const description = descriptionInput.value.trim();

    if (!imageUrl) {
      imageUrl = "/img/emptyImg.png"; // if no img uploaded show default img
    }

    const cardObject = {
      title: title,
      description: description,
      ingredients: ingredients,
      steps: steps,
      imageUrl: imageUrl,
    };

    //add created recipe
    const card = document.createElement("div");
    card.classList.add("cardStyling"); //add class

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("cardTitleStyling");
    cardTitle.textContent = cardObject.title;

    const cardImg = document.createElement("img");
    cardImg.classList.add("cardImgStyling");
    cardImg.src = cardObject.imageUrl;

    //if error uploading img/file
    cardImg.onerror = function () {
      cardImg.alt = "Error uploading file";
      cardImg.src = "/img/emptyImg.png";
    };

    //description
    const cardDescriptionTitle = document.createElement("h3");
    cardDescriptionTitle.textContent = "Description";
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("cardDescriptionStyling");
    cardDescription.textContent = cardObject.description;

    /**create output lists for ingredients and steps */
    const cardIngredientsTitle = document.createElement("h3");
    cardIngredientsTitle.textContent = "Ingredients";
    const cardIngredients = document.createElement("ul");
    cardIngredients.classList.add("cardIngredientsStyling");

    const cardStepsTitle = document.createElement("h3");
    cardStepsTitle.textContent = "Steps";
    const cardSteps = document.createElement("ul");
    cardSteps.classList.add("cardStepsStyling");

    cardObject.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = `${ingredient.name} - ${ingredient.amount} - ${ingredient.unit}`;
      cardIngredients.appendChild(li);
    });

    cardObject.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      cardSteps.appendChild(li);
    });

    /**edit and delete btns for each created recipe */
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Delete recipe";

    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.textContent = "Edit recipe";

    card.appendChild(cardTitle);
    card.appendChild(cardImg);
    card.appendChild(cardDescriptionTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardIngredientsTitle);
    card.appendChild(cardIngredients);
    card.appendChild(cardStepsTitle);
    card.appendChild(cardSteps);
    card.appendChild(deleteBtn);
    card.appendChild(editBtn);

    titleInput.value = "";
    descriptionInput.value = "";

    recipeCard.appendChild(card);
  });
});
