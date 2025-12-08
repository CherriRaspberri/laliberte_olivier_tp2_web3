//Complex expressions given by Zdog website.
import Zdog from "zzz";

let isSpinning = true;

//canvas
const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  rotate: { x: -Zdog.TAU / 16 },
  dragRotate: true,
  onDragStart: function () {
    isSpinning = false;
  },
  onDragEnd: function () {
    isSpinning = true;
  },
});

//Rectangle
new Zdog.Rect({
  addTo: illo,
  width: 100,
  height: 100,
  stroke: 16,
  fill: true,
  color: "#f4f2ef",
});

//Dots pattern
[false, true].forEach(function (isGroup) {
  let SliceClass = isGroup ? Zdog.Group : Zdog.Anchor;

  let dotSlice = new SliceClass({
    addTo: illo,
    translate: { z: isGroup ? 25 : -25 },
  });

  const d = 45;

  let dot = new Zdog.Shape({
    addTo: dotSlice,
    stroke: 20,
    color: isGroup ? "#7a736d" : "#556149",
  });

  dot.copy({ translate: { x: -d, y: -d } });
  dot.copy({ translate: { x: 0, y: -d } });
  dot.copy({ translate: { x: d, y: -d } });
  dot.copy({ translate: { x: -d, y: 0 } });
  dot.copy({ translate: { x: d, y: 0 } });
  dot.copy({ translate: { x: -d, y: d } });
  dot.copy({ translate: { x: 0, y: d } });
  dot.copy({ translate: { x: d, y: d } });
});

//Canvas spin
function animate() {
  illo.rotate.y += isSpinning ? 0.01 : 0;
  illo.zoom = 0.9;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();
