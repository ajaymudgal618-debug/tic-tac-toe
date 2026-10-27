let boxes = document.querySelectorAll(".cells");

let resetbtn = document.querySelector("#reset");

let win = document.querySelector("#win");

let turn0 = true;

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (turn0) {
            cell.innerHTML = "O";
            turn0 = false;
        }
        else {
            cell.innerHTML = "X";
            turn0 = true;
        }
        cell.disabled = true;

        checkwinner();
    });
});



checkwinner = () => {
    for (pattern of winpattern) {
        let first = boxes[pattern[0]].innerHTML;
        let second = boxes[pattern[1]].innerHTML;
        let third = boxes[pattern[2]].innerHTML;

        if (first != "" && second != "" && third != "") {
            if (first == second && second == third) {
                showwinner(first);
            }
        }
    }
}

showwinner = (winner) => {
    win.innerHTML = `congratulations ${winner} is the winner`;
    win.hidden = false;
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

resetbtn.addEventListener("click", () => {
    turn0 = true;
    boxes.forEach((cell) => {
        cell.innerHTML = "";
        cell.disabled = false;
    });
    win.hidden = true;
});
