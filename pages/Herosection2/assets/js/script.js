const roleIcons = document.querySelectorAll('.role-icon');
const champImg = document.getElementById('championImage');
const champName = document.getElementById('championName');

roleIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const imgSrc = icon.getAttribute('data-img');
    const champ = icon.getAttribute('data-name');
    const role = icon.getAttribute('data-role');

    champImg.src = imgSrc;
    champName.textContent = champ;

    champImg.className = '';
    champImg.classList.add(role);
  });
});
