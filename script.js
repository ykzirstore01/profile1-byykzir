document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const partners = document.querySelectorAll(".partner");
  const social = document.querySelectorAll(".social a");
  const button = document.querySelector(".main-button");

  // Animasi tombol utama
  if (button) {
    button.animate(
      [
        {
          opacity: 0,
          transform: "translateY(30px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
        },
      ],
      {
        duration: 700,
        fill: "forwards",
      },
    );
  }

  // Animasi Social Icon
  social.forEach((icon, index) => {
    icon.animate(
      [
        {
          opacity: 0,
          transform: "scale(.5)",
        },
        {
          opacity: 1,
          transform: "scale(1)",
        },
      ],
      {
        duration: 500,
        delay: index * 120,
        fill: "forwards",
      },
    );
  });

  // Animasi Card
  cards.forEach((card, index) => {
    card.animate(
      [
        {
          opacity: 0,
          transform: "translateY(40px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
        },
      ],
      {
        duration: 700,
        delay: index * 150,
        fill: "forwards",
      },
    );
  });

  // Animasi Partner
  partners.forEach((partner, index) => {
    partner.animate(
      [
        {
          opacity: 0,
          transform: "scale(.8)",
        },
        {
          opacity: 1,
          transform: "scale(1)",
        },
      ],
      {
        duration: 600,
        delay: index * 120,
        fill: "forwards",
      },
    );
  });
});

// ===========================
// Efek klik card
// ===========================

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    this.style.transform = "scale(.97)";

    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});

// ===========================
// Efek klik partner
// ===========================

document.querySelectorAll(".partner").forEach((item) => {
  item.addEventListener("click", function () {
    this.style.transform = "scale(.95)";

    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 150);
  });
});

// ===========================
// Efek klik sosial media
// ===========================

document.querySelectorAll(".social a").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "translateY(-6px) rotate(8deg)";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "translateY(0) rotate(0deg)";
  });
});
