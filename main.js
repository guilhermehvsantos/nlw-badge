const links = {
    github: 'GuilhermeHVSantos',
    linkedin: 'in/guilhermehvs',
    facebook: 'guilhermehvsantos',
    instagram: 'guilherme_hvs',
    codepen: 'guilhermehvsantos',
}

function changeLinks () {
    for ( let li of socialLinks.children) {
        const social = li.getAttribute('class')
        
        li.children[0].href = `https://${social}.com/${links[social]}`

    }
}

changeLinks()

function getUser() {
    const url = `https://api.github.com/users/${links.github}`

        fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.userName
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login

        })
}

getUser()