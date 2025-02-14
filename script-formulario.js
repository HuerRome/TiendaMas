document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const purchaseTypeSelect = document.getElementById("purchaseType");
    const subtotalSpan = document.getElementById("subtotal");
    const totalSpan = document.getElementById("total");
    const discountInfo = document.getElementById("discountInfo");

    function updateTotal() {
        const selectedOption = productSelect.options[productSelect.selectedIndex];
        const price = selectedOption.dataset.price ? parseFloat(selectedOption.dataset.price) : 0;
        let quantity = parseInt(quantityInput.value, 10);
        let subtotal = price * quantity;
        let total = subtotal;

        if (purchaseTypeSelect.value === "mayor" && quantity >= 10) {
            total *= 0.9; // Aplica 10% de descuento
            discountInfo.classList.remove("hidden");
        } else {
            discountInfo.classList.add("hidden");
        }

        subtotalSpan.textContent = subtotal.toFixed(2);
        totalSpan.textContent = total.toFixed(2);
    }

    productSelect.addEventListener("change", updateTotal);
    quantityInput.addEventListener("input", updateTotal);
    purchaseTypeSelect.addEventListener("change", updateTotal);

    document.getElementById("purchaseForm").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("¡Compra realizada con éxito!");
    });

    updateTotal();
});
