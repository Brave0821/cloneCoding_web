const body = document.querySelector("html, body") /* 밑에 if문에 추가 window 대신 */
const link_a = document.querySelectorAll(".link a") /* a 여러개니까 all */
const bg = document.querySelectorAll(".bg")
const nav_a = document.querySelectorAll("nav a")
/* 마우스 커서 이벤트 */
const circle = document.querySelector(".circle")

link_a[0].classList.add("active") /* 첫번째 대상에 active */

bg.forEach((obj, idx)=>{
    /* console.log(obj.offsetTop) */
    console.log(bg[idx].offsetTop) /* index 방식이니까. */
}) /* 오브젝트, 인덱스  */

// 스크롤 했을 때 각 bg의 위치에 닿으면 link-a 색상이 변경되고 싶다.
//windowscreen event 스크롤 했을 때

window.addEventListener("scroll", ()=>{
    link_a.forEach((obj, idx)=>{
        console.log("foreach")
        if(body.scrollTop >= bg[idx].offsetTop-200){
            // console.log(bg[idx].offsetTop) 결과 보려면 아무거나
            console.log("if")
            // 함수 호출 
            link_a_remove()
            link_a[idx].classList.add("active")
        }
    })
})

/* 함수생성 */ /* ★ */
const link_a_remove = ()=>{
    for(let i of link_a){i.classList.remove("active")}
    // i.classList.remove("active")
    /* link_a[1].classList.remove("active")
    link_a[2].classList.remove("active")
    link_a[3].classList.remove("active") */
}

// nav-a 클릭 시 각 bg1~4 위치로 스크롤 이동 

nav_a.forEach((obj,idx)=>{
    obj.addEventListener("click", (e)=>{ /* e a태그에 정보가 담긴 것 event 약자에 e  */
        e.preventDefault() /* a ref 라는 속성이 동작 안되게 막아준다. */
        window.scrollTo(0, bg[idx].offsetTop)
    })
})
/* a ref 라는 속성이 동작 안되게 막아준다.
버튼이면 사용안해도 괜찮은데 a ref라서 어디로 가는지 모르니까 사용해준다.
*/

/* 마우스 커서 이벤트 */
window.addEventListener("mousemove",(e)=>{
    console.log(`성공 clientX = ${e.screenX}`)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})

const hide_a = document.querySelector(".hom_btn #btn")


hide_a.addEventListener("mouseover",()=>{
    circle.classList.add("design1")
})
hide_a.addEventListener("mouseout",()=>{
    circle.classList.remove("design1")
})


/* 
btn.forEach((t,i)=>{
    t.addEventListener("click",()=>{
        window.scrollTo(0, bg[i].offsetTop)
    })
})

*/

// bg의 위치에 닿으면 if면 offset 닿지않으면?도 있기에 
//link-a 색상이 변경되고 싶다 - > classList 


// a태그로 한 경우 

/* link_a.forEach((t,i)=>{
    t.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log(e)
        window.scrollTo(0, bg[i].offsetTop)
    })
})
 */
/* 클릭하는 t가 a  */
// 저장 관련해서 추가 