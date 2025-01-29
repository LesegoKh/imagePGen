// Button Hover Effects section
const btnEl = document.querySelector(".butn");

btnEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos",`${x}px`);
    btnEl.style.setProperty("--yPos",`${y}px`);
});

let imageNum = 10;
const imageContainerEl = document.querySelector(".image-container");
btnEl.addEventListener("click", () => {
   
addNewImages()
});

function addNewImages() {
    const newImgEl = document.createElement("img")
    newImgEl.src=`https://picsum.photos/300?random=${Math.floor(Math.random() * 2000
     )}`;
     imageContainerEl.appendChild(newImgEl);
    for(let index = 0; index < imageNum; index++) {
        const element = array[index];
    }
  
};