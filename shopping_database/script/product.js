/* 
    컨테이너(아이템 수백개 보이는 부모영역 ) 안에서 item(개별아이템)요소들을 data.js(DB)에서 가져온다.
    DB - > <p class="photo"><img src="" alt=""></p>
    DB - > <h2></h2>
    DB - > <p class="price"></p>

    DB 데이터를 가져오기 위해 필요한 요소 = div, p, h2, p

    디자인 또는 동적 기능을 적용하기 위한 클래스 선언 필요 = item, photo, price
*/
const container = document.querySelector(".container") // 아이템의 부모 선언 
let itemWrap = document.createElement("div") // 10번 for문 
let itemPhoto = document.createElement("p")
let itemTitle = document.createElement("h2")
let itemPrice = document.createElement("p")
console.log(container)

for(let i=0; i<=itemDB.length; i++){ // DB 10개 수를 기준으로 
    itemWrap = document.createElement("div")
    itemWrap.classList.add("item")
    
    itemPhoto = document.createElement("p")
    itemPhoto.classList.add("photo") 
    // itemPhoto.innerHTML = '<img src="" alt"">'
    // itemPhoto.innerHTML = '<img src="" alt"">'

    itemTitle = document.createElement("h2")
  /*   itemTitle.classList.add("h2") */
    itemTitle.innerHTML= itemDB[i].itemTitle
    itemPrice.innerHTML= itemDB[i].itemPrice

    // itemPhoto.innerHTML= itemDB[i].itemImg
    itemPhoto.innerHTML= `<img src=${itemDB[i].itemImg} alt="">`
    

    itemPrice = document.createElement("p")
    itemPrice.classList.add("price")


    itemWrap.appendChild(itemPhoto)
    itemWrap.appendChild(itemTitle)
    itemWrap.appendChild(itemPrice)
    container.appendChild(itemWrap)
}

