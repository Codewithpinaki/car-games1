canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
r_width=99;
r_height=89;
r_x=10;
r_y=10;
b_image="race-track-finish-line-side-view-racing-sport-background-rendering-d-illustration-123920674.jpg";
r_image="real real.jpg";
function add()
 {
    b_imgTag = new Image();
    b_imgTag.onload = uploadBackground;
     b_imgTag.src = b_image ;

     r_imgTag = new Image();
     r_imgTag.onload = uploadRover;
      r_imgTag.src = r_image ;
 }
 function uploadBackground()
  { 
    ctx.drawImage(b_imgTag, 0, 0, canvas.width, canvas.height);
    }

    function uploadRover()
    { 
      ctx.drawImage(r_imgTag, r_x, r_y, r_width, r_height);
      }
      window.addEventListener("keydown",my_keydown);
      function my_keydown(e){
keyPressed=e.keyCode;
if(keyPressed=="38"){up()};
if(keyPressed=="40"){down()};
if(keyPressed=="39"){right()};
if(keyPressed=="37"){left()};
      }