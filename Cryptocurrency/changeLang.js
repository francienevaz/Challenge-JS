let contentP = document.querySelector("#pt");
// let contentH1 = document.querySelector(".content h1");
let btn = document.querySelector(".btn")

function changeLang (lang) {
    location.hash = lang;
    location.reload();
}

var language = {
    pt : {
        p : 
            "A maior troca de criptomoedas do mundo disponível na web e também no celular."
    },
    en : {
        p : 
            "World's biggest Cryptocurrency exchange available on web as well as mobile  phone."
    },
}

// Check if a hash value exists in the URL
if (window.location.hash) {
  
    if (window.location.hash == "#pt") {
      contentP.textContent = language.pt.p;
    } else if (window.location.hash == "#en") {
        contentP.textContent = language.en.p;
    }

  }

