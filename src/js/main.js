let random_backgrounds = document.querySelectorAll(".random-backgrounds span");
let show_bullets = document.querySelectorAll(".bullets-option span");
let nav_bullets = document.querySelector(".nav-bullets");

window.onload = setTimeout(() => {
  let load_div = document.querySelector(".load");
  load_div.style.display = "none";
  let lis = document.querySelectorAll(".colors-list li");
  lis.forEach((element) => {
    element.style.background = `${element.getAttribute("data-color")}`;
  });
  // default
  if (
    !localStorage.getItem("color") &&
    !localStorage.getItem("random_backgrounds") &&
    !localStorage.getItem("show_bullets")
  ) {
    localStorage.setItem("color", "#FF9800");
    localStorage.setItem("random_backgrounds", true);
    localStorage.setItem("show_bullets", true);
  }
  if (localStorage.getItem("color")) {
    changeColor();
  }
  if (localStorage.getItem("random_backgrounds").toString() == "false") {
    random_backgrounds[0].classList.remove("active");
    random_backgrounds[1].classList.add("active");
  } else {
    random_backgrounds[0].classList.add("active");
    random_backgrounds[1].classList.remove("active");
  }
  if (localStorage.getItem("show_bullets").toString() == "false") {
    show_bullets[0].classList.remove("active");
    show_bullets[1].classList.add("active");
    nav_bullets.style.display = "none";
  } else {
    show_bullets[0].classList.add("active");
    show_bullets[1].classList.remove("active");
  }
}, 100);

// Setting Box
document.querySelector(".toggle-settings").addEventListener("click", (e) => {
  document.querySelector(".fa-gear").classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
});

// random_backgrounds
random_backgrounds.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("yes")) {
      random_backgrounds[0].classList.add("active");
      random_backgrounds[1].classList.remove("active");
      localStorage.setItem("random_backgrounds", true);
    }
    if (element.classList.contains("no")) {
      random_backgrounds[0].classList.remove("active");
      random_backgrounds[1].classList.add("active");
      localStorage.setItem("random_backgrounds", false);
    }
  });
});

// show_bullets
show_bullets.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("yes")) {
      show_bullets[0].classList.add("active");
      show_bullets[1].classList.remove("active");
      localStorage.setItem("show_bullets", true);
      nav_bullets.style.display = "block";
    }
    if (element.classList.contains("no")) {
      show_bullets[0].classList.remove("active");
      show_bullets[1].classList.add("active");
      localStorage.setItem("show_bullets", false);
      nav_bullets.style.display = "none";
    }
  });
});

// Change Random Image
images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.png",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
];
function changeBackground() {
  setInterval(() => {
    if (random_backgrounds[0].classList.contains("active")) {
      let landing_page = document.querySelector(".landing-page");
      let randomNum = Math.round(Math.random() * images.length);
      landing_page.style.background = `url(src/imgs/${images[randomNum]})`;
    }
  }, 5000);
}
changeBackground();

// Change Color
let colors = document.querySelectorAll(".colors-list li");
colors.forEach((element) => {
  element.addEventListener("click", () => {
    localStorage.setItem("color", `${element.getAttribute("data-color")}`);
    changeColor();
  });
});
function changeColor() {
  if (localStorage.getItem("color")) {
    const root = document.querySelector(":root");
    root.style.setProperty("--main-color", `${localStorage.getItem("color")}`);
  }
}

// Reset Button
let reset = document.querySelector(".reset-options");
reset.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

// Bullets
let bullets = document.querySelectorAll(".bullet");
bullets.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    let attribute = bullet.getAttribute("data-section");
    document.getElementById(`${attribute}`).scrollIntoView();
  });
});
