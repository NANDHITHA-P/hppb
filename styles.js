// Get the modals
var adminModal = document.getElementById('adminModal');
var buyerModal = document.getElementById('buyerModal');
var sellerModal = document.getElementById('sellerModal');

// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
  if (event.target == adminModal) {
    adminModal.style.display = "none";
  }
  if (event.target == buyerModal) {
    buyerModal.style.display = "none";
  }
  if (event.target == sellerModal) {
    sellerModal.style.display = "none";
}
}
