var currentFile = ""; //GLOBAL VARIABLE TO TRACK CURRENT SONG FILE
function playAudio(){
    var oAudio = document.getElementById('myaudio');
    var btn = document.getElementById('play');
    var audioURL = document.getElementById('mylist');

    if(audioURL.value !== currentFile){
      oAudio.src = audioURL.value;
      currentFile = audioURL.value;
    }
//WHEN THE USER CLICKS THE PLAY BUTTON THE currentFile VARIABLE IS COMPARED TO THE VALUE IN THE TEXT FIELD THAT IS SPECIFIED BY audioURL.value IF THEY ARE DIFFRERNT THE src PROPERTY IS SET TO THE NEW SONG'S URL and the currentFile VARIABLE IS UPDATED AND THE LOAD METHOD IS CALLED
    if(oAudio.paused){
      oAudio.play();
      btn.textContent = "Pause";
  }
    else {
      oAudio.pause();
      btn.textContent = "Play"
    }
  }
//WHEN AN AUDIO FILE I SPLAYING THE CURENT TIME PROPERTY TRACKS WHERE THE PALYBACK IS IN THE CURRENT AUDIO TRACK
function rewindAudio(){
  var oAudio = document.getElementById('myaudio');
  oAudio.currentTime -= 3.0;
}
function forwardAudio(){
  var oAudio = document.getElementById('myaudio');
  oAudio.currentTime += 3.0;
}
// //IN THE RESTART FUNCTION WE JUST RESET THE CURRENT TIME TO ZERO
function restartAudio(){
  var btn = document.getElementById('play');
  var oAudio = document.getElementById('myaudio');
  // oAudio.currentTime = 0;
  var lb = document.getElementById('mylist');
  oAudio.src = lb.value
  oAudio.play();
  btn.textContent = "pause";
}
// //TO STOP WE CAN USE THE CAPTIAL S Stop MATHOD WITH THE AUDIO OBJECT. WHEN THE SONG GETS STOPEED THE play/pause BUTTON SHOULD BE CHAGED TO 'play' MODE
function audioStop(){
  var oAudio = document.getElementById('myaudio');
  var btn = document.getElementById('play');
  btn.textContent = "Play";
  var lb = document.getElementById('mylist');
  oAudio.src = lb.value;
  oAudio.Stop();
}


// //THIS WILL GO TO THE PREVIOUS SONG IN THE GIVEN LIST. TO PLAY IT WE HAVE TO KNOW THE ID WHICH WE GET FROM the listbox ojbect: "lb". "lb" LETS ACCESS THE FILES IN THE LIST. USING i value THE LENGTH OF THE ARRAY CAN BE listboxobject.options.length  THE curfile WILL HAVE THE ID OF THE CURRENT FILE, COMPARE THE ID'S THE ARRAY USING lb.options[i].value and change the src attrubte of the audio obect oAudio to the prevous file id. if its the first one in the list display a message saying this is the first file, else it will play the previous song.
// function Previous(){
//   var oAudio = document.getElementById('myaudio');
//   var btn = document.getElementById('play');
//   var lb = document.getElementById('mylist');
//   var curfile = lb.value;
//
//   for (i = 0; i
//     if(curfile == lb.options[i].value){
//       if(i != 0){ //to check the beginning of the list of files
//         j = i-1; //points to the previous file id
//         oAudio.src = lb.options[j].value;
//         oAudio.play();
//         lb.options[j].selected = true;
//         btn.textContent = "Pause";
//       }
//       else{ //if curfile is the frist file in the list of files
//         btn.textContent = "Play";
//         console.log("this is the first song!");
//       }
//     }
//   )
// }
// //TO GO TO THE NEXT SONG IN THE LIST WE USE THE previous BUTTON LOGIC WITH THE DIFFERENCE THAT THE CONTROL GOES TO THE NEXT FILE THAN TO THE PREVOIUS FILE. IF THE CURRENT FILE IS THE LAST ONE A MESSAGE WILL POP UP
// function next(){
//   var oAudio = document.getElementById('myaudio');
//   var btn = document.getElementById('play');
//   var lb = document.getElementById('mylist');
//   var curfile = lb.value;
//   var count = lb.options.length; //to count the nubmer of files
//   if(curfile! = lb.options[count-1].value){
//     j  = i + 1;
//     oAudio.src= lb.options[j].value;
//     oAudio.play();
//     lb.options[j].selected = true;
//     btn.textContent = "Pause";
//   }
//   else{
//     console.log("this is the last song");
//     btn.textContent = "Play";
//   }
// }
