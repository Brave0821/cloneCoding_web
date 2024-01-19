/* login.js 수정을 위해 백업 파일 
24-01-19 

★ forEach 배워서 아이디 일회용번호 QR 로그인 나오는 것 수정해서 전에 사용하던거 before로 남겨둠 ★ 

*/


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

console.log("★ 로그인 메시지 출력 0117 ==============================================")


/* 
1. 아이디 로그인 시 틀린 정보 또는 입력되지 않은 정보에 따라 에러 메시지 출력하기
2. 아이디 미 입력 후(userid_input.value = "") 로그인 버튼 클릭 - > 아이디를 입력해주세요 출력
3. 아이디를 미 입력 후 비밀번호 미 입력하면 - > 비밀번호를 입력해주세요 출력 
4. 아이디, 비밀번호 입력 후 로그인버튼 클릭 후 정보 틀리면 - > 아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력하셨습니다. 입력하신 내용을 다시 확인해주세요 출력
5.아이디, 비밀번호 출력 시 정보가 맞으면 - > 로그인 성공 팝업 - > 어서오세요 00님    
*/

// 아이디 비밀번호 로그인 버튼 에러메시지 출력 변수 4개 

const userid_input = document.querySelector("#userId")
const userpw_input = document.querySelector("#userPw")
const userlogin_btn = document.querySelector("#loginBtn")
const error_message = document.querySelector(".error_message")



const user_list = [{
    id:"admin",
    pw:"1234"
}]

console.log(user_list)

userid_input.value = ""
console.log(userid_input.value) /* 콘솔에 a 넣은거 출력 */
console.log(userid_input.value) /* 콘솔에 a 넣은거 출력 */
/* 
if(userid_input.value == ""){    
    alert
}

else {
        error_message.innerHTML="비밀번호를 입력해주세요"
    }
 */
/* error_message.style.color = "red" */

userlogin_btn.addEventListener("click", function(){

    if(userid_input.value === ""){ // 아이디 빈 문자열 검사 -> 참이라면 
        error_message.innerHTML="※ 아이디를 입력해주세요." // 참일 때 실행
    } else if(userpw_input.value === "") {
        error_message.innerHTML="※ 비밀번호를 입력해주세요."

    // } else if(userid_input.value && userpw_input.value == user_list) {
    } else if(userid_input.value == user_list[0].id && userpw_input.value == user_list[0].pw) {
        window.alert(`어서오세요 ${user_list[0].id} 님`)
        /* error_message.innerHTML=" ※ 아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력하셨습니다.<br> 입력하신 내용을 다시 확인해주세요." */
    } else {
        error_message.innerHTML= ("※ 아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력하셨습니다.")
        userpw_input.value = "" /* 비밀번호 잘못 입력시 아이디만 남고 비밀번호 사라짐. */
    }

})

console.log("===========================================================================")
const number_input = document.querySelector("#number_input")
const num_login_btn = document.querySelector("#loginBtn_disposable")
const error_message_num = document.querySelector(".error_message_num") 

const user_num = [{
    num1:"1234",
    num2:"5678",
    num3:"9101112"
    /* num2 :"5678", */
}]
console.log(user_num)

num_login_btn.addEventListener("click", function () {
    console.log("성공?") // 버튼 먹음
    console.log(number_input.value)
    if (number_input.value === "") {
        error_message_num.innerHTML = "※ 번호를 입력해주세요."
    } else if (number_input.value === user_num[0].num1 || number_input.value === user_num[0].num2 || number_input.value === user_num[0].num3){
        window.alert(` ※ 로그인 성공`)
       /*  number_input.value = "" */
    } else {
        error_message_num.innerHTML = "※ 번호를 다시 확인해주세요"
    }
})

/* 일반적인 사이트는 아이디 비밀번호 둘 중 하나 입력 x - > 아이디 비밀번호 입력해주세요 - ? 뭘 입력안했는지 모름 - > 같이 나오게 개선*/


