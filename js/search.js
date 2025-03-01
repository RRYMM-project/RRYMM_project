function createSearchSection() {
  const searchWrap = createDivWithClassContainer("search-wrap");
  searchWrap.id = "search-wrap";
  const searchInputWrap = createDivWithClassAndId("search-input-wrap", null);
  searchInputWrap.id = "search-input-wrap";
  searchInputWrap.addEventListener("click", getUsersRequest);
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.id = "search-content";
  searchInput.setAttribute("placeholder", "Search");
  searchInput.classList.add("search-input");
  searchInput.addEventListener("input", handleOnInput);
  searchInput.addEventListener("keypress", getUsersRequest);
  searchInputWrap.appendChild(searchInput);
  const backspaceIcon = document.createElement("span");
  backspaceIcon.classList.add("material-symbols-outlined");
  backspaceIcon.classList.add("backspace-icon");
  backspaceIcon.id = "backspace-icon";
  backspaceIcon.innerText = "backspace";
  searchInputWrap.appendChild(backspaceIcon);
  searchWrap.appendChild(searchInputWrap);

  return searchWrap;
}

function handleOnLoad(e) {
  const searchSection = createSearchSection();
  document.getElementById("root").appendChild(searchSection);
  console.log("Search section loaded");
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

// Function for creating div with class container:
function createDivWithClassContainer(className) {
  const div = document.createElement("div");
  div.classList.add("container");
  div.classList.add(className);
  return div;
}

addEventListener("load", handleOnLoad);

function handleOnInput(e) {
  const usersInput = e.target.value;
  const bckspaceIcon = document.getElementById("backspace-icon");
  // console.log(bckspaceIcon);
  if (usersInput != null) {
    bckspaceIcon.classList.add("visible-icon");
    bckspaceIcon.addEventListener("click", clearInputValue);
  }
  if (usersInput == "") {
    bckspaceIcon.classList.remove("visible-icon");
    bckspaceIcon.removeEventListener("click", clearInputValue);
  }
}

function clearInputValue(e) {
  // console.log(e.target);
  const element = e.target;
  const elToClear = document.getElementById("search-content");
  // console.log(elToClear.value);
  elToClear.value = "";
  element.classList.remove("visible-icon");
  const elementToShow = document.getElementById("swiper");
  elementToShow.style.display = "block";
}

function getUsersRequest(e) {
  // Click on Enter:
  const elementToSearch = document.getElementById("search-content");
  const elementToHide = document.getElementById("swiper");
  if (e.key === "Enter") {
    console.log("User clicked Enter:", elementToSearch.value);
    elementToHide.style.display = "none";
  }
  const iconElement = document.getElementById("search-input-wrap");
  // Click on the icon Search:
  if (e.target === iconElement) {
    console.log("User clicked on icon-search:", elementToSearch.value);
    elementToHide.style.display = "none"
  }
  
  return elementToSearch;
}
