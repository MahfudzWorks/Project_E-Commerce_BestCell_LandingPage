// Sidebar
document.querySelectorAll(".menu-item").forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    const submenu = menuItem.querySelector(".submenu");
    if (submenu) {
      menuItem.classList.toggle("open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector("#sidebar");

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      sidebar.classList.toggle("collapsed");
    });
  }
});
