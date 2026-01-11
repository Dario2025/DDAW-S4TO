const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImage");
const deleteImageBtn = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// Agregar imagen
addImageBtn.addEventListener("click", () => {
    const url = imageUrlInput.value;

    if (url === "") {
        alert("Por favor ingresa una URL válida");
        return;
    }

    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click", () => {
        if (selectedImage) {
            selectedImage.classList.remove("selected");
        }
        img.classList.add("selected");
        selectedImage = img;
    });

    gallery.appendChild(img);
    imageUrlInput.value = "";
});

// Eliminar imagen seleccionada
deleteImageBtn.addEventListener("click", () => {
    if (selectedImage) {
        gallery.removeChild(selectedImage);
        selectedImage = null;
    } else {
        alert("No hay ninguna imagen seleccionada");
    }
});

// Atajos de teclado
document.addEventListener("keydown", (event) => {
    if (event.key === "Delete") {
        if (selectedImage) {
            gallery.removeChild(selectedImage);
            selectedImage = null;
        }
    }
});
