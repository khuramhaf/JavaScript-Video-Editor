    function play1() {


        document.getElementById("time").innerHTML = time.toFixed(0)

clearInterval(setinterval)

      var start = Date.now();
setinterval = setInterval(function() {
    time++;
    document.getElementById("time").innerHTML = time.toFixed(0)

    var delta = Date.now() - start; // milliseconds elapsed since start

  
}, 1000); // update about every second
      
    if(videos.length>0){


  for(let i=0;i<videos.length;i++){

    videos[i].addEventListener("timeupdate", timeupdate1)
   
  }
}



    



     animate();
    }



    function animate() {
        
            for (i = 0; i < videos.length; i++) {
              if (time>=videos[i].starttime && time <= videos[i].endtime) {
       
       
    
    
      if(ispaused===true){

        videos[i].currentTime = videocurrenttime
        ispaused = false;
      }

      if(seek2 === true){
        var seektime = parseFloat(document.getElementById("seektime").value)

        videos[i].currentTime = videos[i].currenttime + seektime

       
      }
    

      videos[i].play();  
  ctx.clearRect(0,0,400,400)
  ctx.drawImage(videos[i], 0, 0, 400, 400)                
  
            }
    
          
            }
    
            seek2=false;
     
          
    
        // Call requestAnimationFrame to schedule the next frame
     animationframe=   requestAnimationFrame(animate);
      }