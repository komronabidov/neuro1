const toTopBtn = document.getElementById("toTopBtn");

window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
};

toTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
