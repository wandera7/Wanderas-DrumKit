let drumNumber=document.querySelectorAll(".drum").length
console.log(drumNumber)
for(let i=0;i<drumNumber;i++){
     document.querySelectorAll(" .drum")[i].addEventListener("click",function(){
         let button=this.innerHTML
         switch (button) {
             case "w":
                  let audio=new Audio('sounds/tom-1.mp3')
                  audio.play()
                 
                 break;
              case "a":
                    let crash=new Audio('sounds/crash.mp3')
                  crash.play()
                  
                 
                 break;
              case "s":
                    let kick=new Audio('sounds/kick-bass.mp3')
                    kick.play()
                 
                 break;
              case "d":
                    let snare=new Audio('sounds/snare.mp3')
                  snare.play()
                 
                 break;
               case "j":
                     let audio4=new Audio('sounds/tom-2.mp3')
                  audio4.play()
                 
                 break;
               case "k":
                     let audio5=new Audio('sounds/tom-3.mp3')
                     audio5.play()
                 
                 break;
                case "l":
                      let audio6=new Audio('sounds/tom-4.mp3')
                  audio6.play()
                 
                 break; 
                
         
             default:
                 break;
         }
         buttonAnimation( button)





         // let audio=new Audio('sounds/tom-1.mp3')
        //audio.play()

})}

document.addEventListener("keypress",function(event){
    let target=event.key
     switch (target) {
             case "w":
                  let audio=new Audio('sounds/tom-1.mp3')
                  audio.play()
                 
                 break;
              case "a":
                    let crash=new Audio('sounds/crash.mp3')
                  crash.play()
                  
                 
                 break;
              case "s":
                    let kick=new Audio('sounds/kick-bass.mp3')
                    kick.play()
                 
                 break;
              case "d":
                    let snare=new Audio('sounds/snare.mp3')
                  snare.play()
                 
                 break;
               case "j":
                     let audio4=new Audio('sounds/tom-2.mp3')
                  audio4.play()
                 
                 break;
               case "k":
                     let audio5=new Audio('sounds/tom-3.mp3')
                     audio5.play()
                 
                 break;
                case "l":
                      let audio6=new Audio('sounds/tom-4.mp3')
                  audio6.play()
                 
                 break; 
                
         
             default:
                 break;
         }
         buttonAnimation(target)
}

)

function buttonAnimation(key){

    let activeButton=document.querySelector(`.${key}`)
    activeButton.classList.add("pressed")

    setTimeout(function(){
         activeButton.classList.remove("pressed")

    },100)

}