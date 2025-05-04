const car__wrapperEl = document.querySelector(".car__wrapper");
const formEl = document.querySelector(".form");

const carNameEl = document.getElementById("name");
const carBrandEl = document.getElementById("brand");
const carPriceEl = document.getElementById("price");
const carColorEl = document.getElementById("color");
const carIsNewEl = document.getElementById("isNew");
const submitBtnEl = document.getElementById("submit__btn");

const cars = JSON.parse(localStorage.getItem("cars")) || [];

function renderCarData(data) {
  const fragment = document.createDocumentFragment();
  car__wrapperEl.innerHTML = null;
  data.forEach((car) => {
    const div = document.createElement("div");
    div.className = "car__card";
    div.innerHTML = `
        <div class="car__image"></div>
        <div class="car__body">
        <h3> <span>name:</span> ${car.name}</h3>
        <h3> <span>brand:</span> ${car.brand}</h3>
        <h3> <span>color:</span> ${car.color}</h3>
        <h3> <span>isNew:</span> ${car.isNew}</h3>
        <p> <span>price:</span> ${car.price}.000</p>
        </div>
        `;
    fragment.appendChild(div);
  });
  car__wrapperEl.appendChild(fragment);
}

window.onload = () => {
  renderCarData(cars);
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let newCars = {
    id: new Date().getTime(),
    name: carNameEl.value,
    brand: carBrandEl.value,
    price: Number(carPriceEl.value),
    color: carColorEl.value,
    isNew: carIsNewEl.value,
  };
  cars.push(newCars);
  localStorage.setItem("cars", JSON.stringify(cars));
  renderCarData(cars);
  carNameEl.value = "";
  carBrandEl.value = "";
  carPriceEl.value = "";
  carColorEl.value = "";
  carIsNewEl.value = "";
});
