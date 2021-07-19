// GALLERY IMAGE MODAL ON CLICK
function onClick(element) {
  let captionText = document.getElementById("caption");
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  captionText.innerHTML = element.alt;
}
