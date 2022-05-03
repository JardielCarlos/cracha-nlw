const midia = {
  Github: "JardielCarlos",
  Instagram: "jardiel_carlos",
  Facebook: "jardiel.carlos.90"
}

function changeSocialMidia(){
  for (let li of socialLinks.children){
    const social = li.getAttribute("class")
    li.children[0].href = `https://${social}.com/${midia[social]}`
  }
}
changeSocialMidia()

const getProfileGitHub = () => {
  const url = `https://api.github.com/users/${midia.Github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userImage.src = data.avatar_url
        userLink.href = data.html_url
        userLogin.textContent = data.login
        userBio.textContent = data.bio
      })
}
getProfileGitHub()
