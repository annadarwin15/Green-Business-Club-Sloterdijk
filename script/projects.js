// Open the sidebar on small screens
function w3_open() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
}

// Close the sidebar on small screens
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Image modal functionality for project images
function onClick(element) {
  // Create modal if it doesn't exist
  let modal = document.getElementById("imgModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "imgModal";
    modal.style.position = "fixed";
    modal.style.zIndex = "9999";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.9)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.cursor = "zoom-out";

    // Image inside modal
    const modalImg = document.createElement("img");
    modalImg.id = "modalImage";
    modalImg.style.maxWidth = "90%";
    modalImg.style.maxHeight = "90%";
    modalImg.style.borderRadius = "8px";
    modal.appendChild(modalImg);

    // Close modal on click anywhere
    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    document.body.appendChild(modal);
  }

  // Set clicked image src to modal and show modal
  const modalImg = document.getElementById("modalImage");
  modalImg.src = element.src;
  modal.style.display = "flex";
}
