    
 
    function play1() {

clearInterval(setinterval)
setinterval = setInterval(function() {
   
    
time1 = time/20
    document.getElementById("time").innerHTML = time1.toFixed(1)
    for (i = 0; i < videos.length; i++) {
    if (time1>=videos[i].starttime&&time1<=videos[i].endtime) {
       

   videos[i].currenttime = videos[i].currenttime+.05
   videos[i].currentTime = videos[i].currenttime

  

    ctx.clearRect(0,0,400,400)
            ctx.drawImage(videos[i], 0, 0, 400, 400)   


               
  
            }}

            time++;

            
            var array1 = [];



            for (i = 0; i < videos.length; i++) {
              array1.push(videos[i].endtime);
            }
            
          
      totaltime = Math.max.apply(null, array1);

            if (time1 >= parseFloat(totaltime)) {
              clearInterval(setinterval);
             
            }
   
}, 50); // update about every second
      



    



    
    }



   
    function seek() {
        clearInterval(setinterval)
         var seektime = parseFloat(document.getElementById("seektime").value)
      
       
         time1 = seektime
         document.getElementById("time").innerHTML = time1
         time = seektime*20
      
    
   

for(i=0;i<videos.length;i++){

       if(seektime<videos[i].starttime){

       videos[i].currenttime = videos[i].lefttime
    }

    else{
        videos[i].currenttime = videos[i].lefttime +seektime-videos[i].starttime 
    }
       }}