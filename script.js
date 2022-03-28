// Declaração das cartas
var cartas = [
  {
    Nome: "Bulbasaur",
    Tipo: "Planta/Veneno",
    Atributos: {
      HP: 45,
      Ataque: 49,
      Defesa: 49,
      SpecialAtk: 65,
      SpecialDef: 65,
      Velocidade: 45,
      Total: 318
    },
    img:
      "https://img1.gratispng.com/20190617/lrt/kisspng-bulbasaur-portable-network-graphics-clip-art-image-5d085a22af1c18.0986016715608284507173.jpg",
    moldura: "planta"
  },
  {
    Nome: "Charmander",
    Tipo: "Fogo",
    Atributos: {
      HP: 39,
      Ataque: 52,
      Defesa: 43,
      SpecialAtk: 60,
      SpecialDef: 50,
      Velocidade: 65,
      Total: 309
    },
    img: "https://media.baamboozle.com/uploads/images/132048/1603996488_7769",
    moldura: "fogo"
  },
  {
    Nome: "Squirtle",
    Tipo: "Água",
    Atributos: {
      HP: 44,
      Ataque: 48,
      Defesa: 65,
      SpecialAtk: 50,
      SpecialDef: 64,
      Velocidade: 43,
      Total: 314
    },
    img:
      "https://img1.gratispng.com/20190509/tyq/kisspng-squirtle-image-video-games-blastoise-wartortle-5cd401a13347f8.9208473415573979212101.jpg",
    moldura: "agua"
  },
  {
    Nome: "Caterpie",
    Tipo: "Inseto",
    Atributos: {
      HP: 45,
      Ataque: 30,
      Defesa: 35,
      SpecialAtk: 20,
      SpecialDef: 20,
      Velocidade: 45,
      Total: 195
    },
    img:
      "https://sites.google.com/site/desenho2013/_/rsrc/1309196142082/caterpie/caterpie.gif",
    moldura: "agua"
  },
  {
    Nome: "Weedle",
    Tipo: "Inseto/Veneno",
    Atributos: {
      HP: 40,
      Ataque: 35,
      Defesa: 30,
      SpecialAtk: 20,
      SpecialDef: 20,
      Velocidade: 50,
      Total: 195
    },
    img: "https://nipop.files.wordpress.com/2011/07/13.gif",
    moldura: "agua"
  },
  {
    Nome: "Pidgey",
    Tipo: "Normal/Voador",
    Atributos: {
      HP: 40,
      Ataque: 45,
      Defesa: 40,
      SpecialAtk: 35,
      SpecialDef: 35,
      Velocidade: 56,
      Total: 251
    },
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PxqDpUa0dMMssyctkuyr1EPY3og1wF_mUjMV8_jxWqkpCoI6V4jJWx-m6T6hfpfhRQ0&usqp=CAU",
    moldura: "agua"
  },
  {
    Nome: "Rattata",
    Tipo: "Normal",
    Atributos: {
      HP: 30,
      Ataque: 56,
      Defesa: 35,
      SpecialAtk: 25,
      SpecialDef: 35,
      Velocidade: 72,
      Total: 253
    },
    img:
      "http://pm1.narvii.com/6157/53e1d99af14aaa73894563cda776f76ab42b4b63_00.jpg",
    moldura: "agua"
  },
  {
    Nome: "Ekans",
    Tipo: "Veneno",
    Atributos: {
      HP: 35,
      Ataque: 60,
      Defesa: 44,
      SpecialAtk: 40,
      SpecialDef: 54,
      Velocidade: 55,
      Total: 288
    },
    img:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/1/16/Ekans.gif",
    moldura: "agua"
  },
  {
    Nome: "Pikachu",
    Tipo: "Elétrico",
    Atributos: {
      HP: 35,
      Ataque: 55,
      Defesa: 40,
      SpecialAtk: 50,
      SpecialDef: 50,
      Velocidade: 90,
      Total: 320
    },
    img:
      "https://i.pinimg.com/736x/04/1b/e3/041be30798dccb02309e11acfe287a8d.jpg",
    moldura: "agua"
  },
  {
    Nome: "Sandshrew",
    Tipo: "Terra",
    Atributos: {
      HP: 50,
      Ataque: 75,
      Defesa: 85,
      SpecialAtk: 20,
      SpecialDef: 30,
      Velocidade: 40,
      Total: 300
    },
    img:
      "https://i.pinimg.com/736x/04/1b/e3/041be30798dccb02309e11acfe287a8d.jpg",
    moldura: "agua"
  },
  {
    Nome: "Nidoran ♂",
    Tipo: "Veneno",
    Atributos: {
      HP: 46,
      Ataque: 57,
      Defesa: 40,
      SpecialAtk: 40,
      SpecialDef: 40,
      Velocidade: 50,
      Total: 273
    },
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWRBqDxgckVRG9tZTlohljxHe_1dFs2HunZM_qE8TDvUd_J9Tqa10_rqe8q-kSVYUDiw&usqp=CAU",
    moldura: "agua"
  },
  {
    Nome: "Nidoran ♀",
    Tipo: "Veneno",
    Atributos: {
      HP: 55,
      Ataque: 47,
      Defesa: 52,
      SpecialAtk: 40,
      SpecialDef: 40,
      Velocidade: 41,
      Total: 275
    },
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgmfDWfm3k-2uaOh7nnDhCofTSTDzRObOswpl1TD1xK2q5idbjZzAojPrN6PXucjJXZw&usqp=CAU",
    moldura: "agua"
  },
  {
    Nome: "Clefairy",
    Tipo: "Fada",
    Atributos: {
      HP: 70,
      Ataque: 45,
      Defesa: 48,
      SpecialAtk: 60,
      SpecialDef: 65,
      Velocidade: 35,
      Total: 323
    },
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77JMad1Rs1SZDpjhy-fq8Bde3EGUvYGUPudtwN6rlfXj8_m6sTzKUc3YKhI9L2qPVpJU&usqp=CAU",
    moldura: "agua"
  },
  {
    Nome: "Vulpix",
    Tipo: "Fogo",
    Atributos: {
      HP: 38,
      Ataque: 41,
      Defesa: 40,
      SpecialAtk: 50,
      SpecialDef: 65,
      Velocidade: 65,
      Total: 299
    },
    img:
      "https://i.pinimg.com/originals/32/61/1a/32611a097d827af0a114539230882f78.gif",
    moldura: "agua"
  },
  {
    Nome: "Jigglypuff",
    Tipo: "Fada/Normal",
    Atributos: {
      HP: 115,
      Ataque: 45,
      Defesa: 20,
      SpecialAtk: 45,
      SpecialDef: 25,
      Velocidade: 20,
      Total: 270
    },
    img:
      "http://pm1.narvii.com/6268/1a7de8fcc6d4cddd806a64d36a607d265a98792e_00.jpg",
    moldura: "agua"
  },
  {
    Nome: "Zubat",
    Tipo: "Veneno/Voador",
    Atributos: {
      HP: 40,
      Ataque: 45,
      Defesa: 35,
      SpecialAtk: 30,
      SpecialDef: 40,
      Velocidade: 55,
      Total: 245
    },
    img:
      "http://pm1.narvii.com/6363/1e2ea27f16018914d94df599104ca7bf2a239678_00.jpg",
    moldura: "agua"
  },
  {
    Nome: "Oddish",
    Tipo: "Veneno/Planta",
    Atributos: {
      HP: 45,
      Ataque: 50,
      Defesa: 55,
      SpecialAtk: 75,
      SpecialDef: 65,
      Velocidade: 30,
      Total: 320
    },
    img:
      "http://pm1.narvii.com/6363/1e2ea27f16018914d94df599104ca7bf2a239678_00.jpg",
    moldura: "agua"
  },
  {
    Nome: "Paras",
    Tipo: "Inseto/Planta",
    Atributos: {
      HP: 35,
      Ataque: 70,
      Defesa: 55,
      SpecialAtk: 45,
      SpecialDef: 55,
      Velocidade: 25,
      Total: 285
    },
    img:
      "https://pa1.narvii.com/6262/dba6bb0720849a700a8b265552640404d365c80d_hq.gif",
    moldura: "agua"
  },
  {
    Nome: "Venonat",
    Tipo: "Inseto/Veneno",
    Atributos: {
      HP: 60,
      Ataque: 55,
      Defesa: 50,
      SpecialAtk: 40,
      SpecialDef: 55,
      Velocidade: 45,
      Total: 305
    },
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5pmweOCOJB04nbXwJ2uM0QOkw2Qoci3QDLYtAeNG3kGPbs4LdsNHXifMSqSDNzLZqCA&usqp=CAU",
    moldura: "agua"
  },
  {
    Nome: "Diglett",
    Tipo: "Terra",
    Atributos: {
      HP: 10,
      Ataque: 55,
      Defesa: 25,
      SpecialAtk: 35,
      SpecialDef: 45,
      Velocidade: 95,
      Total: 265
    },
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-h2zoHFwEkKYL3c8kSl2evEte2uOOY8XeqW7Kf6StVfrW8IUjENnoCx_xMhOYhEukeU&usqp=CAU",
    moldura: "agua"
  }
];

