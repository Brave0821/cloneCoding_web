// 로그인 탭 제목 클릭 시 해당 내용 활성화 js
//0. (초기) 로그인내용0, 일회용 내용 x , qr코드내용 x id로그인 제목 활성화 (css)
//1. id 로그인을 클릭하면 로그인 내용 o 일회용 내용 x qr코드내용 x 
//2. 일회용을 클릭하면 로그인 내용 x, 일회용 내용 o , qr코드내용x 
//3. qr코드 클릭하면 로그인내용 x, 일회용 내용 x, qr코드내용 o

// 제목 3개 내용 3개 

const login_title = document.querySelectorAll(".login_title h2 > a")
/* const login_title_id= document.querySelectorAll(".login_title h2 > a") */
// 내용 변수 
const id_login_container = document.querySelector(".login_container .id_login")
const disposable_login_container = document.querySelector(".login_container .disposable_login")
const qr_login_container = document.querySelector(".login_container .qr_login")
console.log(login_title)
console.log(id_login_container)
console.log(disposable_login_container)
console.log(qr_login_container)




//초기 일회용  qr내용 숨기기
disposable_login_container.style.display = "none"
qr_login_container.style.display = "none"

// 초기값 아이디 로그인 활성화 시키기 active 클래스 활성화  *클릭 전 
login_title[0].parentElement.classList.add("active")




// 일회용 번호 클릭하면 로그인 내용 x 일회용 내용 o qr내용 x

login_title[1].addEventListener("click", function () {
    id_login_container.style.display = "none"
    disposable_login_container.style.display = "block"
    qr_login_container.style.display = "none"
    login_title[1].parentElement.classList.add("active");
    login_title[0].parentElement.classList.remove("active");
    login_title[2].parentElement.classList.remove("active");
})

// id 로그인을 클릭하면 로그인 내용 o 일회용 용 x qr코드내용 x 

login_title[0].addEventListener("click", function () {

    id_login_container.style.display = "block"
    disposable_login_container.style.display = "none"
    qr_login_container.style.display = "none"
    login_title[0].parentElement.classList.add("active");
    login_title[1].parentElement.classList.remove("active");
    login_title[2].parentElement.classList.remove("active");

})

// qr코드 클릭하면 로그인내용 x, 일회용 내용 x, qr코드내용 o

login_title[2].addEventListener("click", function () {
    id_login_container.style.display = "none"
    disposable_login_container.style.display = "none"
    qr_login_container.style.display = "block"
    login_title[2].parentElement.classList.add("active")
    login_title[0].parentElement.classList.remove("active")
    login_title[1].parentElement.classList.remove("active")
})

/* 탭 3개 누를 시 메뉴 나오는 것 까지 작업 0115 */