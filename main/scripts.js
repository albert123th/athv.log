document.addEventListener('DOMContentLoaded', () => {
    const githubUsername = 'albert123th';  // Replace with your GitHub username
    const linkedinUsername = 'albert-thomas-0ab975316';  // Replace with your LinkedIn username
    const instaUsername = 'athv365_alb';  // Replace with your Instagram username

    // Fetch GitHub user data
    fetch(`https://api.github.com/users/${githubUsername}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('profile-pic').src = data.avatar_url;
            document.getElementById('name').textContent = data.name || data.login;
            document.getElementById('bio').textContent = data.bio;

            // Set social media links
            const githubLink = document.getElementById('github-link');
            const linkedinLink = document.getElementById('linkedin-link');
            const instaLink = document.getElementById('insta-link');

            githubLink.href = data.html_url;
            linkedinLink.href = `https://linkedin.com/in/${linkedinUsername}`;
            instaLink.href = `https://www.instagram.com/${instaUsername}`;

            console.log('GitHub link:', githubLink.href);
            console.log('LinkedIn link:', linkedinLink.href);
            console.log('Instagram link:', instaLink.href);
        })
        .catch(error => console.error('Error fetching GitHub data:', error));
});
