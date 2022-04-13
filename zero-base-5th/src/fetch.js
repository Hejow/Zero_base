const CLIENT_ID = "Iv1.b854c0edc5532037";
const CLIENT_SECRET = "25c0390153bca129e1c0c7dd8b67085ebd1044bc";

export function fetchUser(userName) {
  return fetch(`https://api.github.com/users/${userName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  ).then(res => {
    if (res.status === 200) {
      return res.json();
    }
  });
}

export function fetchRepos(userName) {
  return fetch(`https://api.github.com/users/${userName}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  ).then(res => {
    return res.json();
  });
}

export function fetchRepoLanguage(userName, repoName) {
  return fetch(`https://api.github.com/repos/${userName}/${repoName}/languages?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  ).then(res => {
    return res.json();
  });
}