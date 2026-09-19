// ==============================
// МОБИЛЬНОЕ МЕНЮ
// ==============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Закрываем меню после перехода

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


// ==============================
// ГОД В FOOTER
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// ОКНО ЗАКАЗА
// ==============================

const modal = document.getElementById("orderModal");
const modalClose = document.getElementById("modalClose");
const modalOk = document.getElementById("modalOk");

const selectedProduct =
    document.getElementById("selectedProduct");


// Все кнопки "Заказать"

document.querySelectorAll(".order-btn").forEach(button => {

    button.addEventListener("click", () => {

        const product =
            button.getAttribute("data-product");

        selectedProduct.textContent = product;

        modal.classList.add("active");

        document.body.style.overflow = "hidden";
    });

});


// Закрытие

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


modalClose.addEventListener("click", closeModal);

modalOk.addEventListener("click", closeModal);


// Закрытие по клику на фон

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeModal();
    }

});


// Закрытие клавишей ESC

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeModal();
    }

});
