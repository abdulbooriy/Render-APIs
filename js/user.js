const BASE_URL = "https://dummyjson.com/";

function renderUser(data) {
  const wrapperEl = document.querySelector(".user__wrapper");
  let fragment = document.createDocumentFragment();
  wrapperEl.innerHTML = null;

  data?.users.forEach((user) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src=${user.image} alt=${user.firstname}></img>
        <div class="card__body">
        <h2><span>FirstName:</span> ${user.firstName}</h2>
        <h2><span>LastName:</span> ${user.lastName}</h2>
        <h3><span>MaidenName:</span> ${user.maidenName}</h3>
        <h4><span>Email:</span> ${user.email}</h4>
        <p><span>Age:</span> ${user.age}</p>
        </div>
    `;
    fragment.appendChild(card);
  });

  wrapperEl.appendChild(fragment);
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
      renderUser(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      skeletonEl.style.display = "none";
    });
}

window.addEventListener("load", () => {
  fetchData("users");
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
        <div class="skeleton__lastName skeleton__animation"></div>
        <div class="skeleton__maidenName skeleton__animation"></div>
        <div class="skeleton__email skeleton__animation"></div>
        <div class="skeleton__age skeleton__animation"></div>
      `;
      fragment.appendChild(div);
    });
  skeletonEl.appendChild(fragment);
}

createSkeleton();
