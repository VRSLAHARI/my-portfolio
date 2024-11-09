// Log your name to the console when the page loads
console.log("VELPULA R S LAHARI - Portfolio Loaded");

document.getElementById('skills-btn').addEventListener('click', function() {
    const skillsSection = document.getElementById('skills');
    skillsSection.classList.toggle('hidden');
    console.log("Skills section toggled!");  // Log when the Skills section is toggled
});

document.getElementById('projects-btn').addEventListener('click', function() {
    const projectsSection = document.getElementById('projects');
    projectsSection.classList.toggle('hidden');
    console.log("Projects section toggled!");  // Log when the Projects section is toggled
});





