const BASE_URL = "https://dummyjson.com/";

function renderRecipes(data) {
  const reciper__wrapperEl = document.querySelector(".reciper__wrapper");
  const fragment = document.createDocumentFragment();

  data?.recipes.forEach((recipe) => {
    let card = document.createElement("div");
    card.className = "recipes__card";
    card.innerHTML = `
        <img src=${recipe.image} alt=${recipe.name}></img>
        <div class="card__body">
        <h2><span>Name:<span/> ${recipe.name}</h2>
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
      renderRecipes(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      skeletonEl.style.display = "none";
    });
}

window.addEventListener("load", () => {
  fetchData("recipes");
});

const skeletonEl = document.querySelector(".skeleton");

function createSkeleton() {
  let fragment = document.createDocumentFragment();
  Array(30)
    .fill("")
    .forEach((_) => {
      const div = document.createElement("div");
      div.className = "skeleton__items";
      div.innerHTML = `
       <div class="skeleton__image skeleton__animation"></div>
        <div class="skeleton__firstName skeleton__animation"></div>
      `;
      fragment.appendChild(div);
    });
  skeletonEl.appendChild(fragment);
}

createSkeleton();
