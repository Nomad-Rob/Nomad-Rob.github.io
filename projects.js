let allProjects = [];

fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        allProjects = data.projectsData;
        displayProjects(allProjects);
    })
    .catch(error => console.error('Error fetching data:', error));

function filterProjects(type) {
    const filteredProjects = type === 'all' ? allProjects : allProjects.filter(project => project.type === type);
    displayProjects(filteredProjects);
}

function displayProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = ''; // Clear existing content

    projects.forEach((project, index) => {
        const cardHtml = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card" data-index="${index}" style="background-color: white;">
                    <img src="${project.imageLink}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <button class="btn btn-primary show-details-btn" style="background-color: rgba(241, 128, 45, 0.7); border: 1px solid black; color: black; font-weight: 500;">Show Details</button>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += cardHtml;
    });

    addEventListenersToButtons();
}

function addEventListenersToButtons() {
    document.querySelectorAll('.show-details-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            showProjectDetails(event.target.closest('.card').dataset.index);
        });
    });
}

function showProjectDetails(index) {
    const project = allProjects[index];
    const projectsContainer = document.getElementById('projects-container');
    const detailedCardHtml = `
        <div class="detailed-card">
            <img src="${project.imageLink}" class="card-img-top" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>Tools Used: ${project.tools.join(', ')}</p>
            <button class="btn btn-primary" style="background-color: rgba(241, 128, 45, 0.7); border: 1px solid black; color: black; font-weight: 500;" onclick="window.open('${project.githubLink}', '_blank')">GitHub</button>
            <button class="btn btn-secondary" style="background-color: rgba(241, 128, 45, 0.7); border: 1px solid black; color: black; font-weight: 500;" onclick="hideProjectDetails()">Exit</button>
        </div>
    `;

    projectsContainer.insertAdjacentHTML('beforeend', detailedCardHtml);
    projectsContainer.classList.add('blurry');
}

function hideProjectDetails() {
    const detailedCard = document.querySelector('.detailed-card');
    detailedCard.remove();
    document.getElementById('projects-container').classList.remove('blurry');
}
