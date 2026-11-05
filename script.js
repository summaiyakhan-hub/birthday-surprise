/* GET WEBSITE ELEMENTS */

const intro = document.getElementById("intro");
const surprise = document.getElementById("surprise");
const cake = document.getElementById("cake");
const cakeArea = document.getElementById("cakeArea");

const kissLayer = document.getElementById("kissLayer");
const confettiLayer = document.getElementById("confettiLayer");
const heartsBg = document.getElementById("heartsBg");


/* HIDE POLAROIDS IF THEIR IMAGE IS NOT ADDED YET */

document.querySelectorAll(".polaroid img").forEach(function(img) {

    img.addEventListener("error", function() {
        img.closest(".polaroid").style.display = "none";
    });

});


/* OPEN BIRTHDAY SURPRISE */

document.getElementById("openBtn").addEventListener("click", function() {

    intro.classList.add("hidden");

    surprise.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    makeHearts(25);

});


/* CAKE CUTTING ANIMATION */

let cakeCut = false;

document.getElementById("cakeBtn").addEventListener("click", function() {

    cakeArea.classList.add("show");

    cakeArea.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    if (cakeCut) {

        document.getElementById("cakeCaption").textContent =
            "Happy Birthday, my sweetest Shamuuu! 💗🎂";

        makeKisses(20);

        return;
    }

    setTimeout(function() {

        cake.classList.add("cut");

        cakeCut = true;

        document.getElementById("cakeCaption").textContent =
            "Yayyy! Our cake is cut! Happy Birthday Baby! 💗";

        document.getElementById("cakeBtn").textContent =
            "Make Another Birthday Wish 💗";

        cakeConfetti();

        makeHearts(25);

    }, 900);

});


/* CAKE CONFETTI EFFECT */

function cakeConfetti() {

    const symbols = ["💗", "✨", "🎉", "💕", "✦", "🎀"];

    for (let i = 0; i < 45; i++) {

        const bit = document.createElement("span");

        bit.className = "confetti-bit";

        bit.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        bit.style.left = (35 + Math.random() * 30) + "%";

        bit.style.setProperty(
            "--x",
            (Math.random() * 450 - 225) + "px"
        );

        bit.style.setProperty(
            "--y",
            (Math.random() * 400 - 200) + "px"
        );

        confettiLayer.appendChild(bit);

        setTimeout(function() {
            bit.remove();
        }, 2000);

    }

}


/* SEND TEDDY KISSES 💋 */

document.getElementById("kissBtn").addEventListener("click", function() {

    makeKisses(55);

});


function makeKisses(amount) {

    const symbols = ["💋", "💋", "💋", "💕", "💗", "✨"];

    for (let i = 0; i < amount; i++) {

        const kiss = document.createElement("span");

        kiss.className = "kiss-print";

        kiss.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        kiss.style.left = Math.random() * 100 + "%";

        kiss.style.fontSize =
            (22 + Math.random() * 32) + "px";

        kiss.style.setProperty(
            "--duration",
            (2.5 + Math.random() * 2.5) + "s"
        );

        kiss.style.setProperty(
            "--rotate",
            (Math.random() * 80 - 40) + "deg"
        );

        kiss.style.setProperty(
            "--end-rotate",
            (Math.random() * 120 - 60) + "deg"
        );

        kiss.style.setProperty(
            "--drift",
            (Math.random() * 200 - 100) + "px"
        );

        kiss.style.setProperty(
            "--scale",
            (0.8 + Math.random() * 1.3)
        );

        kissLayer.appendChild(kiss);

        setTimeout(function() {
            kiss.remove();
        }, 5500);

    }

}


/* FLOATING HEARTS */

function makeHearts(amount) {

    const symbols = ["♥", "♡", "💗", "✦"];

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("span");

        heart.className = "bg-heart";

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize =
            (13 + Math.random() * 18) + "px";

        heart.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        heartsBg.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 9500);

    }

}


/* CONTINUOUS HEART ANIMATION */

setInterval(function() {

    makeHearts(1);

}, 1300);