let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let model = document.querySelector(".model");
let winner = document.querySelector("#winner");
let turn0 = true;

let winPatteren = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner()
    })
})


function checkWinner() {
    for (let pattern of winPatteren) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                model.style.display = "flex";
                winner.innerText = pos1Val;
            }
        }
    }
}


model.addEventListener("click", () => {
    model.style.display = "none";
    boxes.forEach((box) => {
        box.innerText = ""
        box.disabled = false;
        turn0 = true
    })

})

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""
        box.disabled = false;
        turn0 = true
    })
})