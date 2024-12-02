const git_username= document.getElementById('github-username')
const git_button = document.querySelector('.git-btn')


 git_button.addEventListener('click',()=>{
    const git_username_vaule = git_username.value.trim()
    if (!git_username_vaule) {
        alert('Enter an userName.')
        return
    }else{

        fetch(`https://api.github.com/users/${git_username_vaule}`)
        .then(response =>{
            if (!response.ok) {
                throw new Error('Network not responding')
            } else {
                return response.json()
            }
        })
        .then(data=>{
            displayProfile(data)
        })
        .catch(err =>{
            console.error('There was some problem with fetching the data:',err)
        })



    console.log(git_username_vaule);
    console.log('Hiiii');
    }
    
})

function displayProfile(data) {
    const renderHtml = document.getElementById('profileCard')
   renderHtml.innerHTML=''
    renderHtml.innerHTML = `
        <img src="${data.avatar_url}" alt="Profile avatar">
            <h1>${data.login}</h1>
            <p>Location : ${data.location}</p>
            <h2>User Type : ${data.user_view_type}</h2>
            <h3>Total Repositories : ${data.public_repos}</h3>
            <div class="foll">
                 <span>Followings : ${data.following}</span>
                 <span>Followers : ${data.followers}</span>
            </div>
            <button class="View-profile"><a href='${data.html_url}'>View Profile </a></button>
            <p>
                <span>Sinces</span>
                <span>${data.created_at}</span>
            
            </p>`
}