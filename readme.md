# WEBGL LOADER

This loader work whith the `3dClass.js` file. It contains the `Element3d()` class. it work with Three Js.
You only need to call `Element3d()` to your script to make it work

### Needed
You nedd some script to make it work :

- `<script src="three.min.js"></script>`
- `<script src="objloader.js"></script>`
- `<script src="mtlloader.js"></script>`
- `<script src="control.js"></script>`
- `<script src="3dClass.js"></script>`
- your 3d model with or without texture 

## CONSTRUCTOR

`Element3d( width, height, type, obj, beautify, ratio, DOM, rotateAngle, camPos, objPos)`

- `width`: width of your canvas 
- `height`: height of your canvas
- `percent`: percentage of the window take by the 3d canvas
- `type`: type of the texture, types are : 
    - `mtl`: for **.mtl** files
    - `png`: for **.png** files
    - `none`: disable texture 
- `obj`: link of the **.obj** file
- `texture`: texture of the .obj file, could be :
    - a string containing the path of an **.png** file
    - a string containing the path of an  **.mtl** file
    - a new THREE.js Mesh Material
- `ratio`: not a ratio but more the scale you want for your model
- `DOM`: DOM element where the canvas will be create
- `rotateAngle`: angle in degree of the object rotation
- `camPos`: an object with x / y / z of the camera position
- `objPos`: postion of the object in x / y / z axes
