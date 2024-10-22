document.addEventListener("DOMContentLoaded", function () {
    let xSizeNode = document.getElementById("xSize");
    let ySizeNode = document.getElementById("ySize");

    function onresize(e)
    {
        xSizeNode.innerText = `X: ${window.innerWidth}`;
        ySizeNode.innerText = `Y: ${window.innerHeight}`;
    }

    window.addEventListener("resize", onresize);

    onresize();
});