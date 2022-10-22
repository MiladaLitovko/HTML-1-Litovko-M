const modalForm = document.getElementById("modalForm")
const modalInput = document.getElementById("modalInput")
const modal = document.getElementById("modal")
modalForm.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    alert("Привет " + modalInput.value)
    modal.style.display = "none";
}