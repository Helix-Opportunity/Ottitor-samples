let c1 = document.body.childNodes[1];
let c2 = document.body.childNodes[3];
let canv1 = new Audit.canvas.Canvas(c1);
let canv2 = new Audit.canvas.Canvas(c2);
// TODO: Needs a  promise to wait for init to complete!
let diffPixels, diffBbox;
let colorPixels1, colorBbox1;
let colorPixels2, colorBbox2;
Promise.all([canv1.promise, canv2.promise]).then(() => {
  diffPixels = Audit.canvas.diffCanvas(canv1, canv2);
  diffBbox = new Audit.bbox.Bbox(diffPixels);
  colorPixels1 = Audit.canvas.colorElements(canv1, [245, 218, 85]);
  colorBbox1 = new Audit.bbox.Bbox(colorPixels1);
  canv1.drawPixels(colorPixels1);
  colorPixels2 = Audit.canvas.colorElements(canv2, [245, 218, 85]);
  colorBbox2 = new Audit.bbox.Bbox(colorPixels2);
  canv2.drawPixels(colorPixels2);
  canv1.insert();
  canv2.insert();
});
