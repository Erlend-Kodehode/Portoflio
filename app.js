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
projects.forEach(({ image, title, desc, tech }) => {
  const projectBox = document.createElement("div");
  const projectImg = document.createElement("img");
  projectImg.src = image;
  const projectInfo = document.createElement("div");
  const projectTitle = document.createElement("p");
  projectTitle.textContent = title;
  const projectDesc = document.createElement("p");
  projectDesc.textContent = desc;
  const techContainer = document.createElement("div");
  tech.forEach((icon) => {
    const techIcon = document.createElement("img");
    techIcon.src = `./images/${icon}`;
    techContainer.append(techIcon);
  });
  projectInfo.append(projectTitle, projectDesc);
  projectBox.append(projectImg, projectInfo, techContainer);
  projectContainer.append(projectBox);
});
