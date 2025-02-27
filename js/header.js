// Haetaan headerin HTML-tiedosto
// fetch('./header.html')
//   .then(response => response.text())
//   .then(html => {
//     // Lisätään headerin HTML sivulle
//     document.getElementById('main-header').innerHTML = html;
//   })
//   .catch(error => console.error('Virhe haettaessa headeria:', error));


  // Hamburger menu

  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("nav-list");

  hamburger.addEventListener('click', () => {
    console.log("click on the hamburger");
    navList.classList.toggle('show');
  })