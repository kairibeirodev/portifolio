const elemProjects = document.getElementById('project_content')

const createImage = (image, name) => {
    const elemPicture = document.createElement('picture')
    const elemImg = document.createElement('img')
    elemImg.setAttribute('src', image)
    elemImg.setAttribute('alt', name)

    elemPicture.appendChild(elemImg)

    return elemPicture
}

const createStrong = (projectName) => {
    const elemStrong = document.createElement('strong')
    elemStrong.innerText = projectName 

    return elemStrong 
}

const createTags = (projectTags) => {
    const elemTags = document.createElement('div')
    elemTags.classList.add('tags') 
    projectTags.forEach(tag => {
        if (tag) {
            const elemTag = document.createElement('span')
            elemTag.innerText = tag 
            elemTags.appendChild(elemTag)
        }
    })
    return elemTags
}

const createProject =(project) => {
    const elemProject = document.createElement('a')
            elemProject.setAttribute('href', project.link || '#')
            elemProject.setAttribute('target', '_blank')
            elemProject.classList.add('project')

            // Adiciona picture
            elemProject.appendChild(createImage(project.image, project.name))

            // Adiciona strong 
            elemProject.appendChild(createStrong(project.name))

            // Adiciona tags 
            elemProject.appendChild(createTags(project.tags))


            return elemProject
}


const loadProjects = (projects) => {
    projects.forEach(project => {
        if (project.name && project.image) { 
            elemProjects.appendChild(createProject(project))
        }
    });
}

fetch('./projects.json')
    .then(response => response.json())
    .then(loadProjects)
    .catch(error => console.error('Erro ao carregar projetos:', error))
