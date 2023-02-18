let searchButton = document.querySelector("#search");
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

/* 
랜덤숫자 추출
const randomNum = Math.floor(Math.random() * 10 + 1);
  console.log(randomNum);
   */
//api의 가장 기본적인 구조.
async function sendApiRequest() {
  let APP_ID = "e9af3c1c";
  let API_KEY = "287ddc6bfccb96c0d47866b92b186ab2";

  //url
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`);
  // console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

function useApiData(data) {
  let Number = 0;
  document.querySelector("#content").innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="${data.hits[Number].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">충무김밥<br>(${data.hits[Number].recipe.label})</h5>
    <p class="card-text">칼로리: ${data.hits[Number].recipe.calories.toFixed(1)} cal</p>
    <p class="card-text">탄수화물: ${data.hits[Number].recipe.totalNutrients.FAT.quantity.toFixed(1)} g</p>
    <p class="card-text">단백질: ${data.hits[Number].recipe.totalNutrients.PROCNT.quantity.toFixed(1)} g</p>
    <p class="card-text">지방: ${data.hits[Number].recipe.totalNutrients.FAT.quantity.toFixed(1)} g</p>
    <a href="${data.hits[Number].recipe.url}" class="btn btn-primary">레시피 보기</a>
  </div>
</div>`;
}

{
  /* <p class="card-text">1. ${data.hits[2].recipe.ingredientLines[0]}</p>
<p class="card-text">2. ${data.hits[2].recipe.ingredientLines[1]}</p>
<p class="card-text">3. ${data.hits[2].recipe.ingredientLines[2]}</p>
<p class="card-text">4. ${data.hits[2].recipe.ingredientLines[3]}</p> */
}
