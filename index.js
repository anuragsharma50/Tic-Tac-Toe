let zero = true
let clicked = 0
// declaring an 2D array with all elements as null to MAP tic-tac-toe UI
let arr = [[null,null,null],[null,null,null],[null,null,null]]

document.querySelector("#container").addEventListener("click",(e) => {
    // fetching box id
    let id = e.target.id

    // if field is not blank don't change it - if id is not a number
    if(id%1 !== 0){
        return
    }

    // fetching correct row and column from id to add that to array
    let col = parseInt((id-1)/3)
    let row = (id-1)%3

    if(zero){
        // show hidden Zero
        document.getElementById("z"+id).style.display = "block"
        // add zero to array
        arr[col][row] = "O"
    } else{
        // show hidden X
        document.getElementById("c"+id).style.display = "block"
        // add X to array
        arr[col][row] = "X"
    }

    if(clicked >=4){
        if(checkWinner(zero,arr,col,row)){
            if(zero){
                document.getElementById("winner").innerText = "Team 1 Win"
            } else{
                document.getElementById("winner").innerText = "Team 2 Win"
            }
            document.getElementById("btn").style.visibility = "initial"
        }
    }
    
    clicked++
    zero = !zero
})

const checkWinner = (zero,arr,col,row) => {
    let symbol = zero?"O":"X"

    if(arr[col][0] == symbol && arr[col][1] == symbol && arr[col][2] == symbol || 
        arr[0][row] == symbol && arr[1][row] == symbol && arr[1][row] == symbol || 
        arr[0][0] == symbol && arr[1][1] == symbol && arr[2][2] == symbol ||
        arr[0][2] == symbol && arr[1][1] == symbol && arr[2][0] == symbol ) {
        return true
    } else{
        return false
    }
}

document.getElementById("btn").addEventListener("click",() => {
    document.getElementById("winner").innerText = "Player 1->O vs Player 2->X"
    arr = [[null,null,null],[null,null,null],[null,null,null]]
    zero = true
    clicked = 0
    
    for(let id=1;id<=9;id++){
        document.getElementById("z"+id).style.display = "none"
        document.getElementById("c"+id).style.display = "none"
    }
})