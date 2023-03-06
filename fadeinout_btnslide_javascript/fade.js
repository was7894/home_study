let img_slide = document.querySelectorAll(".images li");
let btn = document.querySelectorAll(".btns li");
let play = document.querySelector(".play");
let stop = document.querySelector(".stop");
let btn_index = 0;
let current_idx = 0;
let lgt = img_slide.length;
let timer;

fade_start();

btn.forEach(function (el, index) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    fade_stop();
    stop.classList.remove("on");
    play.classList.add("on");
    for (let i = 0; i < img_slide.length; i++) {
      img_slide[i].querySelector("div").classList.remove("on");
      btn[i].querySelector(".btn").classList.remove("on");
    }
    img_slide[index].querySelector("div").classList.add("on");
    btn[index].querySelector(".btn").classList.add("on");
    if (current_idx !== index) {
      current_idx = index - 1;
      console.log("수정", current_idx);
    }
    console.log("인덱스", index);
    // console.log("현재", current_idx);
  });
});

function fade_start() {
  timer = setInterval(fade, 1000);
}

function fade_stop() {
  clearInterval(timer);
}

function fade() {
  let next_idx = (current_idx + 1) % lgt;
  for (let i = 0; i < lgt; i++) {
    img_slide[i].querySelector("div").classList.remove("on");
    btn[i].querySelector(".btn").classList.remove("on");
  }

  img_slide[next_idx].querySelector("div").classList.add("on");
  btn[next_idx].querySelector(".btn").classList.add("on");
  current_idx = next_idx;
}

stop.addEventListener("click", function (e) {
  e.preventDefault();
  fade_stop();
  stop.classList.remove("on");
  play.classList.add("on");
});

play.addEventListener("click", function (e) {
  e.preventDefault();
  fade_start();
  play.classList.remove("on");
  stop.classList.add("on");
});
