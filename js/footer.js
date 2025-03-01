function handleOnLoad(e) {
  const footerContainer = document.createElement("footer");
  footerContainer.id = "main-footer";

  document.getElementById("root").appendChild(footerContainer);
  console.log("Footer loaded");

  // Haetaan footerin HTML-tiedosto
  fetch("./footer.html")
    .then((response) => response.text())
    .then((html) => {
      // Lisätään footerin HTML sivulle
      document.getElementById("main-footer").innerHTML = html;
    })
    .catch((error) => console.error("Virhe haettaessa footeria:", error));
}

addEventListener("load", handleOnLoad);
