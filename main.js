let h2 = document.querySelector("h2");
let but1 = document.querySelector("button");
let input = document.querySelector("input");
input.setAttribute("placeholder", "글을 쓰시오");
but1.addEventListener("click", () => {
  h2.innerHTML = "treasure";
  //   h2.classList.remove("blu");
  h2.classList.add("red");
});
