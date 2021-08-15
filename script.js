const hexColorEls = document.querySelectorAll("#hex-color");

hexColorEls.forEach((hexColorEl) => {
  hexColorEl.parentElement.previousElementSibling.style.backgroundColor =
    hexColorEl.textContent;
});
