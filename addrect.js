function addrect(){
    
    var rect = new Konva.Rect({
    x: 50, // x-coordinate of the top-left corner
    y: 50, // y-coordinate of the top-left corner
    width: 100, // width of the rectangle
    height: 50, // height of the rectangle
    fill: 'blue', // fill color
    stroke: 'black', // border color
    strokeWidth: 2, // border width
    draggable:true
  });

  rect.type ="rectangle"
  rect.currenttime = 20
  rect.currentduration = 20

  shapes.push(rect)

  layer.add(rect);

  var tr = new Konva.Transformer();
  layer.add(tr);
  tr.nodes([rect]);


  rect.setAttr("width", 40)
  rect.setAttr("x", 200)

}