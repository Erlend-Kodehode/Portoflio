import projects from "./projects.js";

const navbar = document.querySelector("#navbar");
let currentSection = Math.round(window.scrollY / window.innerHeight);
navbar.children[currentSection].classList.add("highlighted");

window.addEventListener("scroll", () => {
  navbar.children[currentSection].classList.remove("highlighted");
  currentSection = Math.round(window.scrollY / window.innerHeight);
  navbar.children[currentSection].classList.add("highlighted");
});

const projectContainer = document.querySelector("#project-container");
projects.forEach(({ image, title, desc, tech, links }) => {
  const projectBox = document.createElement("div");
  const projectHover = document.createElement("div");
  projectHover.classList.add("project-hover");
  projectBox.addEventListener("mouseenter", () =>
    projectHover.classList.add("project-appear")
  );
  projectBox.addEventListener("mouseleave", () =>
    projectHover.classList.remove("project-appear")
  );

  if (links.figma) {
    const figmaIcon = document.createElement("img");
    figmaIcon.src = "./images/devicon--figma.svg";
    const figmaBtn = document.createElement("a");
    figmaBtn.href = links.figma;
    figmaBtn.textContent = "Figma";
    figmaBtn.prepend(figmaIcon);
    figmaBtn.classList.add("main-font");
    projectHover.append(figmaBtn);
  } else {
    const gitRepIcon = document.createElement("img");
    gitRepIcon.src = "./images/mdi--github.svg";
    const gitRepBtn = document.createElement("a");
    gitRepBtn.href = links.rep;
    gitRepBtn.textContent = "Repository";
    gitRepBtn.prepend(gitRepIcon);
    gitRepBtn.classList.add("main-font");
    const gitPagesIcon = document.createElement("img");
    gitPagesIcon.src = "./images/mdi--github.svg";
    const gitPagesBtn = document.createElement("a");
    gitPagesBtn.href = links.pages;
    gitPagesBtn.textContent = "Pages";
    gitPagesBtn.prepend(gitPagesIcon);
    gitPagesBtn.classList.add("main-font");
    projectHover.append(gitRepBtn, gitPagesBtn);
  }

  const projectImg = document.createElement("img");
  projectImg.src = `./images/projects/${image}`;
  const projectInfo = document.createElement("div");
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = title;
  projectTitle.classList.add("main-font");
  const projectDesc = document.createElement("p");
  projectDesc.textContent = desc;
  projectDesc.classList.add("main-font");
  projectInfo.classList.add("project-desc");
  const techContainer = document.createElement("div");
  tech.forEach((icon) => {
    const techIcon = document.createElement("img");
    techIcon.src = `./images/${icon}`;
    techContainer.append(techIcon);
  });
  techContainer.classList.add("tech-container");
  projectInfo.append(projectTitle, projectDesc);
  projectBox.append(projectImg, projectInfo, techContainer, projectHover);
  projectContainer.append(projectBox);
});

const conactBtn = document.querySelector("#contact-btn");
const contactInfo = document.querySelector("#contact-info");
let hoveringLink = false;

conactBtn.addEventListener("click", () => {
  contactInfo.showModal();
  contactInfo.classList.toggle("contact-slide-inn");
  document.body.addEventListener("mousedown", closeModal);
});

function closeModal() {
  if (hoveringLink) return;
  document.body.removeEventListener("mousedown", closeModal);
  contactInfo.classList.toggle("contact-slide-inn");
  contactInfo.classList.toggle("contact-slide-out");
}

contactInfo.addEventListener("animationend", (e) => {
  if (e.animationName !== "slide-out") return;
  contactInfo.close();
  contactInfo.classList.toggle("contact-slide-out");
});

const links = document.getElementsByClassName("contact-link");

for (const link of links) {
  link.addEventListener("mouseenter", () => (hoveringLink = true));
  link.addEventListener("mouseleave", () => (hoveringLink = false));
}
