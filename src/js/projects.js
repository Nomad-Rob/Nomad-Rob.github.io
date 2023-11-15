document.addEventListener('DOMContentLoaded', function() {
  fetch('./projects.json')
      .then(response => response.json())
      .then(data => {
          createCards(data.projects);
      });
});

function createCards(projects) {
  const container = document.getElementById('projects-container');

  // Create an array to store the promises for loading the images
  const promises = [];

  projects.forEach(project => {
    // Create a promise for loading the image
    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve();
      };
      img.onerror = () => {
        reject();
      };
      img.src = project.imageLink;
    });

    // Add the promise to the array
    promises.push(promise);

    container.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card h-100 shadow">
          <img src="${project.image}" class="card-img-top">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <div class="mt-auto">
              <a href="${project.githubLink}" class="btn btn-primary align-self-start">GitHub</a>
            </div>
          </div>
        </div>
      </div>`;
  });

  // Wait for all the promises to resolve before displaying the images
  Promise.all(promises).then(() => {
    // Loop through the projects array and display the images
    const projectsDiv = document.getElementById('projects');
    projects.forEach(project => {
      const img = document.createElement('img');
      img.src = project.image;
      projectsDiv.appendChild(img);
    });
  });

  // Add placeholders for the remaining cards
  for (let i = projects.length; i < 6; i++) {
    container.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card h-100 shadow">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Coming Soon</h5>
            <p class="card-text">This project is under development.</p>
            <div class="mt-auto">
              <a href="#" class="btn btn-primary align-self-start disabled">GitHub</a>
            </div>
          </div>
        </div>
      </div>`;
  }
}
