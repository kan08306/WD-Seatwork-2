const cars = [
  {
    name: "Nissan GT-R R35",
    image: "../Herosection4/assets/img/GTR.png",
    bg: "../Herosection4/assets/img/bgroad.png",
    hp: "565 HP",
    tq: "467 lb-ft",
    accel: "2.9s"
  },
  {
    name: "Toyota Supra MK5",
    image: "../Herosection4/assets/img/Supra.png",
    bg: "../Herosection4/assets/img/bgroad.png",
    hp: "382 HP",
    tq: "368 lb-ft",
    accel: "3.9s"
  },
  {
    name: "Dodge Challenger SRT Hellcat",
    image: "../Herosection4/assets/img/Chall.png",
    bg: "../Herosection4/assets/img/bgroad.png",
    hp: "717 HP",
    tq: "656 lb-ft",
    accel: "3.6s"
  }
];

let current = 0;

const carImage = document.getElementById("car-image");
const carBg = document.getElementById("car-bg");
const carName = document.getElementById("car-name");
const carHp = document.getElementById("car-hp");
const carTq = document.getElementById("car-tq");
const carAccel = document.getElementById("car-accel");
const carInfo = document.getElementById("car-info");

function updateCar(index) {
  carImage.classList.add("fade-out");
  carBg.classList.add("fade-out");
  carInfo.classList.add("fade-out");

  setTimeout(() => {
    const car = cars[index];
    carImage.src = car.image;
    carBg.style.backgroundImage = `url('${car.bg}')`;
    carName.textContent = car.name;
    carHp.textContent = car.hp;
    carTq.textContent = car.tq;
    carAccel.textContent = car.accel;

    carImage.classList.remove("fade-out");
    carBg.classList.remove("fade-out");
    carInfo.classList.remove("fade-out");
  }, 300);
}

function nextCar() {
  current = (current + 1) % cars.length;
  updateCar(current);
}

function prevCar() {
  current = (current - 1 + cars.length) % cars.length;
  updateCar(current);
}