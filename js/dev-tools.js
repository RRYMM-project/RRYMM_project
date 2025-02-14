let devTools = [
  {
    name: "HTML",
    description:
      "HTML or Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.",
    icon: "url('../images/icon-html.svg')",
    iconWidth: "2.625rem",
  },
  {
    name: "CSS",
    description:
      "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
    icon: "url('../images/icon-css.svg')",
    iconWidth: "1.125rem",
  },
  {
    name: "SQL",
    description: "",
    icon: "",
    iconWidth: "1.125rem",
  },
  {
    name: "Python",
    description: "",
    icon: "",
    iconWidth: "1.125rem",
  },
  {
    name: "GitHub",
    description: "",
    icon: "",
    iconWidth: "1.125rem",
  },
  {
    name: "Trello",
    description: "",
    icon: "",
    iconWidth: "1.125rem",
  },
  {
    name: "Figma",
    description: "",
    icon: "",
    iconWidth: "1.125rem",
  },
  {
    name: "JavaScript",
    description: "",
    icon: "",
    iconWidth: "1.125rem",
  },
  {
    name: "PHP",
    description: "",
    icon: "",
    iconWidth: "1.125rem",
  },
];

console.log(devTools[0].name);
console.log(devTools[1].description);

function handleOnLoad(e) {
    const container = createToolsSection();
    document.getElementById("root").appendChild(container);
    
}

function createToolsSection() {

    const toolsSectionDiv = document.createElement("div");
    toolsSectionDiv.classList.add("container");
    toolsSectionDiv.classList.add("tools-section");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-container");
    const h2 = document.createElement("h2");
    h2.classList.add("tools-title");
    h2.innerText = "The magical word of programming";
    titleDiv.appendChild(h2);

    const gridContainerDiv = document.createElement("div");
    gridContainerDiv.classList.add("tools-grid-container");
    devTools.forEach(tool => {
        const nameTool = tool.name;
        console.log("Tools name is", nameTool);
        const href = "#" + nameTool.toLowerCase();
        console.log("Href is", href);
        let className = "grid-item";
        const gridItem = createGridItem(nameTool,href,className);
        gridContainerDiv.appendChild(gridItem);
    });

    toolsSectionDiv.appendChild(titleDiv);
    toolsSectionDiv.appendChild(gridContainerDiv);
    
    return toolsSectionDiv;
}

// Function for creating div with teg a:
function createGridItem(nameTool, href, className) {
    const div = document.createElement("div");
    div.classList.add(className);
    const link = document.createElement("a");
    link.setAttribute("href", href);
    link.innerText = nameTool;
    div.appendChild(link);
    return div;
    };

addEventListener("load", handleOnLoad);