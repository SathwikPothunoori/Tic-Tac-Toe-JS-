const layout = document.getElementById('layout')

let player1='O';
let player2='X';
let isOver =false;
let curPlayer = player1;
window.onload = function(){
    setGame();
}
let board =[['','',''],['','',''],['','','']]

function setGame(){
    board =[['','',''],['','',''],['','','']]
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let cell=  document.createElement('div')

          let id = i.toString()+'-'+j.toString()
          cell.id =id
          cell.classList.add('cell')
          if(i==0 || i==1){
            cell.classList.add('rh-cell')
          }
          if(j==0 || j==1){
            cell.classList.add('vh-cell')
          }
          cell.addEventListener('click' ,markCell)
          layout.appendChild(cell)

        }
        
    }
}
function markCell(){
    if(isOver){

        return;

    }
    console.log(this.id.toString())
    let position =this.id.split('-')
    let row = parseInt(position[0]) 
    let coloumn =parseInt(position[1])   
    if(board[row][coloumn]!=''){
        return;
    }
    board[row][coloumn]=curPlayer
    console.log(board)
    this.innerHTML = curPlayer
    checkWinner()
    if(checkBoardFilled()){
        setTimeout(()=>{ alert("Thats a tie 😒")} ,500)
            setTimeout(()=>{ location.reload()} ,500)
            return;
    }
    if(curPlayer==player1){
        curPlayer=player2
    }
    else{
        curPlayer=player1
    }
    
}
function checkBoardFilled(){
    for(let i=0;i<3;i++){    
        for(let j=0;j<3;j++){
            if(board[i][j]==''){
                return false;
            }
        }
   }

   return true;
   
}
function checkWinner(){
    //daignolz
    if(board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[0][0]!=''){
        isOver=true; 
        for(let j=0;j<3;j++){
             let winCell =document.getElementById(j.toString()+'-'+j.toString())
             winCell.classList.add('win')
        }
        setTimeout(()=>{ alert(`${curPlayer=='O'? 'X' :'O'} has won the game`)} ,500)
        setTimeout(()=>{ location.reload()} ,500)
            return;
    }
     //cross daignolz
     if(board[0][2]==board[1][1] && board[1][1]==board[2][0] && board[0][2]!=''){
        isOver=true; 
        let count=0
        for(let j=2;j>=0;j--){
             let winCell =document.getElementById(count+'-'+j.toString())
             count+=1
             winCell.classList.add('win')
        }
        setTimeout(()=>{ alert(`${curPlayer=='O'? 'X' :'O'} has won the game`)} ,500)
        setTimeout(()=>{ location.reload()} ,500)
            return;
    }
    //checking rows
    for(let i=0;i<3;i++){
        if(board[i][0]==board[i][1] && board[i][1]==board[i][2] && board[i][0]!=''){
            isOver=true; 
            for(let j=0;j<3;j++){
                 let winCell =document.getElementById(i.toString()+'-'+j.toString())
                 winCell.classList.add('win')
            }
            setTimeout(()=>{ alert(`${curPlayer=='O'? 'X' :'O'} has won the game`)} ,500)
            setTimeout(()=>{ location.reload()} ,500)
            return;
        }
    }
    //check coloumns
    for(let i=0;i<3;i++){
        if(board[0][i]==board[1][i] && board[1][i]==board[2][i] && board[0][i]!=''){
            isOver=true; 
            for(let j=0;j<3;j++){
                 let winCell =document.getElementById(j.toString()+'-'+i.toString())
                 winCell.classList.add('win')
            }
            setTimeout(()=>{ alert(`${curPlayer=='O'? 'X' :'O'} has won the game`)} ,500)
            setTimeout(()=>{ location.reload()} ,500)
            return;
        }
    }
    
}


