# WEBGL LOADER

This loader work whith the `3dClass.js` file. It contains the `Element3d()` class. it work with Three Js 

### Needed
You nedd some script to make it work :

- `<script src="three.min.js"></script>`
- `<script src="objloader.js"></script>`
- `<script src="mtlloader.js"></script>`
- `<script src="control.js"></script>`

## CONSTRUCTOR

`Element3d( width, height, type, obj, beautify, ratio)`

- `width`: width of your canvas 
- `height` : height of your canvas
- `type` : type of the texture, types are : 
    - `mtl`: for **.mtl** files
    - `png`: for **.png** files
    - `none`: disable texture 
- `obj`: link of the **.obj** file
- `beautify`: link of the **.mtl** or **.png** file
- `ratio`: not a ratio but more the scale you want for your model