function runSim() {
  var board = JXG.JSXGraph.initBoard('boxlogo',{boundingbox: [-12, 12, 12, -12],axis:false,showCopyright:false,
    showNavigation:false,keepaspectratio: true,
    showClearTraces:false,
    registerEvents:false});
  board.renderer.container.style.backgroundColor = 'none';
  var r = 10;
  var mainCircle = board.create('circle', [[0,0], r], {strokeWidth: 0.5});
  mainCircle.remove();
  var O = board.create('point', [0,0], { name: 'O'});
  var X1 = board.create('point', [-r, 0], { name: 'X1'});
  var X2 = board.create('point', [r, 0], { name: 'X2'});
  var Y1 = board.create('point', [0, -r], { name: 'Y1'});
  var OX1 = board.create('segment', [O, X1], {strokeWidth: 0.5});
  var OX2 = board.create('segment', [O, X2], {strokeWidth: 0.5});
  var OY1 = board.create('segment', [O, Y1], {strokeWidth: 0.5});
  var C = board.create('point', [0, r], { name: 'C'});
  O.remove();
  X1.remove();
  X2.remove();
  Y1.remove();
  OX1.remove();
  OX2.remove();
  OY1.remove();
  C.remove();
  var p2 = board.create('midpoint', [O,C], { name: 'p2' });
  var p1 = board.create('midpoint', [p2, C], { name: 'p1'});
  var p3 = board.create('midpoint', [p2, O], { name: 'p3'});
  var l1 = board.create('line', [X1, p3], {strokeWidth: 0.5});
  var c2 = board.create('circle', [p3, r/2]);
  var p4 = board.create('intersection', [l1, c2, 1], { name: 'p4'});
  var p5 = board.create('intersection', [l1, c2, 0], { name: 'p5'});
  var a1 = board.create('arc', [p3, p5, p4]);
  c2.remove(); p2.remove();p1.remove();p3.remove();
  l1.remove();c2.remove();p4.remove();p5.remove();
  a1.remove();
  var l4 = board.create('segment', [p4,p1], {strokeWidth: 0.5});
  var p6 = board.create('midpoint', [p4, p1], { name: 'p6' });
  var p6r = board.create('line', [p3, p6], {strokeWidth: 0.5});
  var p6p = board.create('intersection', [p6r, a1], {name: 'p6p'});
  l4.remove();p6.remove();p6r.remove();p6p.remove();
  var l6 = board.create('segment', [p6p, p1], {strokeWidth: 0.5});
  var p7 = board.create('midpoint', [p6p, p1], { name: 'p7' });
  var l5 = board.create('segment', [p5, p1], {strokeWidth: 0.5});
  var p8 = board.create('midpoint', [p5,p1], { name: 'p8' });
  l6.remove();p7.remove();l5.remove();p8.remove();
  var p8r = board.create('line', [p3, p8], {strokeWidth: 0.5});
  var p8p = board.create('intersection', [p8r, a1], {name: 'p8p'});
  var l7 = board.create('segment', [p8p, p1], {strokeWidth: 0.5});
  var p9 = board.create('midpoint', [p8p, p1], { name: 'p9' });
  var l2 = board.create('line', [p7,p3], {strokeWidth: 0.5});
  p8r.remove();p8p.remove();l7.remove();p9.remove();l2.remove();
  var p10 = board.create('intersection', [l2, OX2], {name: 'p10'});
  var l3 = board.create('line', [p9, p3], {strokeWidth: 0.5});
  var p11 = board.create('intersection', [l3, OX1], {name: 'p11'});
  var p12 = board.create('midpoint', [X1, p10], {name: 'p12'});
  var a2 = board.create('arc', [p12, X1, p10]);
  p10.remove();l3.remove();p11.remove();p12.remove();a2.remove();
  var p13 = board.create('intersection', [a2, OY1], {name: 'p13'});
  var a3 = board.create('arc', [O, p11, p3]);
  var p14 = board.create('intersection', [a3, OX2, 1], {name: 'p14'});
  var c3 = board.create('circle', [p14, p13], {strokeWidth: 0.5});
  var p15 = board.create('intersection', [c3, OX2], {name: 'p15'});
  p13.remove();a3.remove();p14.remove();c3.remove();p15.remove();
  var p16 = board.create('intersection', [c3, OX1], {name: 'p16'});
  var v1 = board.create('perpendicular', [OX2, p15], {strokeWidth: 0.5});
  var v2 = board.create('perpendicular', [OX1, p16], {strokeWidth: 0.5});
  var p17 = board.create('intersection', [mainCircle, v1, 1], {name: 'p17'});
  var p18 = board.create('intersection', [mainCircle, v2], {name: 'p18'});
  p16.remove();v1.remove();v2.remove();p17.remove();p18.remove();
  var s1 = board.create('segment', [p17, p18], {strokeWidth: 0.5});
  var p19 = board.create('midpoint', [p17, p18], {name: 'p19'});
  var pb1 = board.create('perpendicular', [s1, p19], {strokeWidth: 0.5});
  var p20 = board.create('intersection', [pb1, mainCircle], {name: 'p20'});
  var hp1 = p20;
  var hp2 = p18;
  s1.remove();p19.remove();pb1.remove();p20.remove();
  var pts = new Array;
  for(i=1; i<=17; i++) {
    //board.create('segment', [hp1, hp2], { strokeColor: 'red', strokeWidth: 4 });
    //board.create('segment', [hp1, hp2], { strokeColor: 'red', strokeWidth: 4 });
    var hc = board.create('circle', [hp1, hp2]);
    var hi = board.create('intersection', [hc, mainCircle]);
    hp2 = hp1;
    hp1 = hi;
    pts.push(hi);
    hc.remove();
    hi.remove();
  }

  for(i=0; i<=16; i++){
    //var nnn = i.toString();
    var nnn='';
    board.create('point',[pts[i].X(),pts[i].Y()], { name: nnn, size: 2});
  }
  for(i=0;i<=16;i++){
    board.create('segment', [pts[i], pts[(i+7)%17]], { strokeColor: 'black', strokeWidth: 4 });
  }
}
var box = document.getElementById("boxlogo");
//box.style.width = (window.innerWidth - 50) + 'px';
//box.style.height = (window.innerHeight - 50) + 'px';
runSim();
