import apiProjects from './data/apiprojects.js';
import fullStackProjects from './data/fullstackproject.js';
import backendProjects from './data/backend.js';
import domProjects from './data/domProject.js';

const jxaContainer = document.querySelector('.projects-center.jxa');
const fullStackContainer = document.querySelector('.projects-center.fullstack');
const backendContainer = document.querySelector('.projects-center.backend');
const jsdContainer = document.querySelector('.projects-center.jsd');
const fsdBtn = document.getElementById('fsd');
const beBtn = document.getElementById('be');
const jsxBtn = document.getElementById('jsx');
const jsdBtn = document.getElementById('jsd');
const toggleBtn = document.getElementById('slider');

toggleBtn.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark-theme');
})

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

let jxa_itr = 6, fs_itr = 6, b_itr = 6, jsd_itr = 6;


fsdBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if ((fs_itr + 6) < fullStackProjects.length)
        fs_itr += 6;
    else {
        fs_itr = fullStackProjects.length;
        fsdBtn.remove();
    }

    let projectList = displayProjects(fullStackProjects.slice(0, fs_itr));
    fullStackContainer.innerHTML = `
        <div class="projects-container">
            ${projectList}
        </div>`;
});

beBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if ((b_itr + 6) < backendProjects.length)
        b_itr += 6;
    else {
        b_itr = backendProjects.length;
        beBtn.remove();
    }

    let projectList = displayProjects(backendProjects.slice(0, b_itr));
    backendContainer.innerHTML = `
        <div class="projects-container">
            ${projectList}
        </div>`;
});

jsxBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if ((jxa_itr + 6) < apiProjects.length)
        jxa_itr += 6;
    else {
        jxa_itr = apiProjects.length;
        jsxBtn.remove();
    }

    let projectList = displayProjects(apiProjects.slice(0, jxa_itr));
    jxaContainer.innerHTML = `
        <div class="projects-container">
            ${projectList}
        </div>`;
});

jsdBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if ((jsd_itr + 6) < domProjects.length)
        jsd_itr += 6;
    else {
        jsd_itr = domProjects.length;
        jsdBtn.remove();
    }

    let projectList = displayProjects(domProjects.slice(0, jsd_itr));
    jsdContainer.innerHTML = `
        <div class="projects-container">
            ${projectList}
        </div>`;
});

const start = () => {
    let projectList = displayProjects(apiProjects.slice(0, jxa_itr));
    jxaContainer.innerHTML = `
        <div class="projects-container">
            ${projectList}
        </div>`;

    projectList = displayProjects(fullStackProjects.slice(0, fs_itr));
    fullStackContainer.innerHTML = `
        <div class="projects-container">
            ${projectList}
        </div>`;

    projectList = displayProjects(backendProjects.slice(0, b_itr));
    backendContainer.innerHTML = `
        <div class="projects-container">
            ${projectList}
        </div>`;

    projectList = displayProjects(domProjects.slice(0, jsd_itr));
    jsdContainer.innerHTML = `
        <div class="projects-container">
            ${projectList}
        </div>`;
}

start();