var corMolduras = {
  agua:
    "https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png",

  planta:
    "https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png",

  fogo:
    "https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
};
//
////////////////////////////////////////////////////////////
// ------------ DECLARAÇÃO DAS CARTAS - FIM ------------- //
////////////////////////////////////////////////////////////
//

var cartaJogador;
var cartaPC;
var cartasJogo;
// Onde vão entra as cartas sorteadas

var placar = [0, 0, 0]; // Placar: índice 0 = jogador ; índice 1 = PC; índice 2 = empates
exibePlacar();

var tagID = ["Jogador", "PC"];
var cartaID = ["carta-jogador", "carta-maquina"]; // ids no HTML da posição do texto
zerarCarta(cartaID[0]);
zerarCarta(cartaID[1]);
// Zera as cartas (na tela) (mostra o verso da carta)

botaoJogar(); // Coloca o botão 'Jogar' na tela

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// ----------------------- FUNÇÕES ---------------------- //
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Coloca o botão 'Jogar' na tela
function botaoJogar() {
  var botao = document.getElementById("botao-jogar");
  var botaoHTML =
    '<button class="button-jogar" type="button" id="btnJogar" onclick="jogar()" disabled="false">Jogar</button>';
  botao.innerHTML = botaoHTML;
}

// Zerar cartas na tela inicial
function zerarCarta(id) {
  var opcoes = document.getElementById(id);
  // Mostra o verso da carta
  var opcoesTexto =
    '<img src="https://upload.wikimedia.org/wikipedia/en/3/3b/Pokemon_Trading_Card_Game_cardback.jpg">';
  opcoes.innerHTML = opcoesTexto;
}

