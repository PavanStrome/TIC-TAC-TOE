let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebtn = document.querySelector("#New-btn");
let msg  = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");
let turno = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
 const resetgame = () => {
  
  turno = true;
  enableboxes();
  msgcontainer.classList.add("hide");
 }
 
const checkwinner = () => {
  for(let patterns of winpatterns){
    let post1  = boxes[patterns[0]].innerText;
    let post2  = boxes[patterns[1]].innerText;
    let post3  = boxes[patterns[2]].innerText;
    if(post1 != "" && post2 != "" && post3 != "" ){
      if(post1 == post2 && post2 == post3 && post3 == post1 ){
        for(let box of boxes){
          box.disable = true;
        }
        msg.innerText = `congratulations the winner is ${post1}`;
        msgcontainer.classList.remove("hide");
      }
    }
  }
}

boxes.forEach((box) => {
   box.addEventListener( "click", () => {
     if(turno){
      box.innerText = "X";
      turno = false;
      box.disabled = true;
     }else{
      box.innerText = "O";
      turno = true;
      box.disabled = true;
      
     }
     checkwinner();
   });
});

 const enableboxes = () => {
  for(let box of boxes ){
    box.disable = false;
    box.innerText = "";
  }
 }

resetbtn.addEventListener("click",() => {
  resetgame();
});

newgamebtn.addEventListener("click", () => {
  resetgame();
});





    


