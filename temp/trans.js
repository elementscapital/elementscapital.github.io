board = JXG.JSXGraph.initBoard("jxgbox", {showNavigation:false,showCopyright:false,boundingbox:[-4,4,4.5,-4], axis:true});
 board.renderer.container.style.backgroundColor = 'none';
var urlImg = "http://www.intmath.com/forum/imgs/camera3.svg";
var im = board.create('image',[urlImg, [0,0], [1.5,1]]);
var i=0;
var rot=30;
var timeoutID;
function rotatePic() {
  im.setAttribute({rotate:rot});
  if(i < 11){
    timeoutID = setTimeout(rotatePic, 100);
  } else {
    clearTimeout(timeoutID);
  }
  console.log(timeoutID);
  i++;
}

rotatePic();