// Exibe placar na tela
function exibePlacar() {
  var exibePlacar0 = document.getElementById("placar0");
  exibePlacar0.innerHTML = placar[0];
  var exibePlacar1 = document.getElementById("placar1");
  exibePlacar1.innerHTML = placar[1];
}

// Sortear cartas
//   Limpa exibição das cartas (mostra o verso), limpa o campo de resultados
//   Coloca o botão 'Jogar' na tela
//   Sorteia números aleatórios p/ Jogador e p/ PC (impede número repetido)
//   Pega cartas correspondentes aos números, desabilita botão 'Sortear'
//   Exibe carta do Jogador com atributos e botões p/ seleção
function sortearCarta() {
  // Criar cópia do array de cartas
  // var copia = cartas.slice();

  // Zera carta do PC
  zerarCarta(cartaID[1]);

  botaoJogar(); // Coloca o botão 'Jogar' na tela

  // Limpa campo de resultados
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";

  // Numero aleatório p/ selecionar sua carta
  var numeroJogador = parseInt(Math.random() * cartas.length);
  cartaJogador = cartas[numeroJogador];
  //console.log(cartaJogador);

  // Número aleatório p/ selecionar carta PC
  var numeroPC = parseInt(Math.random() * cartas.length);

  // Fazer verificação p/ que não haja repetido
  while (numeroPC == numeroJogador) {
    var numeroPC = parseInt(Math.random() * cartas.length);
  }
  //(criar cópia do array e ir retirando as cartas? <- ver depois)
  cartaPC = cartas[numeroPC];
  //console.log(cartaPC);

  cartasJogo = [cartaJogador, cartaPC];

  // Desabilitar botão 'sortear cartas' e habilitar o botão 'jogar'
  document.getElementById("btnSortear").disabled = true;

  // (botão de jogar permanece desabilitado até um atributo ser selecionado)

  exibirCarta(tagID[0], cartaID[0], 0, 0, 0);
  // Mostra carta jogador com botões p/ selecionar
}

// Função geral p/ exibir carta
//  Puxa imagem e moldura correspondente do personagem
//  Lista os atributos da carta (com ou sem botões -> dependente da variável 'jogo')

