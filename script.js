gsap.from(".nav", 2, {
  y: "-200px",
  ease: "power2.inOut",
});

gsap.from(".headers", 2, {
  x: "-100%",
});

gsap.from(".buttons button", 2, {
  stagger: 0.3,
  y: "500px",
});

gsap.from(".products img", 2, {
  stagger: 0.3,
  y: "500px",
});

gsap.from(".hero-img", 2, {
  scale: 0.5,
});

gsap.from(".bean", 2, {
  x: 500,
});

gsap.from(".like", 2, {
  opacity: 0.5,
});

gsap.from(".side-background", 2, {
  left: "100%",
});

gsap.from(".text-1", 2, {
  x: 500,
});

gsap.from(".text-2", 2, {
  x: -500,
});

function iteration() {
  logo = document.querySelector(".logo");
  logo.src = "/assets/logo2.svg";

  var iteration1 = document.querySelector(".iteration1");
  iteration1.style.display = "none";

  var iteration2 = document.querySelector(".iteration2");
  iteration2.style.display = "block";

  heroImg = document.querySelector(".hero-img");
  heroImg.src = "/assets/Frapuccino2.png"; 
  
  var text1 = document.querySelector(".text-1");
  text1.textContent = "ICE COFFEE";
  
  var text2 = document.querySelector(".text-2");
  text2.textContent = "ICE COFFEE";

  gsap.to(".iteration1", 2, {
    opacity: 0,
  });

  gsap.to(document.body, 2, {
    background: "#09A16B",
  });

  gsap.to(".side-background", 2, {
    background: "#0D2E30",
  });

  gsap.from(".iteration2 .headers", 2, {
    x: "-100%",
  });

  gsap.from(".iteration2 .buttons button", 2, {
    stagger: 0.3,
    y: "500px",
  });

  gsap.from("iteration2 .products img", 2, {
    stagger: 0.3,
    y: "500px",
  });

  gsap.from(".iteration2 .products img", 2, {
    stagger: 0.3,
    y: "500px",
  });

  gsap.to(".bean", 2, {
    opacity: 0
  });

  gsap.to(".like", 2, {
    y: -200,
  });

  gsap.from(".text-1", 2, {
    x: 500,
  });
  
  gsap.from(".text-2", 2, {
    x: -500,
  });
}

document.addEventListener("click", iteration);
