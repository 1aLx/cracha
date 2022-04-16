const SocialMediaLinks = {
    github: "1alx",
    instagram: "1xandele",
    linkedIn: "in/alexandreabreu1995/",
    facebook: "profile.php?id=100008623936016",
}

function changeSocialMediaLinks() {
    
    for (let li of socialLinks.children) {
        
        const socials = li.getAttribute('class')
        
        li.children[0].href = `https://${socials}.com/${SocialMediaLinks[socials]}`
        
        //alert(li.children[0].href)
    }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
    
    const url = `https://api.github.com/users/${SocialMediaLinks.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBiography.textContent = data.bio
        userLinkGitHub.href = data.html_url
        userLogin.textContent = data.login
    })
}

getGithubProfileInfos()

//FUNÇÂO NORMAL
//function nomeDaFuncao(argumento){
// }

//ARROW FUNCTIONS (função anonima)
// argumento => {
// }
