let modal = document.getElementById("myModal");
let modelContent = modal.querySelector(".modal-content");
let span = document.getElementsByClassName("close");
let btn = document.querySelector(".closeBtn");
// When the user clicks the button, open the modal 

const openLightPopup = () => {
  setTimeout(() => {
    modal.style.display = "block";
    modelContent.classList.add("animate__animated", "animate__fadeInDown"); //!   adding fade in animation when it appears
  },2000);
  
  
  btn.addEventListener("click", () => {
    modelContent.classList.add("animate__animated", "animate__fadeOutDown");
    setTimeout(() => {
      modal.style.display = "none";
  
    },600);
  });
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modelContent.classList.add("animate__animated", "animate__fadeOutDown");
      setTimeout(() => {
        modal.style.display = "none";
      },600);
    }
  }
}
const openDarkPopup = () => {
  modelContent.classList.toggle("darkModePopup");
  if(document.querySelector('.darkModePopup')) {
    let popupText = document.querySelector(".popupText");
    popupText.innerHTML = "The webpage is in <span>dark mode</span>, You can also try the <span>light mode</span> by clicking on the top right corner icon.";
  }
  openLightPopup();

}


//for system theme detection and set the theme according to that
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // window.location.reload(); //for reloding
  openDarkPopup();

}
else{

  openLightPopup();
}