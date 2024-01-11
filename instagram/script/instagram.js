// /* const hart */
//like_off.png 클릭 시 src 속성값을 like_on.png 변경하기 

const like = document.querySelectorAll(".hart")
const comment = document.querySelectorAll(".comment")
const send = document.querySelectorAll(".send")

/* console.log(like) */
// like.src = `./images/like_on.png`
// like.src = `./images/like_off.png`
// like.src = `./images/comment_on.png`
// like.src = `./images/comment_off.png`

/* function onOff(name, status) {
    return `./images/${name}_${status}.png`
} */
/* 굳이 뺀 이유는 재사용하기 x 를 위해서   
    재사용하는 데이터를 줄이기 위해서 사용
    함수사용 이유 */

like[0].addEventListener("click", function () {
    /*   like.src = `./images/like_on.png` */
    console.log(like[0])
    console.log(like[0].children)
    console.log(like[0].children[0])
    console.log(like[0].children[0].src)
    onOff_v2(this, "like", "on")
    /*     document.querySelector(".hart").src = "./images/like_on.png" */
    // like[0].children[0].src = onOff("like", "on")
    // // like 여기랑 .children[0].src = 이쪽만 달라진다. onOff("like", "on")
    // onOff_v2(this, "like", "on");
      /* `./images/${target}_${name}_${status}.png` */ 
});

function onOff_v2(target, name, status) {
    return target.children[0].src = `./images/${name}_${status}.png`
}

// this 현재 이벤트 대상 객체 키워드 (이벤트종류 , function(){이벤트 함수 내에서 사용할 때})
like[1].addEventListener("click", function () {
    onOff_v2(this, "like", "on")
});

comment[0].addEventListener("click", function () {
    onOff_v2(this, "comment", "on")
});

send[0].addEventListener("click", function () {
    onOff_v2(this, "paper", "on")
});

/* 
const comment = document.querySelector(".comment")
const send = document.querySelector(".send") */

console.log("-------------------------------------------------------------")