import maplibregl from "maplibre-gl";

//Creates map
const map = new maplibregl.Map({
  container: "map",
  style: "https://tiles.openfreemap.org/styles/bright",
  center: [-71.2082, 46.8139], //Quebec's pov
  zoom: 0,
  bearing: 0,
  pitch: 0
});

//Speed of rtation (deg/frame)
const rotationSpeed = 0.05;

//Rotates the globe
function rotateGlobe() {
  map.setBearing(map.getBearing() + rotationSpeed);
  //Rotates every frame
  requestAnimationFrame(rotateGlobe);
}

//Sets the map as a globe
map.on("style.load", () => {
  map.setProjection({ type: "globe" });
  rotateGlobe();
});

//Adjusts the zoom depending on the window's size
function adjustZoom() {
    //Here, 992 is the lg breakpoint from bootstrap
    if (window.innerWidth >= 992) {
        map.setZoom(1.5);
    }
    else {
        map.setZoom(-0.5);
    }
}
//Calls once on page load
adjustZoom();
map.resize();

//Checks every time that the window is resized
window.addEventListener("resize", () => {
    map.resize();
    adjustZoom();
});
