const post = [{
        id: 1,
        testo: 'Meglio sordo che sentire un\'altra volta  una canzone dei Maneskin.',
        image: '',
        avatar: 'https://www.21secolo.news/wp-content/uploads/2020/03/Beethoven.jpg',
        autore: 'Ludwig van Beethoven',
        likes: 1796,
        data: '01/01/2022'
    },
    {
        id: 2,
        testo: 'Slap that bass!',
        image: 'https://www.mezzo.tv/ressources/programs/65/1600x1000-91f1a29-4457-P10066696.jpeg',
        avatar: 'https://media.resources.festicket.com/www/artists/33503352_10157034016585190_1810941499722956800_o.jpg',
        likes: 180,
        autore: 'Marcus Miller',
        data: '03/21/2022'
    }
]

console.log(post)

const user_posts = document.getElementById('posts')
for (let i = 0; i < post.length; i++) {
    let user_post = post[i]
    divElement = document.createElement('div')
    user_posts.append(divElement)
    divElement.innerHTML = `<div class="post_utente bg-white p-2 mb-5">
    <div class="d-flex mb-3">
    <img class="rounded-circle me-3" src="${user_post.avatar}" style="width:50px; height:50px">
    
    <div>
    <div class="name text-dark fw-bold">${user_post.autore}</div>
    <div class="date fw-6 text-secondary">${user_post.data}</div>
    </div>
    </div>
    <p class="fs-5">${user_post.testo}</p>

    <div class="image_container">
    <img class="me-3" src="${user_post.image}" style="width: 100%">
    </div>
    </div>
    `
}