const dados = {
    filmes: [
        { titulo: "É Assim Que Acaba", imagem: "../assets/imgs/eassimqueacaba.webp", genero: ["Drama", "Romance"] },
        { titulo: "Bad Boys: Para Sempre", imagem: "../assets/imgs/badboys.webp", genero: ["Ação", "Comédia"] },
        { titulo: "Um Lugar Silencioso: Dia Um", imagem: "../assets/imgs/umlugarsilencioso.webp", genero: ["Ficção", "Terror", "Mistério"] },
        { titulo: "Venom", imagem: "../assets/imgs/venom.webp", genero: ["Ação", "Ficção"] },
        { titulo: "Deadpool & Wolverine", imagem: "../assets/imgs/deadpoolewolverine.webp", genero: ["Ação", "Comédia", "Ficção"] },
        { titulo: "Divertida Mente 2", imagem: "../assets/imgs/divertidamente.webp", genero: ["Ficção", "Animação", "Aventura", "Comédia"] },
    ],
    series: [
        { titulo: "Guerra dos Tronos", imagem: "../assets/imgs/gameofthrones.webp", genero: ["Ficção", "Aventura", "Ação", "Fantasia"] },
        { titulo: "Sobrenatural", imagem: "../assets/imgs/sobrenatural.webp", genero: ["Ficção", "Terror", "Mistério", "Drama", "Thriller"] },
        { titulo: "Grey's Anatomy", imagem: "../assets/imgs/greysanatomy.webp", genero: ["Drama", "Romance"] },
        { titulo: "Prison Break", imagem: "../assets/imgs/prisonbreak.webp", genero: ["Ação", "Drama", "Mistério", "Crime"] },
        { titulo: "O Senhor dos Anéis: Os Anéis de Poder", imagem: "../assets/imgs/osenhordosaneis.webp", genero: ["Ficção", "Aventura", "Sci-Fi & Fantasy"] },
        { titulo: "O Segredo do Rio", imagem: "../assets/imgs/osegredodorio.webp", genero: ["Drama", "Mistério"] },
    ]

};

const filmesCards = document.querySelectorAll("#filmes-container a");
const seriesCards = document.querySelectorAll("#series-container a");
const selectGenero = document.getElementById("genero");
const btnLimpar = document.getElementById("limpar-filtro");

document.addEventListener("DOMContentLoaded", function () {
    function renderizar(cards, lista, filtro = "todos") {
        cards.forEach((card, index) => {
            const item = lista[index];
            const generos = item.genero;
            const correspondeFiltro = filtro === "todos" || generos.includes(filtro);

            if (item && correspondeFiltro) {
                card.style.display = "block";
                card.style.backgroundImage = `url(${item.imagem})`
                card.style.baclgroundSize = "cover";
                card.style.baclgroundPosition = "center";
            } else {
                card.style.display = "none";
            }


        })
    }

    function aplicarFiltro(generoSelecionado) {
        renderizar(filmesCards, dados.filmes, generoSelecionado);
        renderizar(seriesCards, dados.series, generoSelecionado);
    }

    selectGenero.addEventListener("change", function () {
        aplicarFiltro(this.value);
    })

})