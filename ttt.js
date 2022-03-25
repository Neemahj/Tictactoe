const cells = Array.from(document.querySelectorAll(".grid-item"))
const selector = document.querySelector(".button")
const player_x = document.querySelector(".player_one")
const player_o = document.querySelector(".player_two")
const resets = document.querySelector(".reset")

    current_player = player_x.innerText 


resets.addEventListener('click', () => {
    cells.forEach(cell => cell.innerText = "")
})



const winning_conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

function checkwin(){
    winning_conditions.forEach(wins=>{
        let check = wins.every(indexOf => cells[indexOf].innerText.trim()==current_player)

        if(check){
            alert("player "+ current_player + " won")
            return true
        }

    })

    return false
}

function checkDraw(){
    for(i in cells){
        if(cells[i].innerText === ""){
            return false
        }
    }
    alert("DRAW!!")
    return true
}

cells.forEach(cell =>{
    cell.addEventListener('click',function(){

        if(cell.innerText.trim() != ""){
            return 
        }
        cell.innerText = current_player

        if(!checkwin()){
            checkDraw()
        }

        current_player = current_player === player_x.innerText ?  player_o.innerText :  player_x.innerText;

    })
})