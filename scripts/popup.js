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
    document.querySelector(".closeBtn").classList.add("dark-mode-btn");
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






// !For general popup content
let generalPopup = document.getElementById("generalPopup");
let generalPopupContent = generalPopup.querySelector(".popup-content-general");
let closeBtnGeneral = document.querySelector(".general-close-btn");
let blankDiv = document.querySelector(".blank-div");
let generalDiv = document.querySelector(".general-div");

const generalPopupForLight = () => {
    console.log("generalPopupFunforLight added");
    setTimeout(() => {
      generalPopup.style.display = "block";
      generalPopupContent.classList.add("animate__animated", "animate__fadeInUp"); //!   adding fade in animation when it appears
    }, 500);
  
    closeBtnGeneral.addEventListener("click", () => {
      generalPopupContent.classList.add(
        "animate__animated",
        "animate__fadeOutDown"
      );
      setDataAfterWinning();
      setTimeout(() => {
        generalPopup.style.display = "none";
      }, 600);
    });
    
    window.onclick = function (e) {
      if (e.target == blankDiv || e.target == generalDiv) {
        generalPopupContent.classList.add(
          "animate__animated",
          "animate__fadeOutDown"
        );
        setDataAfterWinning();
        setTimeout(() => {
          generalPopup.style.display = "none";
          // location.reload();
        }, 600);
      }
    };
  };

  const generalPopupForDark = () => {
    generalPopupForLight();
    console.log("general dark mode popup added");
    generalPopupContent.classList.toggle("darkModePopup");
    if(document.querySelector(".darkModePopup")) {
      document.querySelector(".general-close-btn").classList.add("dark-mode-btn");
    }
  }


  const setDataAfterWinning = () => {
    user_score = 0;
    comp_score = 0;
    localStorage.setItem('resetUserValue', JSON.stringify(user_score));
    localStorage.setItem('resetCompValue', JSON.stringify(comp_score));
    document.getElementById('comp_score').innerHTML = localStorage.getItem('resetCompValue');
    document.getElementById('user_score').innerHTML = localStorage.getItem('resetUserValue');
  }