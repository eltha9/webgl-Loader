const dom = document.body
const canvasHeight = window.innerHeight
const canvasWidth = window.innerWidth
const windowPercent = 100

const plane = new Element3d(canvasWidth, canvasHeight,windowPercent, "png", './airplane2/1405 Plane.obj', './airplane2/1405 Plane.png', 0.0330, dom,180)


window.addEventListener('resize', ()=>{
    plane.resize()
})