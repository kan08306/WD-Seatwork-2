const cards = document.querySelectorAll(".card");
const bg = document.querySelector(".slider2_bg");
const locationText = document.getElementById("location-text");
const titleText = document.getElementById("title-text");
const descText = document.getElementById("description-text");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    const place = card.getAttribute("data-place");
    const title = card.getAttribute("data-title");
    const imageSrc = card.querySelector("img").src;

    const descriptions = {
      "Christ the Redeemer":
        "Standing tall atop Mount Corcovado, Christ the Redeemer overlooks the vibrant city of Rio de Janeiro. Built in 1931, this monumental statue is not just a religious icon but also a symbol of Brazilian warmth and hospitality, attracting millions of visitors every year with its panoramic views and spiritual presence.",
      "Chichen Itza":
        "Chichen Itza, once a thriving center of the Mayan civilization, is now a stunning archaeological site in Mexico. The towering El Castillo pyramid dominates the site, reflecting the Mayans’ advanced knowledge of astronomy and architecture. Visitors marvel at its symmetry and the mysterious acoustics that still puzzle historians today.",
      "Petra":
        "Carved directly into rose-red cliffs, Petra in Jordan is one of the world’s most mesmerizing ancient cities. Known as the 'Lost City', it once thrived as a center of trade and culture. Today, its grand facades, hidden tombs, and narrow canyon pathways captivate travelers seeking a glimpse into history.",
      "Pyramids of Giza":
        "The Pyramids of Giza are timeless testaments to ancient Egyptian engineering and spiritual devotion. These monumental tombs, especially the Great Pyramid, were constructed over 4,500 years ago and continue to awe with their scale, precision, and mystery. They remain a powerful symbol of Egypt’s rich cultural heritage.",
      "Great Wall of China":
        "Winding over rugged terrain and stretching thousands of miles, the Great Wall of China is a marvel of both construction and endurance. Built to protect Chinese states from invasions, it now stands as a proud reminder of China’s long and resilient history, offering breathtaking views and cultural insight.",
      "Colosseum":
        "The Colosseum, a colossal amphitheatre in the heart of Rome, is an enduring symbol of the Roman Empire’s grandeur and architectural prowess. Once hosting gladiatorial battles and public spectacles, it now draws millions who come to witness its majestic ruins and imagine the epic stories held within its walls."
    };

    bg.style.transition = "opacity 0.5s";
    bg.style.opacity = 0;
    setTimeout(() => {
      bg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageSrc})`;
      locationText.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${place}`;
      titleText.textContent = title;
      descText.textContent = descriptions[title];
      bg.style.opacity = 1;
    }, 300);
  });
});
