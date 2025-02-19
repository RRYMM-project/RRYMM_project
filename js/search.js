function createSearchSection(params) {
    const searchWrap = createDivWithClassAndId("search-wrap", null);
    searchWrap.classList.add("container");
    const searchInputWrap = createDivWithClassAndId("search-input-wrap", null);
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.id = "search-content";
    searchInput.setAttribute("placeholder", "Search");
    searchInput.classList.add("search-input");
    searchInputWrap.appendChild(searchInput);
    searchWrap.appendChild(searchInputWrap);

    return searchWrap;
}

function handleOnLoad(e) {
    const searchSection = createSearchSection();
    document.getElementById("root").appendChild(searchSection);
    
}

// Function for creating div with class and ID:
function createDivWithClassAndId(className="", id="") {
    const div = document.createElement("div");
    if (className){
      div.classList.add(className);
    }
    if (id){
      div.id = id;
    }
    
    return div;
  }

addEventListener("load", handleOnLoad);