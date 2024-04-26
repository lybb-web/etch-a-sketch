const grid = document.querySelector("#grid");
let style = getComputedStyle(grid);
console.log(style);
console.log(style.width);
let gridWidth = style.width;
console.log(gridWidth);
gridWidth = Number(gridWidth.substring(0, 3));
console.log(gridWidth);
let dimension = 16;
let pixelWidth = gridWidth / dimension;

console.log(pixelWidth);


for (let i = 0; i < dimension; i++)
{
    let row = document.createElement("div");
    row.id = "row";
    row.style.height = String(pixelWidth) + "px";
    grid.appendChild(row);
    for (let j = 0; j < dimension; j++)
    {
        let pixel = document.createElement("div");
        pixel.id = "pixel";
        pixel.style.width = String(pixelWidth) + "px";
        pixel.style.height = String(pixelWidth) + "px";
        // pixel.style.backgroundColor = "black";
        row.appendChild(pixel);

    }
}