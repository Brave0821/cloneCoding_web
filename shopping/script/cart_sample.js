// remove.js 참고
// 왼쪽 썸네일 이미지 js 
/* 
스몰 썸네일 a에 올렸을 때 big 썸네일 이미지 경로가 바뀜?
1. small_thumnail -  마우스를 올리면 ex small2에 마우스를 올렸다면 
2. big_thumnail - img (src) 값이 변경된다. ex big1 이 big2 이미지 변경
*/
const item_detail = document.querySelector(".item_detail")
const small_img = item_detail.querySelectorAll(".small_thumnail a")
const big_img = item_detail.querySelector(".big_thumnail img")
console.log(item_detail, small_img, big_img); /* 성공 */

small_img[0].addEventListener("mouseover", function () {
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src = "./dog_images/small1.jpg"
})
small_img[1].addEventListener("mouseover", function () {
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src = "./dog_images/small2.jpg"
})

small_img[2].addEventListener("mouseover", function () {
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src = "./dog_images/small1.jpg"
})

small_img[3].addEventListener("mouseover", function () {
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src = "./dog_images/small2.jpg"
})

small_img[4].addEventListener("mouseover", function () {
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src = "./dog_images/small1.jpg"
})

small_img[5].addEventListener("mouseover", function () {
    // big_img - > small_img  변하는 식을 쓰면 되는데..
    big_img.src = "./dog_images/small2.jpg"
})

console.log("-----------------------------------------")
// 가격 할인 정보 클릭 시 나오는 정보 팝업
/* 
1. 팝업을 숨긴다.
2. i 클릭하면 팝업 보이기 
*/

const price_info = document.querySelector(".price i[class$=info]")
const price_info_open = document.querySelector(".price .open")
console.log(price_info, price_info_open)

price_info_open.style.display = 'none';

price_info.addEventListener("click", function () {
    price_info_open.style.display = 'block';
});

//
console.log("-----------------------------------------")

// 내일 출발 i 클릭 시 팝업 출력하고 팝업 내 x 클릭 시 팝업 닫히기 JS 
/* 
1. 팝업 숨기기 
2. i 클릭시 팝업 출력 
3. x 클릭 시 팝업 닫히기 
*/
const info = item_detail.querySelector(".benefit_shipping i[class$=info]")
const popup = item_detail.querySelector(".benefit_shipping .open")
const close = popup.querySelector(".close")

console.log(info, popup, close)

popup.style.display = "none";

info.addEventListener("click", function () {
    popup.style.display = "block"
})

close.addEventListener("click", function () {
    popup.style.display = "none";
})

/* ---------------------------------------------------------------------- */
console.log("--------------------------숙제------------------------------------")

/* <!-- # 오늘의 집 배송 정보 보기 cart_sample.js 이어서-

목표) 배송 1/9 (화) 도착 예정 94% 메뉴를 클릭하면 메뉴 펼침 정보 나타나기

1. 펼침 메뉴 초기 숨기기
2. 배송1/9(화) 도착 예정 94% 메뉴 클릭 시 
3. 위(2)의 둥근 모서리 하단 모양 뾰족하게 변경
4. 위(2)의 94% 옆 화살표 상하 반전 하기
5. 메뉴 펼침 정보 보이기 --> */

// <i class="fa-solid fa-chevron-down"></i>

const delivery_menu_arrow = item_detail.querySelector(".benefit_shipping i[class$=down]")
console.log(delivery_menu_arrow)
/* delivery_menu_open  */
const menu_open = item_detail.querySelector(".benefit_shipping .delivery_menu_open")
console.log(menu_open)
const delivery_menu  = item_detail.querySelector(".benefit_shipping .delivery_menu")
console.log(delivery_menu )

// const down_up = item_detail.querySelector(".benefit_shipping i[class$=down]")
// console.log(down_up)
// const down_close = item_detail.querySelector(".benefit_shipping i[class$=down]")

menu_open.style.display = "none"; 
//메뉴 숨김.

delivery_menu_arrow.addEventListener("click", function () {
    menu_open.style.display = "block";
})

// https://www.techiedelight.com/ko/remove-inline-css-properties-javascript/
// 보더 값 빼기

let delivery_menu_open_status = false // 현재 상태 변수 (false==숨김)

delivery_menu.addEventListener("click", function(){
    if(delivery_menu_open_status == false){
        console.log(delivery_menu_open_status) //open
        delivery_menu.style = "boder-bottom-left-radius:0; boder-bottom-right-radius:0;"
        delivery_menu_arrow.style.transform= `scaleY(-1)`;
        menu_open.style.display = 'flex'
        delivery_menu_open_status = !delivery_menu_open_status
    } else{
        console.log(delivery_menu_open_status) // close
        delivery_menu.style = "boder-bottom-left-radius:0; boder-bottom-right-radius:0;"
        delivery_menu_arrow.style.transform= `scaleY(1)`;
        menu_open.style.display = 'none'
        delivery_menu_open_status = !delivery_menu_open_status
    } //0112 delivery_menu
})

