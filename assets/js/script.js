const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const leftGallery = document.querySelector("#left-gallery");
const centerGallery = document.querySelector("#center-gallery");
const rightGallery = document.querySelector("#right-gallery");

let firstMove = true;

let selectedGallery = 1;
let selectedElement = document.querySelector("#center-gallery");

leftArrow.addEventListener("click", (e) => {


    if (selectedGallery == 1) {
        selectedGallery--;
        leftGallery.classList.remove("gallery-left");
        leftGallery.classList.add("gallery-center");
        centerGallery.classList.remove("gallery-center");
        centerGallery.classList.add("gallery-right")
        rightGallery.classList.remove("galley-center");
        rightGallery.classList.add("gallery-right")
    }

    if (selectedGallery == 2) {
        selectedGallery--;
        centerGallery.classList.remove("gallery-left");
        centerGallery.classList.add("gallery-center")
        rightGallery.classList.remove("gallery-center");
        rightGallery.classList.add("gallery-right")
    }


    selectedElement.removeEventListener("mousemove", mouseMoveGallery);
    selectedElement.removeEventListener("mouseout", mouseOutGallery);

    if (selectedGallery == 0) {
        selectedElement = document.querySelector("#left-gallery");
    }

    if (selectedGallery == 1) {
        selectedElement = document.querySelector("#center-gallery");
    }

    selectedElement.addEventListener("mousemove", mouseMoveGallery);
    selectedElement.addEventListener("mouseout", mouseOutGallery);



})

rightArrow.addEventListener("click", (e) => {
    console.log("Right");

    if (selectedGallery == 1) {
        selectedGallery++;
        centerGallery.classList.remove("gallery-center");
        centerGallery.classList.add("gallery-left")
        rightGallery.classList.remove("gallery-right");
        rightGallery.classList.add("gallery-center")
    }

    if (selectedGallery == 0) {
        selectedGallery++;
        leftGallery.classList.remove("gallery-center");
        leftGallery.classList.add("gallery-left")
        centerGallery.classList.remove("gallery-right");
        centerGallery.classList.add("gallery-center")
    }

    selectedElement.removeEventListener("mousemove", mouseMoveGallery);
    selectedElement.removeEventListener("mouseout", mouseOutGallery);

    if (selectedGallery == 1) {
        selectedElement = document.querySelector("#center-gallery");
    }

    if (selectedGallery == 2) {
        selectedElement = document.querySelector("#right-gallery");
    }

    selectedElement.addEventListener("mousemove", mouseMoveGallery);
    selectedElement.addEventListener("mouseout", mouseOutGallery);


})


const mouseMoveGallery = (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    const axisX = e.target.getBoundingClientRect().left;
    const axisY = e.target.getBoundingClientRect().top;
    const axisMaxX = e.target.getBoundingClientRect().right;
    const axisMaxY = e.target.getBoundingClientRect().bottom;

    const percentX = ((posX - axisX) / (axisMaxX - axisX)) * (45 - (-45)) + (-45);
    const percentY = ((posY - axisY) / (axisMaxY - axisY)) * (45 - (-45)) + (-45);

    console.log(posX, posY, axisX, axisY, axisMaxX, axisMaxY, percentX, percentY)


    selectedElement.style.transform = `rotateX(${percentY}deg) rotateY(${-percentX}deg)`;

    if (firstMove == true) {
        firstMove = false;
        setTimeout(() => {
            selectedElement.style.transition = "all ease-in-out 0.01s";
        }, 500)
    }
}

selectedElement.addEventListener("mousemove", mouseMoveGallery);


const mouseOutGallery = (e) => {
    firstMove = true;
    selectedElement.style.transform = `rotateX(0deg) rotateY(0deg)`;
    selectedElement.style.transition = "all ease-in-out 0.5s";
}


selectedElement.addEventListener("mouseout", mouseOutGallery)