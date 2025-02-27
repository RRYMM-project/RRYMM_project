import { devTools } from "./data.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

function handleOnLoad(e) {
  const toolsSection = createToolsSection();
  document.getElementById("root").appendChild(toolsSection);
  const sliderSection = createSliderSection();
  document.getElementById("root").appendChild(sliderSection);

  const swiperContainer = document.querySelector(".swiper");
    if (!swiperContainer) {
        console.error("❌ Error: .swiper not found!");
        return;  
    }
 
    const swiper = new Swiper(".swiper", {
      on: {
          init: function () {
            console.log('swiper initialized');
          },
        },
      direction: "horizontal",
      loop: true,
      roundLengths: true,
  
      pagination:{
          el: ".swiper-pagination",
          clickable: true,
      },
  
      navigation:{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
      },
      slidesPerView: "auto",
      speed: 1000,
      keyboard:true,
      breakpoints:{
          1300:{
              slidesPerView:2,
              spaceBetween: 15,
          },
          1600:{
              spaceBetween: 25,
          },
          1700:{
              slidesPerView:3,
              spaceBetween: 10,
          },
      }
  });   
  // console.log(typeof Swiper);
}

function createToolsSection() {
  const toolsSectionDiv = createDivWithClassContainer("tools-section");

  const titleDiv = createTitleDiv("The magical world of programming", null);

  const gridContainerDiv = document.createElement("div");
  gridContainerDiv.classList.add("tools-grid-container");
  devTools.forEach((tool) => {
    const nameTool = tool.name;
    // console.log("Tools name is", nameTool);
    const href = "#" + nameTool.toLowerCase();
    // console.log("Href is", href);
    let className = "grid-item";
    const gridItem = createGridItem(nameTool, href, className);
    gridContainerDiv.appendChild(gridItem);
  });

  toolsSectionDiv.appendChild(titleDiv);
  toolsSectionDiv.appendChild(gridContainerDiv);

  return toolsSectionDiv; //AFTER SEARCH SECTION
}

function createSliderSection() {
  const sliderDiv = createDivWithClassContainer("tools-slider-container");
  const titleDiv = createTitleDiv(
    "Let's explore developer tools together",
    "slider-title"
  );

  const swiper = createDivWithClassAndId("swiper", "swiper");
  // console.log("!!!!!!!!!!!!!!!", swiper);
  const swiperWrapper = createDivWithClassAndId("swiper-wrapper", null);

  let indexTool = 0;
  devTools.forEach((tool) => {
    // console.log(tool);
    // console.log(indexTool);
    const idValue = tool.name.toLocaleLowerCase();
    const swiperSlide = createSwiperSlide(idValue, indexTool);
    swiperWrapper.appendChild(swiperSlide);
    indexTool = indexTool + 1;
  });
  swiper.appendChild(swiperWrapper);

  const swiperBtnWrNext = createDivWithClassAndId(
    "swiper-button-wrapper",
    null
  );
  swiperBtnWrNext.classList.add("swiper-button-wrapper-next");
  const swiperBtnNext = createDivWithClassAndId("swiper-button-next", null);
  swiperBtnWrNext.appendChild(swiperBtnNext);
  const swiperBtnWrPrev = createDivWithClassAndId(
    "swiper-button-wrapper",
    null
  );
  swiperBtnWrPrev.classList.add("swiper-button-wrapper-prev");
  const swiperBtnPrev = createDivWithClassAndId("swiper-button-prev");
  swiperBtnWrPrev.appendChild(swiperBtnPrev);
  const swiperPagination = createDivWithClassAndId("swiper-pagination", null);

  sliderDiv.appendChild(titleDiv);
  swiper.appendChild(swiperPagination);
  swiper.appendChild(swiperBtnWrPrev);
  swiper.appendChild(swiperBtnWrNext);

  sliderDiv.appendChild(swiper);

  return sliderDiv; // AFTER toolsSectionDiv
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

// Function for creating div with tag a:
function createGridItem(nameTool, href, className) {
  const div = document.createElement("div");
  div.classList.add(className);
  const link = document.createElement("a");
  link.setAttribute("href", href);
  link.innerText = nameTool;
  div.appendChild(link);
  return div;
}

// Function for creating div with class container:
function createDivWithClassContainer(className) {
  const div = document.createElement("div");
  div.classList.add("container");
  div.classList.add(className);
  return div;
}

// Function for creating div with Title h2:
function createTitleDiv(text, extraClass = "") {
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title-container");
  const h2 = document.createElement("h2");
  h2.classList.add("tools-title");
  if (extraClass) {
    h2.classList.add(extraClass);
  }
  h2.innerText = text;
  titleDiv.appendChild(h2);
  return titleDiv;
}

//Function for creating swiper slide:
function createSwiperSlide(idValue, index) {
  const swiperSlide = createDivWithClassAndId("swiper-slide", null);
  const swiperCard = createDivWithClassAndId("slide-card", idValue);

  const cardLinks = createDivWithClassAndId("card-links", null);
  const cardLinksWrapper = createDivWithClassAndId("card-links-wrapper");
  const cardTitleH3 = document.createElement("h3");
  cardTitleH3.classList.add("slide-card-title");
  cardTitleH3.innerText = "Useful links";
  cardLinksWrapper.appendChild(cardTitleH3);

  //Creating section with source and links
  const sourceList = document.createElement("ol");
  sourceList.classList.add("card-link-list");

  const devTool = devTools[index];
  const sources = devTool.usefulLinks;
  // console.log(devTool);
  const amountOfSources = sources.length;
  // console.log("Amount of links:", amountOfSources);

  sources.forEach((source) => {
    const cardListItem = document.createElement("li");
    cardListItem.classList.add("card-link-item");

    const itemName = document.createElement("p");
    itemName.classList.add("link-item-name");
    itemName.innerText = source.nameLink;
    cardListItem.appendChild(itemName);

    const itemHref = document.createElement("a");
    itemHref.setAttribute("target", "_blank");
    const hrefLink = source.link;
    itemHref.setAttribute("href", hrefLink);
    itemHref.innerText = hrefLink;
    cardListItem.appendChild(itemHref);

    sourceList.appendChild(cardListItem);
  });

  cardLinksWrapper.appendChild(sourceList);

  const cardLinkBtn = document.createElement("button");
  cardLinkBtn.classList.add("card-link-list-btn");
  cardLinkBtn.innerText = "Learn more";
  cardLinks.appendChild(cardLinksWrapper);
  if (amountOfSources > 2) {
    cardLinks.appendChild(cardLinkBtn);
  }

  const cardDescript = createDivWithClassAndId("slide-card-descript", null);
  const slideCardTitle = document.createElement("h3");
  const iconExtraStyle = "icon-" + devTool.name.toLocaleLowerCase();
  slideCardTitle.classList.add("slide-card-title", "icon", iconExtraStyle);
  slideCardTitle.innerText = devTool.name;
  const descriptText = document.createElement("p");
  descriptText.classList.add("card-descript-text");
  descriptText.innerText = devTool.description;
  cardDescript.appendChild(slideCardTitle);
  cardDescript.appendChild(descriptText);

  swiperCard.appendChild(cardLinks);

  swiperCard.appendChild(cardDescript);
  swiperSlide.appendChild(swiperCard);

  return swiperSlide;
}

addEventListener("load", handleOnLoad);
