let playerLeft = $('.playerLeft');

// 選手移動
// $(function(){
//     $(".playerLeft, .playerRight").draggable({ containment: "#img", scroll: false });
// });

// 畫面鎖定
// if ($(document).height() > $(window).height()) {
//     $("html").addClass("noscroll");
// }else{
//     $("html").addClass("fixWindow"); 
// }

let posAryLeft = [
    {
        top: "66%",
        left: "13%"
    },{
        top: "66%",
        left: "36%"
    },{
        top: "42%",
        left: "36%"
    },{
        top: "18%",
        left: "36%"
    },{
        top: "18%",
        left: "13%"
    },{
        top: "42%",
        left: "13%"
    }
]



let changeAryLeft = posAryLeft.map(x => x);
setPosLeft(posAryLeft);



$('#nextBtnLeft').on('click', () => {
    nextLeft();
})
$('#prevBtnLeft').on('click', () => {
    prevLeft();
})


// Left
function setPosLeft(pos) {
    for (let i = 0; i < playerLeft.length; i ++) {
        playerLeft.eq(i).css(pos[i]);
    }
}   

function nextLeft() {
    let next = changeAryLeft.pop();
    changeAryLeft.unshift(next);
    setPosLeft(changeAryLeft);
}

function prevLeft(){
    let prevPop = changeAryLeft.shift();
    changeAryLeft.push(prevPop);
    setPosLeft(changeAryLeft);
}



