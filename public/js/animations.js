document.addEventListener("DOMContentLoaded", () => {
  const activeTab = document.querySelector(".tab.active");

  if (activeTab) {
    activeTab.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
});