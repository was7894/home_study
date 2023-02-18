let mainText = document.querySelector("h1");

window.addEventListener("scroll", function () {
  let value = window.scrollY; //스크롤 y좌표 가져옴
  console.log(value);

  if (value > 200) {
    //js에서 css변경
    mainText.style.animation = "disappear 1s ease-out forwards"; /* forwards:키프레임이 100%도달하였을때 마지막 키프레임을 유지 */
  } else {
    mainText.style.animation = "slide 1s ease-out";
  }
});
