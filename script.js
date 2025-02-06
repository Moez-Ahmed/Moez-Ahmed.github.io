document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    const projects = [
        { name: "Project 1", url: "https://github.com/yourusername/project1" },
        { name: "Project 2", url: "https://github.com/yourusername/project2" }
    ];

    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = project.url;
        a.textContent = project.name;
        li.appendChild(a);
        projectList.appendChild(li);
    });
});
