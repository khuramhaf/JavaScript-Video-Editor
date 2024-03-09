    
 var seeked = false
    function play1() {
    
if(audiocontext===undefined){

  audiocontext = new AudioContext();
}
      var array1 = [];



      for (i = 0; i < videos.length; i++) {
        array1.push(videos[i].endtime);
      }

clearInterval(setinterval)


for(i=0;i<videos.length;i++){
var  source1 = audiocontext.createBufferSource()
 source1.buffer = videos[i].audio
 source1.connect(audiocontext.destination)



 if(audiocontext.state==="suspended"){
  audiocontext.resume()

}

 else if(seeked===true){
  if(time1<videos[i].starttime){


  source1.start(Math.abs(audiocontext.currentTime+videos[i].starttime-time1), videos[i].currenttime, videos[i].endtime-videos[i].starttime)


}

else if(time1>=videos[i].starttime && time1<videos[i].endtime){


  source1.start(0, videos[i].currenttime, videos[i].endtime-videos[i].starttime)

  

}

else{

  
}
 }

 else{

 source1.start(Math.abs(audiocontext.currentTime+ videos[i].starttime), videos[i].currenttime, videos[i].endtime-videos[i].starttime)
}
}
seeked=false
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

            
          
            
          
      totaltime = Math.max.apply(null, array1);

            if (time1 >= parseFloat(totaltime)) {
              clearInterval(setinterval);
             
            }
   
}, 50); // update about every second
      



    



    
    }



   
    function seek() {

      seeked = true;
        clearInterval(setinterval)
         var seektime = parseFloat(document.getElementById("seektime").value)
      
       
         time1 = seektime
         document.getElementById("time").innerHTML = time1
         time = seektime*20
      
         clearInterval(setinterval);
   

         if(audiocontext !== undefined){
          audiocontext.close();
          audiocontext = undefined
          }

for(i=0;i<videos.length;i++){

       if(seektime<videos[i].starttime){

       videos[i].currenttime = videos[i].lefttime
    }

    else{
      if(seektime>=videos[i].starttime && seektime<videos[i].endtime)
        videos[i].currenttime = videos[i].lefttime +seektime-videos[i].starttime 
    }
       }}