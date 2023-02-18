const API_KEY = "K2JXT%2BMu8GnZMyjRfzlGwrMautCkMFKvkv3nxDvP4xpHeexU5hftpnTrmY9IQH%2BhZ4nOxkJEHy2m5TtS8fyamQ%3D%3D";
let menu = "크로아상";
let items_num = 0;

get_data();

async function get_data() {
  const url = `http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?ServiceKey=${API_KEY}&desc_kor=${menu}&numOfRows=20&type=json`;
  const response = await fetch(url);
  data = await response.json();
  console.log("data", data);
  api_data(data);
}
function api_data(data) {
  document.querySelector(".content").innerText = `
  음식이름 : ${data.body.items[items_num].DESC_KOR}
  탄수화물 : ${data.body.items[items_num].NUTR_CONT2}g
  단백질 : ${data.body.items[items_num].NUTR_CONT3}g
  지방 : ${data.body.items[items_num].NUTR_CONT4}g
  `;
}
