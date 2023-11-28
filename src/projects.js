// Fetch data from projects.json
fetch('projects.json')
  .then((response) => response.json())
  .then((data) => {
    const projectsContainer = document.getElementById('projects-container');

    // Loop through the projects and create cards
    data.projectsData.forEach((project) => {
      const cardHtml = `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card">
            <img src="${project.imageLink}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.description}</p>
              <button class="btn btn-primary" onclick="window.open('${project.githubLink}', '_blank')" style="background-color: rgba(241, 128, 45, 0.7); color: black; border-color: black;">GitHub</button>
            </div>
          </div>
        </div>
      `;

      projectsContainer.innerHTML += cardHtml;
    });
  })
  .catch((error) => console.error('Error fetching data:', error));
