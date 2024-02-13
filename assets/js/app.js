// const btnEl = document.querySelector(".btn");
// const inputEl = document.querySelector(".text");

// btnEl.addEventListener("click", () => {

//     if (inputEl.type == "password") {
//         inputEl.type = "text";
//     }
//     else {
//         inputEl.type = "password";
//     }
// });


const headerBtnEl = document.querySelector(".bi-list");
const sidebarEl = document.querySelector(".sidebar");

headerBtnEl.addEventListener("click", () => {
  sidebarEl.style.marginLeft = "-20" + "px";
});
