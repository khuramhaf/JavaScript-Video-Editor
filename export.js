let muxer
let videoEncoder 
var canvas1
var ctx1 
var time1 =0

function exportfun(){

       canvas1 = document.getElementById("canvas");
ctx1 = canvas1.getContext("2d")

setInterval(setinterval1, 33)
}

function setinterval1(){
time1++

console.log(time1)

   
    
    
    

    
    
 
  
    
    
    videos[0].play();
   
    ctx1.clearRect(0,0,400,400)
    ctx1.drawImage(videos[0], 0, 0, 400, 400)     
    
    
    var imageData = canvas1.toDataURL('image/png');

    console.log(imageData)
    
      }
    
    
   
    
