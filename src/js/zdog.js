import Zdog from "zzz";

let isSpinning = true;

const illo = new Zdog.Illustration({
    element: ".zdog-canvas",
    rotate: { x: -Zdog.TAU / 16 },
    dragRotate: true,
    onDragStart: function() {
        isSpinning = false;
    },
    onDragEnd: function() {
        isSpinning = true;
    }
});

new Zdog.Rect({
    addTo: illo,
    width: 100,
    height: 100,
    stroke: 16,
    fill: true,
    color: "#f2d6b1"
});

[false, true].forEach(function(isFixed) {
    let group = new Zdog.Group({
        addTo: illo,
        translate: { z: isFixed ? 25 : -25 }
    });

    const d = 45;
    let x = d * ( isFixed ? -1 : 1 );
    
    //dot
    new Zdog.Shape({
        addTo: group,
        stroke: 20,
        translate: { x: x, y: -d },
        color: isFixed ? '#39613a' : '#1f301f'
    });

    if (isFixed) {
        new Zdog.Shape({
            addTo: group,
            translate: {x: x, y: d}
        })
    }
});

function animate() {
    illo.rotate.y += isSpinning ? 0.01 : 0;

    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();