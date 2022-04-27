const formButton = document.querySelector('.main__form button');
const formTextArea = document.querySelector('#tweetContent');
const feed = document.querySelector('.main__listTweets');


function pegarTweet(event){
    event.preventDefault();
    const tweetTextArea = formTextArea.value;


    if(formTextArea.value !== ""){
        criarTweet(tweetTextArea);
    }else{
        return false;
    }
    
}

function mudarCor(e){
    e.preventDefault();
    formButton.classList.toggle("toggleButton");
}

formTextArea.addEventListener('focus', mudarCor)
formTextArea.addEventListener('focusout', mudarCor) 
formButton.addEventListener('click', pegarTweet); 


function criarTweet(tweetText){
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds()


    const tweet = {
        nome: 'Daniel ',
        verificado:'./assets/img/verificado.png.png',
        foto: './assets/img/ProfilePic.png',
        nomeUsuario: '&nbsp;&commat;danielkenzie&nbsp;&middot;&nbsp;',
        texto: tweetText,
        tempo: `Now`,
        iconreply:'./assets/img/reply.png',
        iconretweet:'./assets/img/retweet-icon.png',
        iconlike:'./assets/img/like-icon.png'
    }

    listarTemplateTweet(tweet);
}


function listarTemplateTweet(tweet){

    const {nome,foto,nomeUsuario,texto,tempo,verificado,iconlike,iconreply,iconretweet} = tweet;

    let li   = document.createElement("li");
    li.classList.add("main__tweet");

    let img  = document.createElement("img");
    img.classList.add('tweet__profilePic');
    img.src  = foto;

    let img2  = document.createElement("img");
    img2.classList.add('verificado');
    img2.src  = verificado;

    let div  = document.createElement("div");
    div.classList.add("tweet__content")

    let h2   = document.createElement("h2");
    h2.classList.add("tweet__nome");
    h2.innerText = `${nome}`;

    let span = document.createElement("span");
    span.classList.add("tweet__usuarioTempo");
    span.innerHTML = `${nomeUsuario}`;

    let span2 = document.createElement("span");
    span2.classList.add("tweet__time");
    span2.innerHTML = `${tempo}`;

    let p    = document.createElement("p");
    p.classList.add("tweet__text");
    p.innerText = texto;

    let div2  = document.createElement("div");
    div2.classList.add("tweet__icons")

    let icon  = document.createElement("img");
    icon.classList.add('icon-reply');
    icon.classList.add('icons');
    icon.src  = iconreply;

    let icon2  = document.createElement("img");
    icon2.classList.add('icon-retweet');
    icon2.classList.add('icons');
    icon2.src  = iconretweet;

    let icon3  = document.createElement("img");
    icon3.classList.add('icon-like');
    icon3.classList.add('icons');
    icon3.src  = iconlike;

    div2.appendChild(icon)
    div2.appendChild(icon2)
    div2.appendChild(icon3)
    
    div.appendChild(h2);
    div.appendChild(img2);
    div.appendChild(span);
    div.appendChild(span2);
    div.appendChild(p);
    div.appendChild(div2);

    li.appendChild(img);
    li.appendChild(div);
    
    feed.appendChild(li);
    formTextArea.value="";
}


