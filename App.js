// onclick functionality
const frame = document.getElementById("frame");
frame.addEventListener("click", changeFrame);

function changeFrame() {
  frame.classList.toggle("heart");
}

// button functionality
const OriginalButton = document.getElementById("btn-original");
const rectangleButton = document.getElementById("btn-rectangle");
const circleButton = document.getElementById("btn-circle");
const heartButton = document.getElementById("btn-heart");

OriginalButton.addEventListener("click", selectFrame);
rectangleButton.addEventListener("click", selectFrame);
circleButton.addEventListener("click", selectFrame);
heartButton.addEventListener("click", selectFrame);

function selectFrame(button) {
  const buttonID = this.id;

  switch (buttonID) {
    case "btn-original":
      frame.className = "frame original";
      break;
    case "btn-rectangle":
      frame.className = "frame rectangle";
      break;

    case "btn-circle":
      frame.className = "frame circle";
      break;

    case "btn-heart":
      frame.className = "frame heart";
      break;
  }
}

// Upload file
const selectImage = document.querySelector(".select-image");
const inputFile = document.querySelector("#file");
const imgArea = document.querySelector(".img-area");

selectImage.addEventListener("click", function () {
  inputFile.click();
});

inputFile.addEventListener("change", function () {
  const image = this.files[0];

  const reader = new FileReader();
  reader.onload = () => {
    const allImg = imgArea.querySelectorAll("img");
    allImg.forEach((item) => item.remove());
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgArea.appendChild(img);
    imgArea.classList.add("active");
    imgArea.dataset.img = image.name;
  };
  reader.readAsDataURL(image);
});
