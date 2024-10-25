let div00 = document.querySelector("div#r1b1");
let div01 = document.querySelector("div#r1b2");
let div02 = div01.nextElementSibling;
let row02 = document.querySelector("div.row2");
let originalColor00 = window.getComputedStyle(div00).backgroundColor;

div00.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "red";
});

div00.addEventListener("mouseleave", function () {
  this.style.backgroundColor = originalColor00;
});

div01.addEventListener("click", function () {
  window.open("https://x.com", "_blank");
});

div02.addEventListener("click", function () {
  if (this.style.backgroundColor === "red") {
    this.style.backgroundColor = originalColor00;
  } else {
    this.style.backgroundColor = "red";
  }
});

[...row02.children].forEach((child) => {
  child.addEventListener("click", function () {
    if (this.style.backgroundColor === "green") {
      this.style.backgroundColor = originalColor00;
    } else {
      this.style.backgroundColor = "green";
    }
  });
});
