let playerRight = $('.playerRight')

// 選手移動
$(function(){
    $(".playerLeft, .playerRight").draggable({ containment: "#img", scroll: false });
});


let posAryRight = [
    {
        top: "18%",
        left: "80%"
    },{
        top: "18%",
        left: "57%"
    },{
        top: "42%",
        left: "57%"
    },{
        top: "66%",
        left: "57%"
    },{
        top: "66%",
        left: "80%"
    },{
        top: "42%",
        left: "80%"
    }
]


let changeAryRight = posAryRight.map(x => x);
setPosRight(posAryRight);


$('#nextBtnRight').on('click', () => {
    nextRight();
})

$('#prevBtnRight').on('click', () => {
    prevRight();
})


// Right
function setPosRight(pos) {
    for (let i = 0; i < playerRight.length; i ++) {
        playerRight.eq(i).css(pos[i]);
    }
}

function nextRight() {
    let next = changeAryRight.pop();
    changeAryRight.unshift(next);
    setPosRight(changeAryRight);
}

function prevRight(){
    let prev = changeAryRight.shift();
    changeAryRight.push(prev);
    setPosRight(changeAryRight);
}

