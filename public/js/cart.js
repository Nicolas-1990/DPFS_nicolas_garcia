document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // ADD TO CART
  // =========================

  document.querySelectorAll(".add-to-cart").forEach(btn => {

    btn.addEventListener("click", async () => {

      if (btn.disabled) return;

      const id = btn.dataset.id;

      const res = await fetch(`/cart/add/${id}`, {
        method: "POST"
      });

      const data = await res.json();

      if (data.success) {

        btn.classList.add("added");

        setTimeout(() => {
          btn.classList.remove("added");
        }, 300);

        const total = data.cart.reduce(
          (acc, item) => acc + item.quantity,
          0
        );

        const cartCount = document.getElementById("cart-count");

        if (cartCount) {

          cartCount.textContent = total;

          cartCount.classList.add("bump");

          setTimeout(() => {
            cartCount.classList.remove("bump");
          }, 200);
        }

        showToast(data.message, data.type || "success");

      } else {

        showToast(data.message, data.type || "error");

      }
    });
  });

  // =========================
  // QUANTITY
  // =========================

  document.querySelectorAll(".quantity button:not(.btn-delete)").forEach(btn => {

    btn.addEventListener("click", async (e) => {

      e.preventDefault();

      const form = btn.closest("form");
      const row = btn.closest(".cart-row");

      const qty = row.querySelector(".quantity span");
      const subtotal = row.querySelector("span:last-child");

      qty.classList.add("bump");
      subtotal.classList.add("bump");

      setTimeout(() => {
        qty.classList.remove("bump");
        subtotal.classList.remove("bump");
      }, 200);

      const res = await fetch(form.action, {
        method: "POST"
      });

      const data = await res.json();

      if (data.success) {

        showToast(data.message, data.type || "success");

      } else {

        showToast(data.message, data.type || "error");

      }

      setTimeout(() => location.reload(), 2000);

    });
  });

  // =========================
  // DELETE PRODUCT
  // =========================

  document.querySelectorAll("form[action*='/cart/delete']").forEach(form => {

    form.addEventListener("submit", async (e) => {

      e.preventDefault();

      const confirmDelete = confirm("¿Eliminar este producto del carrito?");

      if (!confirmDelete) return;

      const res = await fetch(form.action, {
        method: "POST"
      });

      const data = await res.json();

      if (data.success) {

        const row = form.closest(".cart-row");

        row.style.transition = "all 0.3s ease";
        row.style.opacity = "0";
        row.style.transform = "translateX(-20px)";

        showToast(data.message, data.type || "success");

        setTimeout(() => location.reload(), 1500);

      } else {

        showToast(data.message, data.type || "error");

      }
    });
  });

  // =========================
  // CLEAR CART
  // =========================

  const clearForm = document.querySelector("form[action='/cart/clear']");

  if (clearForm) {

    clearForm.addEventListener("submit", async (e) => {

      e.preventDefault();

      const res = await fetch("/cart/clear", {
        method: "POST"
      });

      const data = await res.json();

      if (data.success) {

        showToast("Compra realizada con éxito 🎉", "success");

        setTimeout(() => location.reload(), 2500);

      } else {

        showToast(data.message, data.type || "error");

      }
    });
  }

});