// tagID   -> tagID[0]="Jogador" (p/ jogador) ou tagID[1]="PC" (p/ PC)
// cartaID -> "carta-jogador" (cartaID[0]) ou "carta-PC" (cartaID[1])
// ID      -> ID=0 (p/ jogador) ou ID=1 (p/ PC)
// jogo    -> jogo=0 (opções c/ botões) ou jogo=1 (opções s/ botões)
// atributoSelect -> atributo selecionado (atributoSelect=0 caso ainda não tenha sido selecionado)
function exibirCarta(tagID, cartaID, ID, jogo, atributoSelect) {
  var divCarta = document.getElementById(cartaID);
  divCarta.style.backgroundImage = `url(${cartasJogo[ID].img})`;

  var moldura = `<img src="${
    corMolduras[cartasJogo[ID].moldura]
  }" style=" width: inherit; height: inherit; position: absolute;">`;

  var tagHTML = "<div id='" + tagID + "' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartasJogo[ID].Atributos) {
    if (jogo == 0) {
      opcoesTexto +=
        "<input type='radio' onclick='habilitarJogar()' name='atributo' id='" +
        atributo +
        "' value='" +
        atributo +
        "'>";
      opcoesTexto += "<label for='" + atributo + "'>";
      opcoesTexto +=
        atributo + ": " + cartasJogo[ID].Atributos[atributo] + "</label><br>";
    } else {
      if (atributo == atributoSelect) {
        opcoesTexto +=
          "<p style='color: red;'><strong>" +
          atributo +
          ": " +
          cartasJogo[ID].Atributos[atributo] +
          "</strong></p>";
      } else {
        opcoesTexto +=
          "<p>" + atributo + ": " + cartasJogo[ID].Atributos[atributo] + "</p>";
      }
    }
  }

  var nome = `<p class="carta-subtitle">${
    cartasJogo[ID].Nome + "(" + cartasJogo[ID].Tipo + ")"
  }</p>`;

  var tipo = "<p><strong>" + cartasJogo[ID].Tipo + "</p>";

  divCarta.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

// Habilita botão 'jogar' ao selecionar um atributo da lista
function habilitarJogar() {
  document.getElementById("btnJogar").disabled = false;
}

// Obter atributo selecionado
function obterAtributo() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

// Botão de jogar
//   Pega atributo selecionado e compara com o da carta do PC
//   Imprime resultado na tela e adiciona pontuação no placar
//   Mostra carta do PC, re-exibe carta do Jogador e desabilita/reabilita botões
function jogar() {
  // Obtem o atributo selecionado
  var atributoSelect = obterAtributo();
  //console.log(cartaJogador.Atributos[atributoSelect]);

  var valorCartaJogador = cartaJogador.Atributos[atributoSelect];
  var valorCartaPC = cartaPC.Atributos[atributoSelect];

  // Faz comparação e dá resultado (computar em um placar)
  var divResultado = document.getElementById("resultado");
  var elementoResultado;

  if (valorCartaJogador > valorCartaPC) {
    elementoResultado = "<p class='resultado-final'>Você venceu</p>";
    placar[0]++; // Adiciona um ponto para jogador [índice 0] no placar
  } else if (valorCartaJogador < valorCartaPC) {
    elementoResultado = "<p class='resultado-final'>Você perdeu</p>";
    placar[1]++; // Adiciona um ponto para o PC [índice 1] no placar
  } else {
    elementoResultado =
      "<p class='resultado-final'>Empatou, escolha outro atributo</p>";
    divResultado.innerHTML = elementoResultado;
    return;
  }

  // Escrevendo o placar
  elementoResultado += "<p class='placar_peq'>| Placar: (Você) " + placar[0];
  elementoResultado += " x ";
  elementoResultado += placar[1] + " (Rival) |</p>";

  divResultado.innerHTML = elementoResultado;
  exibePlacar();

  // Mostra a carta do PC
  exibirCarta(tagID[1], cartaID[1], 1, 1, atributoSelect);
  // Mostra a carta do jogador s/ botões p/ selecionar
  exibirCarta(tagID[0], cartaID[0], 0, 1, atributoSelect);

  // Substitui o botão 'Jogar' por um de sortear
  var botao = document.getElementById("botao-jogar");
  var botaoHTML =
    '<button class="button-jogar" type="button" id="btnSortear" onclick="sortearCarta()">Sortear outra carta</button>';
  botao.innerHTML = botaoHTML;

  // Botão sortear cartas reabilitado, botão jogar desabilitado
  document.getElementById("btnSortear").disabled = false;
  // document.getElementById("btnJogar").disabled = true;
  // (depois refazer com um número estabelecido de rodadas, usar botão 'próxima carta')
}

// Função para reiniciar jogo (volta para o início, zera o placar)
//   Reabilita botão 'Sortear', desabilita botão 'Jogar'
//   Limpa campo de resultados e vira as cartas para baixo (zerar cartas)
//   Zera o placar
function zerarJogo() {
  // Botão sortear cartas reabilitado, botão jogar desabilitado
  document.getElementById("btnSortear").disabled = false;
  botaoJogar();

  // Limpa campo de resultados
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";

  // Coloca as cartas viradas para baixo
  zerarCarta(cartaID[0]);
  zerarCarta(cartaID[1]);

  // Zera o placar
  placar = [0, 0, 0]; // Placar: índice 0 = jogador ; índice 1 = PC ; índice 2 = empates
  exibePlacar();
}

////// Funções do POPUPS
// Exibe o popup com o Codepen Embed
function showPopup(id) {
  document.getElementById(id).style.display = "block";
}

// Esconde o popup com o Codepen Embed
function hidePopup(id) {
  document.getElementById(id).style.display = "none";
}