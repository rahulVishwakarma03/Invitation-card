let btn = document.querySelector("button");
let input = document.querySelector("#name");
let card = document.querySelector(".card");
let invitationCard = document.querySelector(".invitation-card");
let frontPage = document.querySelector(".frontpage");
let username = document.querySelector("#username");

const start = () => {
  setTimeout(function () {
    confetti.start();
  });
};
start();

let tl1 = gsap.timeline({
  onComplete: function () {
    var count = 200;
    var defaults = {
      origin: { y: 0.9 },
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  },
});
tl1.from(".frontpage, .card", {
  opacity: 0,
  x: -100,
  duration: 1,
  delay: 1,
});
tl1.from("#titleBox, h1, label, input, #line, button", {
  x: -50,
  opacity: 0,
  stagger: 0.2,
  delay: 0.2,
  duration: 0.8,
});
btn.addEventListener("click", (e) => {
  if (input.value == "") {
    btn.setAttribute("disabled");
  } else {
    btn.removeAttribute("disabled");
    card.style.opacity = 1;
    invitationCard.classList.toggle("active");
    username.innerText = `Dear ${input.value} sir/ma'am..`;
    animation();
  }
});

function animation() {
  let tl = gsap.timeline({
    onComplete: function () {
      confetti({
        particleCount: 100,
        angle: 63,
        spread: 50,
        origin: { x: 0.3, y: 0.9 },
      });
      confetti({
        particleCount: 100,
        angle: 117,
        spread: 50,
        origin: { x: 0.7, y: 0.9 },
      });

      var end = Date.now() + 15 * 1000;
      var colors = ["#bb0000", "#ffffff"];

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    },
  });

  tl.from(".details p, .details h2", {
    y: "100%",
    opacity: 0,
    stagger: 0.3,
    delay: 1,
    duration: 0.8,
  });
}
z;
