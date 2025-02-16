// Haetaan footerin HTML-tiedosto
fetch('./footer.html')
  .then(response => response.text())
  .then(html => {
    // Lisätään footerin HTML sivulle
    document.getElementById('main-footer').innerHTML = html;
  })
  .catch(error => console.error('Virhe haettaessa footeria:', error));