const menu_btn = document.querySelector("#menu-btn");
const menu_close = document.querySelector("#menu-close");
const ul = document.querySelector("nav .navigation ul");

menu_btn.addEventListener("click", () => {
  ul.classList.add("active");
});
menu_close.addEventListener("click", () => {
  ul.classList.remove("active");
});

const course_content = document.querySelector(".card");
course_content.addEventListener("click", () => {
  window.location.href = "course-content.html";
});
