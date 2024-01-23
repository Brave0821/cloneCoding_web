const bg = document.querySelectorAll(".bg")
// const link_a = document.querySelectorAll(".link a")
const btn = document.querySelectorAll(".hom_btn #btn")

btn.forEach((t,i)=>{
    t.addEventListener("click",()=>{
        window.scrollTo(0, bg[i].offsetTop)
    })
})

// a태그로 한 경우 
/* 
d 

*/


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