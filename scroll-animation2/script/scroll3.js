const txt = document.querySelector(".txt")
console.log(txt) // div.txt
console.log(txt.children) // h1
// const info1 = document.querySelector(".info1")
// const info2 = document.querySelector(".info2")
const info = document.querySelectorAll(".info")

window.addEventListener("scroll",()=>{
    if(txt.getBoundingClientRect().top <= 400){
        txt.children[0].style.animation = "opacity_scale 1s both"
    }
})

// window.addEventListener("scroll", ()=>{
//     if(info1.getBoundingClientRect().top <= 400){
//         info1.children[0].style.animation ="translate1 1s both "
//     }
// })
// window.addEventListener("scroll", ()=>{
//     if(info2.getBoundingClientRect().top <= 400){
//         info2.children[0].style.animation = "translate2 1s both"
//     }
// })

window.addEventListener("scroll", ()=>{
    if(info[0].getBoundingClientRect().top <= 400){
        info[0].children[0].style.animation ="translate1 1s both "
    }
})

window.addEventListener("scroll", ()=>{
    if(info[1].getBoundingClientRect().top <= 400){
        info[1].children[0].style.animation ="translate2 1s both "
    }
})


// 스크롤 이벤트를 이용한 등장 애니메이션 제작 시 if 조건 대상은 실제 애니메이션 적용 대상이 아닌 그 대상을 묶고 있는 가까운 부모 그룹으로 처리하는게 좋다.
//h1에 등장이펙트를 주고 싶다면 h1이 보일 때 h1에 넣어라가 아닌 부모.txt가 뷰포트 영역에 등장할 때 자식 h1에 이팩트를 넣어라.와 같이 ~!