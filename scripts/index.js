const elemProjects = document.getElementById('project_content');

const createImage = (image, name) => {
    const elemPicture = document.createElement('picture');
    const elemImg = document.createElement('img');
    elemImg.setAttribute('src', image);
    elemImg.setAttribute('alt', name);

    elemPicture.appendChild(elemImg);

    return elemPicture;
}

const createStrong = (projectName) => {
    const elemStrong = document.createElement('strong');
    elemStrong.innerText = projectName;

    return elemStrong;
}

const createTags = (projectTags) => {
    const elemTags = document.createElement('div');
    elemTags.classList.add('tags');
    projectTags.forEach(tag => {
        if (tag) {
            const elemTag = document.createElement('span');
            elemTag.innerText = tag;
            elemTags.appendChild(elemTag);
        }
    });
    return elemTags;
}

const createProject = (project, index) => {
    const elemProject = document.createElement('a');
    elemProject.setAttribute('href', project.link || '#');
    elemProject.setAttribute('target', '_blank');
    elemProject.classList.add('project');

    // Configurações de animação AOS
    elemProject.setAttribute('data-aos', 'zoom-in-up');
    elemProject.setAttribute('data-aos-duration', '800');
    elemProject.setAttribute('data-aos-easing', 'ease-in-out');
    elemProject.setAttribute('data-aos-offset', '-100');
    elemProject.setAttribute('data-aos-delay', 300 * (index +1));

    // Adiciona o conteúdo ao projeto
    elemProject.appendChild(createImage(project.image, project.name));
    elemProject.appendChild(createStrong(project.name));
    elemProject.appendChild(createTags(project.tags));

    return elemProject;
}

const loadProjects = (projects) => {
    projects.forEach(project => {
        elemProjects.appendChild(createProject(project));
    });
}

fetch('./projects.json')
    .then(response => response.json())
    .then(loadProjects)
    .catch(error => console.error('Erro ao carregar projetos:', error));
