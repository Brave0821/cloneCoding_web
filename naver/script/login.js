// 로그인 탭 제목 클릭 시 해당 내용 활성화 js
//0. (초기) 로그인내용0, 일회용 내용 x , qr코드내용 x id로그인 제목 활성화 (css)
//1. id 로그인을 클릭하면 로그인 내용 o 일회용 내용 x qr코드내용 x 
//2. 일회용을 클릭하면 로그인 내용 x, 일회용 내용 o , qr코드내용x 
//3. qr코드 클릭하면 로그인내용 x, 일회용 내용 x, qr코드내용 o

// 제목 3개 내용 3개 

/* const login_title = document.querySelectorAll(".login_title h2 > a") */  /* 선택하는 탭  밑으로 내림 */

/* const login_title_id= document.querySelectorAll(".login_title h2 > a") */ 
// 내용 변수 
/* ★개별 변수 삭제 이유는 밑에 통합 변수를 생성했고 이제 쓰이는 곳이 없기에 주석으로 남겨둠  */
// const id_login_container = document.querySelector(".login_container .id_login") /* id로그인 내용 */
// const disposable_login_container = document.querySelector(".login_container .disposable_login") /* 일회용번호 내용*/
// const qr_login_container = document.querySelector(".login_container .qr_login") /* qr코드 내용*/
// console.log(login_title)
// console.log(id_login_container)
// console.log(disposable_login_container)
// console.log(qr_login_container)


// const id_login_container = () => {for(let h of id_login_containe){id_login_containe.style.display="none"}}
// id_login_container()

// 내가 시도한 곳 

// const login_title_hide = () => {for(let h of login_title){login_title.classList.remove="active"}} /* 클릭 전이 active */
// login_title_hide()
// const login_c = () =>{for (let c of login_c){login_c.style.display="block"}}
// login_c()

// login_c.forEach((t,i)=>{
//     t.addEventListener("click", ()=>{
//         login_title_hide()
//         login_c[i].style.display = "block"
//     })
// })


console.log("++++++++++++++++++++++++++++++-forEach시작-+++++++++++++++++++++++++++++++++++")
// 제목을 눌렀을 때 그 제목에 해당하는 것 만 내용이 나와야하고 
// 제목을 누르면 내용이 원하는 것만 나오려면 그 이전에 숨기기는게 필요함 내가 누른 것만 디자인이 들어가려면 
// 모든 디자인을 풀어두는게 우선임 
// 내가 잡은 변수가 2개 이상을 잡는 건가 ? 

const login_title = document.querySelectorAll(".login_title h2 > a")

// 통합 내용 변수 생성 로그인 컨텐츠용 - > 개별 변수 생성한거 삭제.
const login_c_all = document.querySelectorAll(".login_container .login_c")
console.log(login_title)

// 모든내용 숨기기 - > id로그인만 보이기 (초기)
const login_c_all_func = () => {
    for(let cc of login_c_all){cc.style.display="none"}}
login_c_all_func()
login_c_all[0].style.display="block"

// 초기값 id로그인 활성화 시키기 active 클릭 전!
login_title[0].parentElement.classList.add("active")

/* 초기 탭 제목 디자인 숨기기 */
const title_active_remove = () => {
    for(let rr of login_title){rr.parentElement.classList.remove("active")}}

/* 탭 제목 클릭 시 클릭한 대상에만 디자인 적용하기 */
login_title.forEach((t,i)=>{ /* t i는 클릭한 대상 클랙한 애만 초기화가 이닌 전부 초기화 시키는 for문 필요 */
    console.log(t,i)
    t.addEventListener("click", ()=> {
        title_active_remove() /* 위에 함수 호출 */
        t.parentElement.classList.add("active") /* 누른애만 액티브가 들어가기 전  */
        login_c_all_func()
        login_c_all[i].style.display="block" 
        // 로그인 타이틀 인덱스와 일치 
        /* 누르는애랑 나오는애가 달라서 2개를 연결해야하는데 html에선 연결하는 부모가 달라서 
        동일한 index로 연결해서 로그인타이틀 1 인덱스를 누르면 로그인 1 눌려라
        
        로그인 타이틀에 마지막 인덱스에 접근하고 싶으면 - > i 인덱스 사용 안해도 전부 접근할 수 있기에
        특정 인덱스에 접근하고 싶으면 
        
        forEach는 타이틀에 접근 
        */
    })
})
console.log("+++++++++++++++++++++++++++forEach 끝++++++++++++++++++++++++++++++++++++++")

//login_c 전부를 묶는 변수 컨테이너들을 묶는 변수 
// login_title[0].parentElement.classList.add("active")
// id_login_container.style.display = "none"
// disposable_login_container.style.display = "none"
// qr_login_container.style.display = "none"

// login_title.forEach((t,i)=> {
//     login_title.addEventListener("click", ()=>{
//         login_title_hide()

//     })
// })





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


