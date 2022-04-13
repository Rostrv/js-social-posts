const post = [{
        id: 0,
        testo: 'Meglio sordo che sentire un\'altra volta  una canzone dei Maneskin.',
        image: '',
        avatar: 'https://www.21secolo.news/wp-content/uploads/2020/03/Beethoven.jpg',
        autore: 'Ludwig van Beethoven',
        likes: 1796,
        data: '01/01/2022'
    },
    {
        id: 1,
        testo: 'Slap that bass!',
        image: 'https://www.mezzo.tv/ressources/programs/65/1600x1000-91f1a29-4457-P10066696.jpeg',
        avatar: 'https://media.resources.festicket.com/www/artists/33503352_10157034016585190_1810941499722956800_o.jpg',
        likes: 180,
        autore: 'Marcus Miller',
        data: '03/21/2022'
    },
    {
        id: 2,
        testo: 'Slap that bass!',
        image: 'https://www.mezzo.tv/ressources/programs/65/1600x1000-91f1a29-4457-P10066696.jpeg',
        avatar: 'https://media.resources.festicket.com/www/artists/33503352_10157034016585190_1810941499722956800_o.jpg',
        likes: 180,
        autore: 'Marcus Miller',
        data: '03/21/2022'
    },
    {
        id: 3,
        testo: 'Slap that bass!',
        image: 'https://www.mezzo.tv/ressources/programs/65/1600x1000-91f1a29-4457-P10066696.jpeg',
        avatar: '',
        likes: 180,
        autore: 'Marcus Miller',
        data: '03/21/2022'
    }


]

console.log(post)

const user_posts = document.getElementById('posts')
let user_post
let click = []
let id_likes = []


for (let i = 0; i < post.length; i++) {
    user_post = post[i]
    click.push({ clicked: 0, likes: user_post.likes })
    divElement = document.createElement('div')
    user_posts.append(divElement)
    divElement.innerHTML = `<div class="post_utente bg-white p-2 mb-5">
    <div class="d-flex mb-3">
    <img class="rounded-circle me-3" src="${user_post.avatar}" style="width:50px; height:50px"></img>
    <div>
    <div class="name text-dark fw-bold">${user_post.autore}</div>
    <div class="date fw-6 text-secondary">${user_post.data}</div>
    </div>
    </div>
    <p class="fs-5">${user_post.testo}</p>

    <div class="image_container">
    <img class="me-3 mb-5" src="${user_post.image}" style="width: 100%">
    </div>

    <div class="d-flex justify-content-around align-items-start">
    <button id="btn_${user_post.id}" onclick="addLike(${user_post.id})" class="like border-0 bg-white">
    <i class="fa-solid fa-thumbs-up fa-xl me-2">
    </i>Mi piace
    </button>
    <p>Piace a <span id="like_${user_post.id}" class="fw-bold">${user_post.likes}</span> persone</p>
    </div>
    
    </div>
    `
}


function addLike(id) {

    if (click[id].clicked == 0) {
        document.getElementById('btn_' + id).style.color = '#0084FF'
        click[id].clicked = 1
        click[id].likes = click[id].likes + 1
        document.getElementById('like_' + id).innerHTML = click[id].likes
        console.log('like')
        id_likes.push(id)

    } else {
        document.getElementById('btn_' + id).style.color = 'black'
        click[id].clicked = 0
        click[id].likes = click[id].likes - 1
        document.getElementById('like_' + id).innerHTML = click[id].likes
        console.log('unlike')
    }

}

console.log(click)