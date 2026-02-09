// Custom Cursor Logic
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Smooth outline lag effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Tab Switching Logic
const navBtns = document.querySelectorAll(".nav-btn");
const mainPanels = document.querySelectorAll(".tab-panel");

navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.tab;

        navBtns.forEach(b => b.classList.remove("active"));
        mainPanels.forEach(p => p.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(target).classList.add("active");
    });
});