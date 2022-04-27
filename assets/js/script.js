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


    const tweet = {
        nome: 'Daniel',
        foto: './assets/img/ProfilePic.png',
        nomeUsuario: '&nbsp;&commat;danielkenzie',
        texto: tweetText,
        tempo: `${hora}:${minutos}`
    }

    listarTemplateTweet(tweet);
}


function listarTemplateTweet(tweet){


    const {nome,foto,nomeUsuario,texto,tempo} = tweet;

    let li   = document.createElement("li");
    li.classList.add("main__tweet");

    let img  = document.createElement("img");
    img.classList.add('tweet__profilePic');
    img.src  = foto;

    let div  = document.createElement("div");
    div.classList.add("tweet__content")

    let h2   = document.createElement("h2");
    h2.classList.add("tweet__nome");
    h2.innerText = nome;

    let span = document.createElement("span");
    span.classList.add("tweet__usuarioTempo");
    span.innerHTML = `${nomeUsuario} &middot; ${tempo}`;

    let p    = document.createElement("p");
    p.classList.add("tweet__text");
    p.innerText = texto;

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div);
    
    feed.appendChild(li);
    formTextArea.value="";
}

