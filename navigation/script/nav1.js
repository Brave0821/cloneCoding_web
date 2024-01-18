const gnb = document.querySelectorAll(".gnb > li")
const lnb = document.querySelectorAll(".lnb")
const nav_bg = document.querySelector(".nav_bg") /* all 붙이면 안된다 하나이기떄문에 */
console.log(gnb, lnb)

/* 
for(let l of gnb){

} */

// 밖에 1번 안에 for문 3번 


console.log("==========================한번에 3개 나옴 시작=====================================")
nav_bg.style.height = 0;
nav_bg.style.transition = "height 0.3s" 

for(let l of lnb){
    l.style.height = "0";
    l.style.overflow="hidden"
    l.style.transition = "height 0.3s" /* 내려가는 즉 나오는 시간 */
} // lnb 전체 제어

// 1. .gnb > li 모두 접근하기 위한 for 생성 
for(let g of gnb){
    // 2. gnb에 마우스 이벤트 시 lnb를 모두 제어하고 싶다면 
    // lnb에 모두 접근하기 위한 for 추가 생성 
    for(let l of lnb){
        //3. 이벤트대상 확인 후 "g" 이벤트 함수 생성 (적용)
    g.addEventListener("mouseover", ()=>{
        // 4. 위 이벤트 조건이 만족되었을 때 lnb 모두 출력
        // 모두 출력하는 변수 대상 확인 "1" 관련 속성 적용
        l.style.height = "150px"
        nav_bg.style.height = "150px"
    })

    g.addEventListener("mouseout",()=>{
        l.style.height = "0" 
        nav_bg.style.height = "0"  
    })
}
}
console.log("==========================한번에 3개 나옴 끝=====================================")
console.log("==========================일반적인 메뉴=======================================")

/* for(let l of lnb){
    l.style.height = "0";
    l.style.overflow="hidden"
    l.style.transition = "height 0.3s"
}

// 1. 메뉴1 ~ 메뉴3 모두 제어하기 위한 반복 for문 생성
// 2. 2개 이상 한번에 제어하고 싶은 대상이 == gnb 단독 1개 
// 다중 for가 아닌 gnb에 해당하는 for 1개만 생성

for(let g of gnb){
    //2. 이벤트 대상을 확인 후 "g" 이벤트 함수 생성
    g.addEventListener("mouseover", ()=>{
        //3. 이벤트 조건 만족시 실행 대상이 이벤트대상의 상대적인 관계에 해당된다면 
        // 가족관계 속성을 활용해서 상대적으로 잡아 원하는 속성을 처리한다.
        // 가족관계 속성 : parentElement, parentNode , nextSibling, previousSibling, children, childrenNode  
        // g.children[1].style.height = "150px"
        g.children[1].style.display = "block"
    })

    // 한번에 제어하고자 하는게 gnb 하나이기에

    g.addEventListener("mouseout",()=>{
        // g.children[1].style.height = "0"
        g.children[1].style.display = "none"
        
    })
} */
console.log("==========================일반적인 메뉴=====================================")

// for(let g=0; g<1; g++){
    
    //     for(let l=0; l<3; l++){
        
        //     }
        // }
        
        /* for(let l of lnb){
            l.style.display= "none"
            
        }
        
        for(let g of gnb){ // gnb에 모두 접근해서 g에 모두 
            g.addEventListener("mouseover",()=>{
                g.children[1].style.display = "block"
            })
            
            g.addEventListener("mouseout",()=>{
                g.children[1].style.display = "none"
            })
        }
        */
