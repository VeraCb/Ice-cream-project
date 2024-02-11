const element = document.querySelector(".rotate-right");

element.addEventListener("mouseleave", () => {
  setTimeout(() => {
    element.classList.add("rotate-back");
  }, 2000);
});
