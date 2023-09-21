$(document).ready(function () {
    // Define an array of project objects, each containing information about a project
    const projects = [
        {
            backgroundURL: "https://raw.githubusercontent.com/Shadi-Shwiyat/Hack_Sprint-Breakfast/main/images/big%20game%20title.jpg",
            title: "Wes's Cozy Kitchen",
            description: "HackSprint Pygame!",
            link: "https://github.com/Nomad-Rob/Hack_Sprint-Breakfast",
            icon: "fas fa-dice" // Specify the icon for this project
        },
        {
            backgroundURL: "https://raw.githubusercontent.com/Nomad-Rob/Nomad-Rob.github.io/main/src/assets/simple_shell.png",
            title: "Simple Shell Project",
            description: "UNIX Command Interpreter written in C!",
            link: "https://github.com/Nomad-Rob/holbertonschool-simple_shell",
            icon: "fas fa-desktop" // Specify the icon for this project
        },
        {
            backgroundURL: "https://raw.githubusercontent.com/Nomad-Rob/Nomad-Rob.github.io/main/src/assets/mysql.png",
            title: "Job Applications",
            description: "Keep track of all your apps!",
            link: "https://github.com/Nomad-Rob/job_tracker",
            icon: "fas fa-database" // Specify the icon for this project
        },
        {
            backgroundURL: "https://raw.githubusercontent.com/Nomad-Rob/Nomad-Rob.github.io/main/src/assets/airbnb.png",
            title: "AirBnB Clone",
            description: "A clone to showcase some skills!",
            link: "https://github.com/Nomad-Rob/holbertonschool-AirBnB_clone_v4",
            icon: "fas fa-city" // Specify the icon for this project
        },
        {
            backgroundURL: "https://raw.githubusercontent.com/Nomad-Rob/Nomad-Rob.github.io/main/src/assets/simple_shell.png",
            title: "Placeholder",
            description: "For now",
            link: "https://github.com/Nomad-Rob/holbertonschool-AirBnB_clone_v4",
            icon: "fas fa-sun" // Specify the icon for this project
        }
    ];

    const projectContainer = document.getElementById("projectContainer");

    // Loop through the project objects and create elements for each project
    projects.forEach((project, index) => {
        const projectElement = createProjectElement(project, index === 0);
        projectContainer.appendChild(projectElement);
    });

    $(".option").click(function () {
        // Handle the click event for project elements
        $(".option").removeClass("active");
        $(this).addClass("active");
    });
    
    // Function to create a project element based on the project object
    function createProjectElement(project, isActive) {
        // Create a new div element to represent the project
        const projectElement = document.createElement("div");

        // Add the "option" class to the project element
        projectElement.classList.add("option");

        // Set the background image of the project element based on the project's backgroundURL
        projectElement.style.setProperty("--optionBackground", `url(${project.backgroundURL})`);

        // If the project is the active one (clicked), add the "active" class
        if (isActive) {
            projectElement.classList.add("active");
        }

        // Create the HTML structure for a project element to be displayed
        projectElement.innerHTML = `
            <div class="label">
                <div class="icon">
                    <i class="${project.icon}"></i> <!-- Use the specified icon for this project -->
                </div>
                <div class="info">
                    <div class="main">${project.title}</div>
                    <div class="main">${project.description}</div>
                    <a href="${project.link}" target="_blank" class="link-as-text">Check it out</a>
                </div>
            </div>
        `;

        return projectElement;
    }
});
