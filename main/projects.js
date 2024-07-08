document.addEventListener('DOMContentLoaded', () => {
    const githubUsername = 'albert123th';  // Replace with your GitHub username
    // const insta_Username = 'athv365';

    // Fetch GitHub repositories
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => response.json())
        .then(repos => {
            const projectsList = document.getElementById('projects');
            repos.forEach(repo => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.target = '_blank';
                link.textContent = repo.name;
                listItem.appendChild(link);
                projectsList.appendChild(listItem);
            });
        });
});
