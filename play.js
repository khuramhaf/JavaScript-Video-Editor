    
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
drawtime();
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




       function drawtime(){

       

        var array1 = [];

        

        for (i = 0; i < videos.length; i++) {
          array1.push(videos[i].endtime);
        }
        var totaltime1 = Math.max.apply(null, array1);
        var duration = totaltime1
            var canvas13 = document.getElementById("canvas13");
            var ctx1 = canvas13.getContext("2d");
        var scale = duration/20
            var length = (1290/duration)*scale
        
            ctx1.clearRect(0,0, canvas13.width, canvas13.height)
        
            ctx1.fillStyle = "black"
            ctx1.globalAlpha = 1;
        var x = 0;
            for (i = 1; i<parseInt(totaltime1)/scale; i++){
        x = x+length
            ctx1.fillText(parseInt(i*scale), x, 12)
            ctx1.fillText("|", x+38, 12)
        }
        ctx1.fillStyle = "red"; // Set the fill color
        ctx1.globalAlpha = 0.2; 
    
    ctx1.fillRect(0, 0, 0, 150);
       
           
            ctx1.globalAlpha = 1;
            ctx1.fillStyle="yellow"
           var xvalue = (time1/totaltime1)*canvas13.width
         
            ctx1.fillRect(xvalue,0,5, 150)
      
         }

         function clickseek(e){
          clearInterval(setinterval)

          var array1 = [];

        

       



var duration = totaltime1
            var canvas13 = document.getElementById("canvas13");
            var ctx1 = canvas13.getContext("2d");

            for (i = 0; i < videos.length; i++) {
              array1.push(videos[i].endtime);
            }
            var totaltime1 = Math.max.apply(null, array1);
            var duration = totaltime1

            var scale = duration/20
            var length = (1290/duration)*scale
        
            ctx1.clearRect(0,0, canvas13.width, canvas13.height)
        
            ctx1.fillStyle = "black"
            ctx1.globalAlpha = 1;
        var x = 0;
            for (i = 1; i<parseInt(totaltime1)/scale; i++){
        x = x+length
            ctx1.fillText(parseInt(i*scale), x, 12)
            ctx1.fillText("|", x+38, 12)
        }






    var time2 = (e.clientX/canvas13.width)*totaltime1
    time1=time2
    time=time2*20
        var scale = duration/20
            var length = (1290/duration)*scale
        
            ctx1.clearRect(0,0, canvas13.width, canvas13.height)
        
            ctx1.fillStyle = "black"
            ctx1.globalAlpha = 1;
        var x = 0;
            for (i = 1; i<parseInt(totaltime1)/scale; i++){
        x = x+length
            ctx1.fillText(parseInt(i*scale), x, 12)
            ctx1.fillText("|", x+38, 12)
        }
        ctx1.fillStyle = "red"; // Set the fill color
        ctx1.globalAlpha = 0.2; 
    
    ctx1.fillRect(0, 0, 0, 150);
       
           
            ctx1.globalAlpha = 1;
            ctx1.fillStyle="yellow"
           var xvalue = (time2/totaltime1)*canvas13.width
         
            ctx1.fillRect(xvalue,0,5, 150)




            seeked = true;
        clearInterval(setinterval)      
       
       
         document.getElementById("time").innerHTML = time2
    if(audiocontext !== undefined){
          audiocontext.close();
          audiocontext = undefined
          }

for(i=0;i<videos.length;i++){

       if(time2<videos[i].starttime){

       videos[i].currenttime = videos[i].lefttime
    }

    else{
      if(time2>=videos[i].starttime && time2<videos[i].endtime)
        videos[i].currenttime = videos[i].lefttime +time2-videos[i].starttime 
    }

  }
play1()

}