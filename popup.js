// Create and append popup HTML
const popupHTML = `
<div id="myPopup" class="popup-overlay">
  <div class="popup-content animated">
    <span class="close-btn">&times;</span>
    <h2>Welcome!</h2>
    <p>This popup appears 3 seconds after loading with animation and sound.</p>
  </div>
</div>
<audio id="popupSound" src="https://www.soundjay.com/buttons/sounds/button-3.mp3" preload="auto"></audio>
`;
document.body.insertAdjacentHTML('beforeend', popupHTML);

// Append CSS styles
const style = document.createElement('style');
style.textContent = `
.popup-overlay {
  display: none;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content {
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  width: 50%;
  height: 50%;
  max-width: 500px;
  max-height: 80%;
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
  animation: bounceIn 0.7s ease forwards;
  overflow-y: auto;
  position: relative;
}
@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.5) translateY(-200px); }
  60% { opacity: 1; transform: scale(1.05) translateY(20px); }
  100% { transform: scale(1) translateY(0); }
}
.close-btn {
  position: absolute;
  top: 10px; right: 15px;
  font-size: 24px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .popup-content {
    width: 90%;
    height: auto;
    max-height: 90%;
  }
}
`;
document.head.appendChild(style);

// Show popup after 3 seconds
window.addEventListener('load', function () {
  setTimeout(() => {
    document.getElementById("myPopup").style.display = "flex";
    document.getElementById("popupSound").play();
  }, 3000);
});

// Close handlers
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("close-btn") || e.target.id === "myPopup") {
    document.getElementById("myPopup").style.display = "none";
  }
});
