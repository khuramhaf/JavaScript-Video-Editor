    
 var seeked = false
    function play1() {

     console.log(videos[0].starttime)

    if(videos.length>0){
   
     
    }


      if(audiocontext===undefined){

  audiocontext = new AudioContext();
}
    




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
 createtimeline()
}
}
seeked=false

setinterval = setInterval(function() {
time1 = time/20
drawtime()
    document.getElementById("time").innerHTML = time1.toFixed(1)
    for (i = 0; i < videos.length; i++) {
    if (time1>=videos[i].starttime&&time1<=videos[i].endtime) {
       

   videos[i].currenttime = videos[i].currenttime+.05
   videos[i].currentTime = videos[i].currenttime

    ctx.clearRect(0,0,400,400)
            ctx.drawImage(videos[i], 0, 0, 400, 400)   
            
        
               
  
            }}

            time++;

            
            var array1=[]
            for (i = 0; i < videos.length; i++) {
              if(videos[i].endtime>videos[i].maxduration){
              array1.push(videos[i].endtime);
            }
          else{
          
            array1.push(videos[i].maxduration);
          }
          
          }
            
          
      totaltime = Math.max.apply(null, array1);

            if (time1 >= parseFloat(totaltime)) {
              clearInterval(setinterval);
             time=0
             time1=0
             for(i=0;i<videos.length;i++){
              videos[i].currenttime = videos[i].lefttime
             }
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

       
        var array1=[]
        for (i = 0; i < videos.length; i++) {
          if(videos[i].endtime>videos[i].maxduration){
          array1.push(videos[i].endtime);
        }
      else{
      
        array1.push(videos[i].maxduration);
      }
      
      }
        var totaltime1 = Math.max.apply(null, array1);
        var duration = totaltime1

       
            var canvas13 = document.getElementById("canvas13");
            var ctx1 = canvas13.getContext("2d");
        var scale = duration/20
            var length = (canvas13.width/duration)*scale
        
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

        



            var canvas13 = document.getElementById("canvas13");
            var ctx1 = canvas13.getContext("2d");

            for (i = 0; i < videos.length; i++) {

              if(videos[i].endtime>videos[i].maxduration){
              array1.push(videos[i].endtime);
            }

            else{
              array1.push(videos[i].maxduration)
            }
            }
            
            var totaltime1 = Math.max.apply(null, array1);
            var duration = totaltime1

            var scale = duration/20
            var length = (canvas13.width/duration)*scale
        
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
            var length = (canvas13.width/duration)*scale
        
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


function createtimeline(){
   clearInterval(setinterval)
   time =0
   time1 = 0;
   
   var canvas13 = document.getElementById("canvas13")

  var ctx1 = canvas13.getContext("2d")

  var array1=[]
  for (i = 0; i < videos.length; i++) {
    if(videos[i].endtime>videos[i].maxduration){
    array1.push(videos[i].endtime);
  }
else{

  array1.push(videos[i].maxduration);
}

}
  var totaltime1 = Math.max.apply(null, array1);

  var timecontainer = document.getElementById("timelinecontainer")
  timecontainer.innerHTML = " "

  for(i=0;i<videos.length;i++){

    var creatediv=document.createElement("div")
    creatediv.id =videos[i].id
    creatediv.style.width=((videos[i].endtime-videos[i].starttime)/totaltime1)*canvas13.width + "px"
    creatediv.style.height="40px"
    creatediv.style.marginTop = "5px"
    creatediv.style.marginLeft =  (videos[i].starttime/totaltime1)*canvas13.width + "px"
    creatediv.style.backgroundColor="blue";
 
    creatediv.oldwidth = ((videos[i].endtime-videos[i].starttime)/totaltime1)*canvas13.width

   


   
   
    
  
   timecontainer.appendChild(creatediv)


   const position = { x: 0, y: 0 }

interact(creatediv).draggable({
  listeners: {
    start (event) {
     
    },
    move (event) {
      position.x += event.dx
    

      event.target.style.transform =
        `translate(${position.x}px)`
    },

  }
}).on("dragend",(event)=>{

  var array1=[]
  for (i = 0; i < videos.length; i++) {
    if(videos[i].endtime>videos[i].maxduration){
    array1.push(videos[i].endtime);
  }
else{

  array1.push(videos[i].maxduration);
}

}
  var totaltime1 = Math.max.apply(null, array1);
  if(audiocontext !== undefined){
    audiocontext.close();
    audiocontext = undefined
  
    }

   clearInterval(setinterval)



  for (i=0;i<videos.length;i++){

    if(videos[i].id === event.target.id){

      var currentstarttime =((event.target.getBoundingClientRect().left)/canvas13.width)*totaltime1 -videos[i].starttime
videos[i].starttime =((event.target.getBoundingClientRect().left)/canvas13.width)*totaltime1
videos[i].endtime =videos[i].endtime +currentstarttime

videos[i].currenttime = videos[i].lefttime



    }
  }

  time1 = 0
  time = 0
  
})

interact(creatediv)
  .resizable({
    edges: { left: true, right: true },
    listeners: {
      move: function (event) {
        let { x, y } = event.target.dataset

    if(event.edges.right === true){
      var array1=[]
      for (i = 0; i < videos.length; i++) {
        if(videos[i].endtime>videos[i].maxduration){
        array1.push(videos[i].endtime);
      }
    else{
    
      array1.push(videos[i].maxduration);
    }
    
    }
      var totaltime1 = Math.max.apply(null, array1);

      resizeright(event,totaltime1)
    }

    else if(event.edges.left===true){

resizeleft(event)
    }

    else{

    }

        x = (parseFloat(x) || 0) + event.deltaRect.left
      

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          transform: `translate(${x}px)`
        })

        Object.assign(event.target.dataset, { x, y })
      }
    }
  })
  }
}





function resizeright(event,totaltime1){

  var canvas13 = document.getElementById("canvas13")

      for(i=0;i<videos.length;i++){
        if(parseInt(videos[i].id)===parseInt(event.target.id)){
          videos[i].endtime = (parseInt(event.target.style.width)/canvas13.width)*totaltime1 + videos[i].starttime

          

  videos[i].currenttime = videos[i].lefttime
  if(audiocontext !== undefined){
    audiocontext.close();
    audiocontext = undefined
  
    }
  
    clearInterval(setinterval)
    if(audiocontext===undefined){
  
      audiocontext = new AudioContext();
    }
        
    time=0
    time1=0
   
   
   
        }
      }
      
     }
    


    function resizeleft(event){
      var canvas13 = document.getElementById("canvas13")

      var array1=[]
   
      for (i = 0; i < videos.length; i++) {
        if(videos[i].endtime>videos[i].maxduration){
        array1.push(videos[i].endtime);
      }
    else{
    
      array1.push(videos[i].maxduration);
    }
    
    }
      var totaltime1 = Math.max.apply(null, array1);

       for(i=0;i<videos.length;i++){
         if(parseInt(videos[i].id)===parseInt(event.target.id)){
          videos[i].starttime = ((event.target.getBoundingClientRect().left)/canvas13.width)*totaltime1
   videos[i].currenttime = ((event.target.getBoundingClientRect().left)/canvas13.width)*totaltime1
   videos[i].lefttime = ((event.target.getBoundingClientRect().left)/canvas13.width)*totaltime1
   if(audiocontext !== undefined){
     audiocontext.close();
     audiocontext = undefined
   
     }
   
     clearInterval(setinterval)
     if(audiocontext===undefined){
   
       audiocontext = new AudioContext();
     }
         
     time=0
     time1=0
    
         }
       }
       
      }