ad = document.querySelector(".ad");
btn = document.querySelector("#remove-btn");

btn.addEventListener("click", () => {
  //   ad.remove();
  //   btn.parentNode.remove();
  btn.parentElement.remove();
});

//Element是一種Node
