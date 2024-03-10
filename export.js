var videochunk=[]

function exportfun(){

var source2=audiocontext.createBufferSource()
source2.buffer=videos[0].audio
source2.connect(audiocontext.destination);
source2.start(0,0,10);


var source3=audiocontext.createBufferSource()
source3.buffer=videos[1].audio
source3.connect(audiocontext.destination);
source3.start(0,0,10);

const dest = audiocontext.createMediaStreamDestination();
source2.connect(dest);
source3.connect(dest);


var audiotracks = dest.stream.getAudioTracks();


var outputstream = new MediaStream();

var audiotracks = dest.stream.getAudioTracks()
outputstream.addTrack(audiotracks[0])

var mediarecorder = new MediaRecorder(outputstream, {mimeType:'video/webm; codecs="vp9, opus"'});
mediarecorder.start();
mediarecorder.ondataavailable=((e)=>{
videochunk.push(e.data)
}
)

source3.onended=function(){

       mediarecorder.stop()
}

mediarecorder.onstop=(()=>{

var blob = new Blob(videochunk, {type:'video/webm'})

const url = URL.createObjectURL(blob);

var anchor = document.createElement('a');
anchor.href = url;
anchor.download = "amooiz.webm"

document.body.appendChild(anchor);
anchor.click();
})}

