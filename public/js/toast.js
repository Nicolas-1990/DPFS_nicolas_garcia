function showToast(message, type = "success", duration = 2000) {

  const toast = document.getElementById("toast");

  toast.textContent = message;

  toast.className = "toast";

  toast.classList.add(type, "show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

window.showToast = showToast;