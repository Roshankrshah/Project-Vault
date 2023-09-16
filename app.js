import data from './data.js';

const projectDOM = document.querySelector('.projects-center.fsa');

const displayProducts = ()=>{
    const projectList = data.map((project)=>{
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
                <a class="project-link" href="${url}" target="_blank"><i class="fa-solid fa-link"></i></a>
            </div>

        </footer>
    </article>`
    }).join('');

    projectDOM.innerHTML = `<div class="projects-container">
        ${projectList}
        </div>`
}

displayProducts();