/* menu.addEventListener("click", function () {
    menu_open.style = "boder-bottom-left-radius:0; boder-bottom-right-radius:0;"
    down.style.transform = `scaleY(-1)`;
}) */

// down.addEventListener("click", function(){
//     down_up.style.transform = "rotate(50px)"
// });

// down.addEventListener("click", function(){
//     menu_open.style.display = "none";
// })


/*  transform: scaleY(-1); transition: .3s;  */
// down.addEventListener("click", function(){
//     down_up.style({transform : ["scaleY(-1)",
//     "transition(.3s)"
// ]})
// })

/*  menu.addEventListener("click", function(){
    menu_open.style.borderRadius = ("0px 0px 30px 0px"); 
})
 */

// menu.addEventListener("click", function(){
//     menu.style.display = "none";
// })


// down_close.addEventListener("click", function(){
//     menu.style.display = "none";
// })

// 상품 색상, 사이즈 옵션을 선택했을 때 선택 정보가 selectResult에 결과 값으로 출력되고 num_result의 구매수량에 따라 order_price에 가격이 출력되는 결과

// 상품 색상, 사이즈 옵션을 선택했을때 변수 생성 

/* 

색상 colorOpt 을 클릭하면 option이 나온다.(1)
색상 colorOpt 을 클릭 안하면 사이즈 sizeOpt에 option이 안보인다. 

사이즈 sizeOpt 을 클릭하고 사이즈를 선택하면 num_result 가 열린다.(1)
num_result에 plus를 선택하면 옆에 price 가격이 올라간다.


원래 본 페이지는 select가 각각 존재한다. 색깔 별 등등 

상세 절차 : 상품 색상, 사이즈 옵션을 선택했을 때 
1. 색상(옵션1) 선택 전 사이즈(옵션2) 비활성화 
2. 옵션1 선택 시옵션 2 활성화
2-1 옵션1에 때한 옵션 데이터에 따라 옵션2의 각 다른 셀럭트 활성화  


/* (".benefit_shipping i[class$=down]") */

console.log("----------------------------------------------------")
const colorOpt = document.querySelector("#colorOpt")
const sizeOpt = document.querySelector("#sizeOpt")
/* const num_result = document.querySelector(".num_result") */ /* me */
/* const select_result = document.querySelector(".selectresult") */ /* me */
/* console.log(colorOpt,sizeOpt,num_result,select_result); */
console.log(colorOpt.options[1].value);
console.log(colorOpt.options[1].value.text);
/* select_result.style.display = "none"; */
sizeOpt.disabled= true; // 0112 추가

console.log("---------------------!!!---------------------------")
const opt1 = document.createElement("span")
const opt2 = document.createElement("span")
console.log(opt1, opt2);
const result_view = document.querySelectorAll(".selectResult > span > span[class^=opt]")
console.log(result_view);
const select_result = document.querySelector(".selectResult")
let num = 1;
let price = 36900;
const num_view = select_result.querySelector("#num_count");
console.log("---------------------!!!!!!!!---------------------------")
console.log(num_view)
const price_view = select_result.querySelector(".order_price");
const price_total_view = document.querySelector("fieldset:nth-child(2) .order_price")
console.log("---------------------!!!---------------------------")
const num_count = document.querySelector("num_count")
console.log(num_count)
let order_price = document.querySelector(".order_price")
console.log(order_price)

select_result.style.display = "none";
/* select_result.style.display = "none"; */ /* me */
//colorOpt, sizeOpt text 데이터를 모두 변수로 수집 후 
// createElement, appendChild 를 이용해서 opt1 2 선택 데이터 출력하기

colorOpt.addEventListener("change", function () {
    console.log(colorOpt.value)
    console.log(colorOpt.options[colorOpt.selectedIndex].text)
    opt1.innerHTML = colorOpt.options[colorOpt.selectedIndex].text
    console.log(opt1)

    sizeOpt.disabled = false; //0112 추가
})

