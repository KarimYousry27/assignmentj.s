var meals = [
  {
    name: "Classic Beef Burger",
    description: "Juicy grilled beef burger served with fresh toppings and a toasted bun.",
    rating: 4.6,
    reviews: "(380 reviews)",
    difficulty: "Easy",
    region: "American",
    imgSource: "../imgs/burger.avif",
    preparationTime: "15 min",
    cookTime: "15 min",
    servings: "2 people",
    warning: false,

    ingredients: [
      "500g ground beef",
      "2 burger buns",
      "2 cheese slices",
      "Lettuce",
      "Tomato",
      "Salt and pepper"
    ],

    instructions: [
      "Season ground beef with salt and pepper.",
      "Shape beef into patties.",
      "Grill patties for 4–5 minutes per side.",
      "Toast buns lightly.",
      "Assemble burger with toppings and serve."
    ],

    nutrition: {
      calories: "650 kcal",
      protein: "35g",
      carbohydrates: "45g",
      fat: "40g",
      fiber: "3g",
      sodium: "820mg"
    },

    chefsTips: [
      "Do not overwork the meat.",
      "Let patties rest before serving.",
      "Serve with fries or salad."
    ]
  },

  {
    name: "Beef Tacos",
    description: "Spiced ground beef served in taco shells with fresh toppings.",
    rating: 4.5,
    reviews: "(290 reviews)",
    difficulty: "Easy",
    region: "Mexican",
    imgSource: "../imgs/tacos.avif",
    preparationTime: "20 min",
    cookTime: "20 min",
    servings: "4 people",
    warning: true,

    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion",
      "2 cloves garlic",
      "Taco seasoning",
      "Lettuce",
      "Cheese"
    ],

    instructions: [
      "Cook ground beef until browned.",
      "Add onion, garlic, and seasoning.",
      "Simmer for 5 minutes.",
      "Fill taco shells with beef.",
      "Add toppings and serve."
    ],

    nutrition: {
      calories: "550 kcal",
      protein: "30g",
      carbohydrates: "40g",
      fat: "32g",
      fiber: "4g",
      sodium: "760mg"
    },

    chefsTips: [
      "Warm taco shells before serving.",
      "Add lime juice for extra flavor.",
      "Serve with salsa or guacamole."
    ]
  },

  {
    name: "Honey Garlic Salmon",
    description: "Tender salmon glazed with a sweet and savory honey garlic sauce.",
    rating: 4.8,
    reviews: "(420 reviews)",
    difficulty: "Medium",
    region: "Asian",
    imgSource: "../imgs/salmon.avif",
    preparationTime: "10 min",
    cookTime: "20 min",
    servings: "2 people",
    warning: false,

    ingredients: [
      "2 salmon fillets",
      "3 cloves garlic",
      "3 tbsp honey",
      "2 tbsp soy sauce",
      "1 tbsp olive oil",
      "Black pepper"
    ],

    instructions: [
      "Mix honey, soy sauce, and garlic.",
      "Heat oil in a pan.",
      "Cook salmon 4–5 minutes per side.",
      "Pour sauce over salmon.",
      "Simmer until glazed and serve."
    ],

    nutrition: {
      calories: "480 kcal",
      protein: "34g",
      carbohydrates: "18g",
      fat: "28g",
      fiber: "1g",
      sodium: "610mg"
    },

    chefsTips: [
      "Do not overcook salmon.",
      "Use fresh garlic.",
      "Serve with rice or vegetables."
    ]
  },

  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza topped with tomato sauce, mozzarella, and fresh basil.",
    rating: 4.7,
    reviews: "(500 reviews)",
    difficulty: "Medium",
    region: "Italian",
    imgSource: "../imgs/pizza.avif",
    preparationTime: "30 min",
    cookTime: "15 min",
    servings: "3 people",
    warning: true,

    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil",
      "Olive oil",
      "Salt"
    ],

    instructions: [
      "Preheat oven to high temperature.",
      "Roll out pizza dough.",
      "Spread tomato sauce evenly.",
      "Add mozzarella slices.",
      "Bake until crust is golden.",
      "Garnish with basil and serve."
    ],

    nutrition: {
      calories: "700 kcal",
      protein: "28g",
      carbohydrates: "85g",
      fat: "30g",
      fiber: "5g",
      sodium: "900mg"
    },

    chefsTips: [
      "Use fresh mozzarella.",
      "Do not overload toppings.",
      "Bake on a hot stone."
    ]
  },

  {
    name: "Lasagna Bolognese",
    description: "Traditional Italian lasagna layered with rich meat sauce and creamy béchamel.",
    rating: 4.9,
    reviews: "(610 reviews)",
    difficulty: "Hard",
    region: "Italian",
    imgSource: "../imgs/lasagna.avif",
    preparationTime: "40 min",
    cookTime: "60 min",
    servings: "6 people",
    warning: true,

    ingredients: [
      "Lasagna sheets",
      "500g ground beef",
      "Tomato sauce",
      "Onion",
      "Garlic",
      "Béchamel sauce",
      "Mozzarella cheese"
    ],

    instructions: [
      "Cook beef with onion and garlic.",
      "Add tomato sauce and simmer.",
      "Layer sauce, pasta, and béchamel.",
      "Repeat layers.",
      "Bake until golden."
    ],

    nutrition: {
      calories: "750 kcal",
      protein: "38g",
      carbohydrates: "65g",
      fat: "42g",
      fiber: "6g",
      sodium: "980mg"
    },

    chefsTips: [
      "Let lasagna rest before slicing.",
      "Use quality cheese.",
      "Prepare sauce ahead of time."
    ]
  },

  {
    name: "Chicken Tikka Masala",
    description: "Tender chicken pieces cooked in a creamy spiced tomato sauce.",
    rating: 4.8,
    reviews: "(530 reviews)",
    difficulty: "Medium",
    region: "Indian",
    imgSource: "../imgs/tikka.avif",
    preparationTime: "30 min",
    cookTime: "40 min",
    servings: "4 people",
    warning: true,

    ingredients: [
      "500g chicken breast",
      "Yogurt",
      "Tomato puree",
      "Onion",
      "Garlic",
      "Garam masala",
      "Cream"
    ],

    instructions: [
      "Marinate chicken in yogurt and spices.",
      "Grill or pan-cook chicken pieces.",
      "Cook onion, garlic, and tomato puree.",
      "Add spices and cream.",
      "Add chicken and simmer.",
      "Serve hot."
    ],

    nutrition: {
      calories: "620 kcal",
      protein: "36g",
      carbohydrates: "22g",
      fat: "38g",
      fiber: "3g",
      sodium: "870mg"
    },

    chefsTips: [
      "Marinate chicken overnight for best flavor.",
      "Adjust spice level to taste.",
      "Serve with naan or rice."
    ]
  }
];

