var detalhes;

const varModal = document.getElementById("pokeDetailModal");

//função para fechar o popup/modal
function fecharModal() {
    varModal.style.display = "none";
}


//permite fechar o modal usando a telca ESC
document.onkeyup = function (e) {
    e = e || window.event; //compatibilidade com navegadores antigos IE
    if (e.key == 'Escape') {
        fecharModal();
    }
};

function showPokeDetail(numPoke) {
    varModal.style.display = "block";
    getPokemonDetailsToShow(numPoke)
}


function getPokemonDetailsToShow(numPoke) {
    const url = `https://pokeapi.co/api/v2/pokemon/${numPoke}/`;

    fetch(url)
        .then((response) => response.json())
        .then((detailJson) => {
            varModal.innerHTML = `
            <div class="pokemon ${detailJson.types[0].type.name} modalInfo">
                <div>
                    <span class="detailTitulo">${detailJson.name}</span>
                </div>
                <img id="imgPopupCorMasc" class="imgMasc" src="${detailJson.sprites.other.dream_world.front_default}" height="230">
                
                <div class="detail">
                    <ol class="types detailTypes">
                        ${detailJson.types.map((type) => `<li class="type ${type.type.name} detailTypes__type">${type.type.name}</li>`).join('')}
                    </ol>
                </div>

                
                <button class="${detailJson.types[0].type.name} PopUpFechar" onclick="fecharModal()">Fechar</button>
            </div>
            `
        })
}

