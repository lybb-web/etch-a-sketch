function getPixelDimensions(grid)
{
    let style = getComputedStyle(grid);
    let gridWidth = style.width;
    gridWidth = Number(gridWidth.substring(0,3));
    return gridWidth;
}

function createPixel(r, h)
{
    let pixel = document.createElement("div");
    pixel.id = "pixel";
    pixel.style.width = String(h) + "px";
    pixel.style.height = String(h) + "px";
    pixel.classList.add("default");
    r.appendChild(pixel);

}

function makeGrid(grid, width, dimension)
{
    let pixelHeight = width / dimension;
    for (let i = 0; i < dimension; i++)
    {

    
        let row = document.createElement("div");
        row.id = "row";
        
        row.style.height = String(pixelHeight) + "px";
        for (let j = 0; j < dimension; j++)
        {
            createPixel(row, pixelHeight);
        }
        grid.appendChild(row);
    }
}




let dimension = 16;
let grid = document.querySelector("#grid");

let gridWidth = getPixelDimensions(grid);
makeGrid(grid, gridWidth, dimension);

grid.addEventListener("mouseover", (e) =>
{
    let target = e.target;
    if (target.id == "pixel")
    {
        target.classList.remove("default");
        target.classList.add("hovered");
        // target.style.backgroundColor = "black";
    }
    
}
);

grid.addEventListener("mouseout", (e) =>

{
    let target = e.target;
    if (target.id == "pixel")
    {
        target.classList.remove("hovered");
        if (! target.classList.contains("clicked"))
        {
            target.classList.add("default")
        }
        
        // target.style.backgroundColor = "white";
    }

}
);

grid.addEventListener("click", (e) =>
{
    let target = e.target;
    if (target.id == "pixel")
    {
        target.classList.remove("hovered")

        target.classList.add("clicked");
    }
    
}
);


