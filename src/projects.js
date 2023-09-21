// Wait for the document to be fully loaded before executing JavaScript
$(document).ready(function () {
    // Define an array of project objects to be displayed
    const projects = [
        {
            backgroundURL: "https://raw.githubusercontent.com/Shadi-Shwiyat/Hack_Sprint-Breakfast/main/images/big%20game%20title.jpg",
            title: "Wes's Cozy Kitchen",
            description: "HackSprint Pygame!",
            link: "https://github.com/Nomad-Rob/Hack_Sprint-Breakfast"
        },
        {
            backgroundURL: "https://raw.githubusercontent.com/Nomad-Rob/Nomad-Rob.github.io/main/src/assets/simple_shell.png",
            title: "Simple Shell Project",
            description: "UNIX Command Interpreter written in C!",
            link: "https://github.com/Nomad-Rob/holbertonschool-simple_shell"
        },
        {
            backgroundURL: "https://raw.githubusercontent.com/Nomad-Rob/Nomad-Rob.github.io/main/src/assets/mysql.png",
            title: "Job Applications",
            description: "Keep track of all your apps!",
            link: "https://github.com/Nomad-Rob/job_tracker"
        },
        {
            backgroundURL: "https://raw.githubusercontent.com/Nomad-Rob/Nomad-Rob.github.io/main/src/assets/airbnb.png",
            title: "AirBnB Clone",
            description: "A clone to showcase some skills!",
            link: "https://github.com/Nomad-Rob/holbertonschool-AirBnB_clone_v4"
        },
        {
            backgroundURL: "https://raw.githubusercontent.com/Nomad-Rob/Nomad-Rob.github.io/main/src/assets/simple_shell.png",
            title: "Placeholder",
            description: "For now",
            link: "https://github.com/Nomad-Rob/holbertonschool-AirBnB_clone_v4"
        }
    ];

    // Get the project container element by its ID
    const projectContainer = document.getElementById("projectContainer");

    // Loop through the projects array and generate project elements
    projects.forEach((project, index) => {
        // Create a new project element
        const projectElement = document.createElement("div");
        projectElement.classList.add("option");
        projectElement.style.setProperty("--optionBackground", `url(${project.backgroundURL})`);

        // Add the 'active' class to the first project element
        if (index === 0) {
            projectElement.classList.add("active");
        }

        // Set the inner HTML content for the project element
        projectElement.innerHTML = `
            <div class="label">
                <div class="icon">
                    <i class="fas fa-dice"></i>
                </div>
                <div class="info">
                    <div class="main">${project.title}</div>
                    <div class="main">${project.description}</div>
                    <a href="${project.link}" target="_blank" class="link-as-text">Check it out</a>
                </div>
            </div>
        `;

        // Append the project element to the project container
        projectContainer.appendChild(projectElement);
    });

    // Add click event handling to take user to url for each project
    $(".option").click(function () {
        // Remove the 'active' class from all project elements
        $(".option").removeClass("active");

        // Add the 'active' class to the clicked project element
        $(this).addClass("active");
    });
});
