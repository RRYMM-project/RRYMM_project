// Haetaan footerin HTML-tiedosto
fetch('./footer-optional.html')
  .then(response => response.text())
  .then(html => {
    // Lisätään footerin HTML sivulle
    document.getElementById('footer-optional').innerHTML = html;
  })
  .catch(error => console.error('Virhe haettaessa footeria:', error));