sizeOpt.addEventListener("change", function () {
    // 선택옵션 데이터 저장하기
    console.log(sizeOpt.options[sizeOpt.selectedIndex].text)
    opt2.innerHTML = sizeOpt.options[sizeOpt.selectedIndex].text
    console.log(opt2)
    // 선택 옵션 부모 보이기
    select_result.style.display = "grid";
    selectResult_status = true //0112 추가
    // 선택옵션 적용 대상에 위 옵션 데이터 값 출력하기
    result_view[0].appendChild(opt1)
    result_view[1].appendChild(opt2)
    //선택 옵션의 수량(num) 출력하기
    num_view.value = num;
    // 선택 옵션의 가격(price) 출력하기
    price_view.innerHTML = price.toLocaleString("ko-kr") + "원"
    price_total_view.innerHTML = price.toLocaleString("ko-kr") + "원"
})

// 사이즈 안에 옵션 클릭 시 밑에 나와야하는데?
console.log("-----------------밑에 오류-------------------------")
const resultClose = select_result.querySelector(".close");

resultClose.addEventListener("click", function () {
    resultClose.parentElement.style.display = "none";
    selectResult_status = false // 0112 추가 selectResult_status = false
})

console.log("=======================1월12일 +-추가 화살표 함수로 바꿈==============================")

let plus_btn = document.querySelector("#plus")
console.log(plus_btn)
let minus_btn = document.querySelector("#minus")
console.log(minus_btn)
let total = 0;
///////////////////////////////////////////////////////

// 최소 구매수량1 최대 구매 수량7 
// 최소 구매 수량입니다.
// 재고 7개로 더 구매할 수 없습니다.
// 0112일 +- 추가
plus_btn.addEventListener("click", () => {
    if (num < 7) {
        /* num += 1; */
        num++;
        // 수량 1 증가 
        // 수량 1 증가한 값 표시 
        num_view.value = num;
        total = num * price;
        // 3. 구매가 세자리 콤마 표시 
        price_view.innerHTML = total.toLocaleString("ko-kr") + "원"
        price_total_view.innerHTML = total.toLocaleString("ko-kr") + "원"
    } else{
        alert("최대구매 수량입니다. 재고7개로 더 구매할 수 없습니다.")
    }
    
    /* if (num == 7) {
        alert("최대구매 수량입니다. 재고7개로 더 구매할 수 없습니다.")
    } */
})


minus_btn.addEventListener("click", () => {
    if (num > 1) {
        /* num -= 1; */
        num --;
        num_view.value = num;
        total = num * price;
        price_view.innerHTML = total.toLocaleString("ko-kr") + "원"
        price_total_view.innerHTML = total.toLocaleString("ko-kr") + "원"
    } else {
        alert("최소구매수량입니다.")
    }
    
    /*     if (num == 1) {
        alert("최소구매수량입니다.")
    } */
})

console.log("=======================1월12일 +-추가 화살표 함수로 바꿈==============================")

//selectResult 안 x 클릭 시 x의 부모 (selectResult)를 dom 관계로 선택해서 숨기기


/* sizeOpt.addEventListener("click", function(){
    select_result.style.display = "block";
}) *//* me */

/*
menu_open.style.display = "none";
menu_open.style.display = "block"; */

// 수량 -, + 버튼 클릭 시 수량값이 변경되며 그에 따라 가격 변동

/* const num_count = document.querySelector("num_count")
console.log(num_count)
let plus_btn = document.querySelector("#plus")
console.log(plus_btn)
let minus_btn = document.querySelector("#minus")
console.log(minus_btn)
 */

console.log("=================================================================")
/*  ★★ 필요한 태그모음
<button type="button" id="cart">장바구니</button>
<button type="button" id="buy">바로구매</button>

<span class="selectResult"> (나오는 창)

<select name="colorOpt" id="colorOpt">
    <option value="">색상</option>
    <option value="1">아몬드(36,900원)</option>
</select>
<select name="sizeOpt" id="sizeOpt">
    <option value="">사이즈</option>
    <option value="1">S(36,900원)</option>
</select>
*/

const buy = document.querySelector("#buy")
const cart = document.querySelector("#cart")
let selectResult_status = false

cart.addEventListener("click",function(){
    if(selectResult_status == false){ // 선택 부모 옵션 보이기 selectResult_status에 true
        alert("상품 옵션을 선택해주세요")
    } else {
        alert("장바구니에 상품이 담겼습니다.")
    } // 0112
})
/* 
const colorOpt = document.querySelector("#colorOpt")
const sizeOpt = document.querySelector("#sizeOpt")
*/
/* const selectResult =document.querySelector(".selectResult") // 나오는 리스트
console.log(selectResult)
const cartBtn = document.querySelector("#cart") */


// 옵션을 선택해 주세요
//option 선택으로 selectResult_status ==> true
// 장바구니에 상품이 담겼습니다.

/* if(){
    console.log("")
    //selectResult.style.display==none
}
*/
console.log("================================================================")
