function loadGitHubStats(username) {
  var statsImageUrl = "https://github-readme-stats.vercel.app/api?username=" + username + "&show_icons=true";
  var imgElement = document.createElement('img');
  imgElement.src = statsImageUrl;
  imgElement.alt = 'GitHub Stats';

  document.getElementById('github-stats').appendChild(imgElement);
}

loadGitHubStats('Nomad-Rob');
