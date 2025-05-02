const BASE_URL = "https://dummyjson.com/";

function renderRecipes(data) {
  const reciper__wrapperEl = document.querySelector(".reciper__wrapper");
  const fragment = document.createDocumentFragment();

  data?.recipes.forEach((recipe) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
         <img src=${recipe.image} alt=${recipe.name}></img>
        <div class="card__body">
        <h2><span>Name:<span/> ${recipe.name}</h2>
        <h4><span>prepTimeMinutes:</span> ${recipe.prepTimeMinutes}</h4>
        <p><span>cookTimeMinutes:</span> ${recipe.cookTimeMinutes}</p>
        </div>
    `;
    fragment.appendChild(card);
  });

  reciper__wrapperEl.appendChild(fragment);
}

function fetchData(endpoint) {
  fetch(`${BASE_URL}${endpoint}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong ❗");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      renderRecipes(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

window.addEventListener("load", () => {
  fetchData("recipes");
});
