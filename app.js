import apiProjects from './data/apiprojects.js';
import fullStackProjects from './data/fullstackproject.js';
import backendProjects from './data/backend.js';

const jxaContainer = document.querySelector('.projects-center.jxa');
const fullStackContainer = document.querySelector('.projects-center.fullstack');
const backendContainer = document.querySelector('.projects-center.backend');

const displayProjects = (data) => {
    const projectList = data.map((project) => {
        const title = project.title;
        const imgPath = project.imgPath;
        const gitLink = project.gitLink;
        const url = project.url;
        const color = project.color;

        return `
            <article class="project">
                <div class="img-container" style="background-color : ${color};">
                    <img src=${imgPath} alt="" class="project-img img">
                </div>
                <footer class="project-footer">
                    <h5 class="project-name">${title}</h5>
                    <div class="icons">
                        <a class="project-link" href="${gitLink}" target="_blank"><i class="fa-brands fa-github"></i></a>
                        ${(url === '#') ?
                `<a class="project-link url disabled" href="${url}"><i class="fa-solid fa-link"></i></a>` :
                `<a class="project-link url" href="${url}" target="_blank"><i class="fa-solid fa-link"></i></a>`
            }
                        
                    </div>
                </footer>
            </article>`;

    }).join('');

    return projectList;
}

const start = () => {
    let projectList = displayProjects(apiProjects);
    jxaContainer.innerHTML = `
        <div class="projects-container">
            ${projectList}
        </div>`;

    projectList = displayProjects(fullStackProjects);
    fullStackContainer.innerHTML = `
        <div class="projects-container">
            ${projectList}
        </div>`;

    projectList = displayProjects(backendProjects);
    backendContainer.innerHTML = `
            <div class="projects-container">
                ${projectList}
            </div>`;
}

start();