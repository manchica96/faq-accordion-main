const faqs = document.querySelectorAll(".accordion");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});