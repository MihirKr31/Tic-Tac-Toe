let cells = document.querySelectorAll(".cell");
let reset = document.querySelector("#reset");
let newGameButton = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnofO = true;

let winPattern = [
    [0,1,2],[0,3,6],[0,4,8],

    [1,4,7],[2,5,8],[2,4,6],

    [3,4,5],[6,7,8],
];

cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        if(turnofO)
        {
            cell.innerText="0";
            turnofO=false;
            
        }
        else{
            cell.innerText="X";
            turnofO=true;
        }
        cell.disabled=true;
        checkWinner();
    })
});
const showWinner = (winner) =>
{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableCells();

}
const checkWinner = () =>
{
    for(let pattern of winPattern)
    {
        
        let pos1val = cells[pattern[0]].innerText;
        let pos2val = cells[pattern[1]].innerText;
        let pos3val = cells[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val==pos2val && pos2val==pos3val)
            {
                console.log("Winner",pos1val); 
                showWinner(pos1val);
            }
        }
    }

}

const resetGame = ()=>
{
    turnofO=true;
    enableCells();
    msgContainer.classList.add("hide");

}

const disableCells = ()=>{
    for(let cell of cells)
    {
        cell.disabled=true;
    }
}

const enableCells = ()=>{
    for(let cell of cells)
    {
        cell.disabled=false;
        cell.innerText="";
    }
}

reset.addEventListener("click",resetGame)
newGameButton.addEventListener("click",resetGame)