const button = document.getElementById("button");
button.onclick = function () {
  const randomIndex = Math.floor(Math.random() * meals.length);
  showMeal(meals[randomIndex]);
};

window.onload = function () {
  showMeal(meals[0]);
};


function showMeal(meal) {
  document.getElementById("img").src = meal.imgSource;
  document.getElementById("rating").innerHTML = meal.rating;
  document.getElementById("reviews").innerHTML = meal.reviews;
  document.getElementById("difficulty").innerHTML = meal.difficulty;
  document.getElementById("region").innerHTML = meal.region;
  document.getElementById("prep-time").innerHTML = meal.preparationTime;
  document.getElementById("cook-time").innerHTML = meal.cookTime;
  document.getElementById("servings").innerHTML = meal.servings;
  document.getElementById("name").innerHTML = meal.name;
  document.getElementById("description").innerHTML = meal.description;

  const ingElements = document.querySelectorAll(".ing");
  ingElements.forEach((el, i) => {
    el.innerHTML = meal.ingredients[i] || "";
  });
  const instElements = document.querySelectorAll(".inst");
  instElements.forEach((el, i) => {
    el.innerHTML = meal.instructions[i] || "";
  });
  document.getElementById("calories").innerHTML = meal.nutrition.calories;
  document.getElementById("protien").innerHTML = meal.nutrition.protein;
  document.getElementById("carb").innerHTML = meal.nutrition.carbohydrates;
  document.getElementById("fat").innerHTML = meal.nutrition.fat;
  document.getElementById("fiber").innerHTML = meal.nutrition.fiber;
  document.getElementById("sodium").innerHTML = meal.nutrition.sodium;
  const tipElements = document.querySelectorAll(".tip");
  tipElements.forEach((el, i) => {
    el.innerHTML = meal.chefsTips[i] || "";
  });
}

  if (meal.warning === true) {
    document.getElementById("warning").classList.remove("d-none");
  }
  else {
    document.getElementById("extended-message").classList.add("d-none");
  }
