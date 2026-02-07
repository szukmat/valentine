document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("no");
    const yesBtn = document.getElementById("yes");

    if (!noBtn || !yesBtn) {
        console.error("Buttons not found");
        return;
    }

    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });

    yesBtn.addEventListener("click", () => {
        window.location.href = "https://youtu.be/dQw4w9WgXcQ";
    });
});
