const cars = [
  {
    name: "Nissan Skyline GT-R",
    img: "../HeroSections/assets/img/GTR.png",
    bg: "../HeroSections/assets/img/bgroad.png",
    hp: "291 HP",
    tq: "262 lb-ft",
    accel: "6.8s",
  },
  {
    name: "Dodge Challenger SRT",
    img: "../HeroSections/assets/img/Chall.png",
    bg: "../HeroSections/assets/img/bgroad.png",
    hp: "375 HP",
    tq: "410 lb-ft",
    accel: "5.3s",
  },
  {
    name: "Toyota GR Supra",
    img: "../HeroSections/assets/img/Supra.png",
    bg: "../HeroSections/assets/img/bgroad.png",
    hp: "382 HP",
    tq: "368 lb-ft",
    accel: "3.9s",
  },
];

let currentIndex = 0;

function updateCar(index) {
  const image = document.getElementById("car-image");
  const bg = document.getElementById("car-bg");
  const name = document.getElementById("car-name");
  const hp = document.getElementById("car-hp");
  const tq = document.getElementById("car-tq");
  const accel = document.getElementById("car-accel");

  image.classList.add("fade-out");
  bg.classList.add("fade-out");
  document.getElementById("car-info").classList.add("fade-out");

  setTimeout(() => {
    image.src = cars[index].img;
    bg.style.backgroundImage = `url('${cars[index].bg}')`;
    name.textContent = cars[index].name;
    hp.textContent = cars[index].hp;
    tq.textContent = cars[index].tq;
    accel.textContent = cars[index].accel;

    image.classList.remove("fade-out");
    bg.classList.remove("fade-out");
    document.getElementById("car-info").classList.remove("fade-out");
  }, 300);
}

function nextCar() {
  currentIndex = (currentIndex + 1) % cars.length;
  updateCar(currentIndex);
}

function prevCar() {
  currentIndex = (currentIndex - 1 + cars.length) % cars.length;
  updateCar(currentIndex);
}