document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <nav class="glass-nav">
        <a href="index.html" class="logo">
            <img src="assets/crystal.gif" alt="Archons Logo" class="spinning-logo">
            <span>ARCHONS INSURANCE</span>
        </a>
        
        <button class="menu-toggle" onclick="toggleMenu()" aria-label="Toggle Navigation">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>

        <ul class="nav-links" id="navLinks">
            <li><a href="index.html">Home</a></li>
            <li><a href="portal.html">Client Portal</a></li>
            
            <li class="dropdown">
                <button class="dropbtn">Service Request ▾</button>
                <div class="dropdown-content">
                    <a href="service-general.html">General Request</a>
                    <a href="service-add-driver.html">Add Driver</a>
                    <a href="service-replace-driver.html">Replace Driver</a>
                    <a href="service-remove-driver.html">Remove Driver</a>
                    <a href="service-add-vehicle.html">Add Vehicle</a>
                    <a href="service-address.html">Address Change</a>
                    <a href="service-transfer.html">Vehicle Transfer</a>
                    <a href="service-coi.html">COI Request</a>
                    <a href="service-other.html">Policy Change - Other</a>
                </div>
            </li>

            <li class="dropdown">
                <button class="dropbtn">Quotes ▾</button>
                <div class="dropdown-content">
                    <a href="quote-personal-auto.html">Personal Auto</a>
                    <a href="quote-commercial-auto.html">Commercial Auto</a>
                    <a href="quote-homeowners.html">Homeowners</a>
                </div>
            </li>

            <li><a href="hoa.html">HOA</a></li>
            <li><a href="registration.html">Registration</a></li>
        </ul>
    </nav>
    `;

    const navContainer = document.getElementById("navbar-container");
    if (navContainer) {
        navContainer.innerHTML = navHTML;
    }
});

// Expose function to global scope to ensure HTML onclick can find it
window.toggleMenu = function() {
    const nav = document.getElementById("navLinks");
    const btn = document.querySelector(".menu-toggle");
    nav.classList.toggle("active");
    btn.classList.toggle("open");
}