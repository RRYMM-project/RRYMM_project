function createSearchSection() {
  const searchWrap = createDivWithClassAndId("search-wrap", null);
  searchWrap.classList.add("container");
  const searchInputWrap = createDivWithClassAndId("search-input-wrap", null);
  searchInputWrap.id = 'search-input-wrap';
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.id = "search-content";
  searchInput.setAttribute("placeholder", "Search");
  searchInput.classList.add("search-input");
  searchInput.addEventListener('input', handleOnInput);
  searchInputWrap.appendChild(searchInput);
  const backspaceIcon = document.createElement("span");
  backspaceIcon.classList.add("material-symbols-outlined");
  backspaceIcon.id = "backspace-icon";
  backspaceIcon.innerText = "backspace";
  searchInputWrap.appendChild(backspaceIcon);
  searchWrap.appendChild(searchInputWrap);

  return searchWrap;
}

function handleOnLoad(e) {
  const searchSection = createSearchSection();
  document.getElementById("root").appendChild(searchSection);
}

// Function for creating div with class and ID:
function createDivWithClassAndId(className = "", id = "") {
  const div = document.createElement("div");
  if (className) {
    div.classList.add(className);
  }
  if (id) {
    div.id = id;
  }

  return div;
}

addEventListener("load", handleOnLoad);

function handleOnInput(e) {
  const usersInput = e.target.value;
  const bckspaceIcon = document.getElementById("backspace-icon");
  console.log(bckspaceIcon);
  if (usersInput != null) {
    bckspaceIcon.classList.add("visible-icon");
    bckspaceIcon.addEventListener('click', clearInputValue);
  } 
  if (usersInput == "") {
    bckspaceIcon.classList.remove("visible-icon");
    bckspaceIcon.removeEventListener('click', clearInputValue);
  } 

}

function clearInputValue(e) {
  console.log(e.target);
  const element = e.target;
  const elToClear = document.getElementById('search-content');
  console.log(elToClear.value);
  elToClear.value = "";
  element.classList.remove("visible-icon");
  
}