var btn = document.getElementsByClassName("btn__slider");
var col = document.getElementsByClassName("column");
var txt = document.getElementsByClassName("testimonial__text");
var photo = document.getElementsByClassName("testimonial__photo");
var shape = document.getElementsByClassName("testimonial__img");

for (let i = 0; i < 4; i++) {
  btn[i].addEventListener("click", function () {
    btn[i].classList.add("btn__active");
    for (let j = 0; j < 4; j++) {
      if (j != i) {
        btn[j].classList.remove("btn__active");
        col[j].classList.add("u-hidden");
        txt[j].classList.remove("u-animate--1");
        shape[j].classList.remove("u-animate--2");
        photo[j].classList.remove("u-animate--1");
      }
    }

    txt[i].classList.add("u-animate--1");
    shape[i].classList.add("u-animate--2");
    photo[i].classList.add("u-animate--1");
    col[i].classList.remove("u-hidden");
  });
}
