var Jogo = {
  x: 14,
  y: 22,
  n: 0,
  bichos_x: 0,
  bichos_y: 0,
  //Gera a tela do jogo
  telaDeCubos: function() { 
    var cubos = "";
    var tela;
    for(var a = 1; a <= 638; a++) {
      cubos += "<div class='cubos' id="+ a +">&nbsp;</div>";
    }
    tela = document.getElementById("conteiner");
    tela.innerHTML = cubos;
    return tela;
  },
//pinta um quadrado nas coordenadas x e y
//com a cor em hexadecimal ou rgb, ou rgba excolhida
pintura: function(x, y, tinta, valor) {
  var id = (((29 *y) + (x - 28)) - 1);
  /* Se valor for 1 então pinta o quadrado com id selecionado*/
  if(valor == 1) {
    var pintar = document.getElementById(id);
    pintar.style.backgroundColor = tinta;
    return pintar;
  /* Se valor for 2 retorna o id do css do cubo*/
  } if (valor == 2) {
     return id;
  }
},
//Gera os tiros
atirar: function(x, y, cor) {
      /* Gera o efeito de tiro */
      var t = setInterval(function() { 
        if (Jogo.y == 1) {
          y = y;
        } else {
          y = y - 1;
        }      
        //console.log(Jogo.y);
        Jogo.pintura(x, y, cor, 1);
        y = y + 1;
        Jogo.pintura(x, y, "#EEEEEE", 1);
        Jogo.pintura(Jogo.x, Jogo.y, "#000000", 1)
        y--;
        //console.log(y);
        if (y <= 1) {
          clearInterval(t);
            setTimeout(function() {
            Jogo.pintura(x, 1, "#EEEEEE", 1);
          }, 50);
        }
      }, 50);
  },

pontosAleatorios: function(x, y, cor) {
      /* Gera o efeito de tiro */
      var t = setInterval(function() { 
        //console.log(Jogo.y);
        Jogo.pintura(x, y, cor, 1);
        if (y >= 2) {
          Jogo.pintura(x, y - 1, "#EEEEEE", 1);
        }
        y++;
        //console.log(y);
        if (y === 23) {
          clearInterval(t);
            setTimeout(function() {
            Jogo.pintura(x, 22, "#EEEEEE", 1);
          }, 200);
        }
      }, 200);
  },


//Mostra o id do boneco na caixa preta
morstrarId: function (numero) {
    switch (numero) {
      case 1:
        var returnId = document.getElementsByClassName("id")[0];
        returnId.innerHTML = Jogo.pintura(Jogo.x, Jogo.y , "#EEEEEE", 2);
        return returnId;
        break;
      case 2:
        var returnId = document.getElementsByClassName("id")[0];
        returnId.innerHTML = Jogo.x;
        return returnId;
        break;
      case 3:
        var returnId = document.getElementsByClassName("id")[0];
        returnId.innerHTML = Jogo.y;
        return returnId;
        break;
      default:

    }
},
atirador: function() {
  //Quradrado ou personagem que é movimentado pelas setas do mouse
  document.addEventListener('keydown', function (evento) {
    var seta = evento.keyCode;
    switch (seta) {
      case 83: //Tecla S funcão atirar
        //Far o efeito de atirar
        Jogo.atirar(Jogo.x, Jogo.y, "#000000");
        Jogo.pintura(Jogo.x, Jogo.y, "#000000", 1);
        break;
        case 37: //seta para esquerta
        Jogo.x += -1;
        if(Jogo.x < 1) {
          Jogo.x = 1;
          Jogo.pintura(1, Jogo.y, "#EEEEEE", 1);
          Jogo.morstrarId(1);
        }
        Jogo.pintura(Jogo.x, Jogo.y, "#000000", 1);
        Jogo.pintura((Jogo.x + 1), Jogo.y, "#EEEEEE", 1)
        Jogo.morstrarId(1);
        break;
      case 38: //seta para cima
        Jogo.y += -1;
        if(Jogo.y < 1) {
          Jogo.y = 1;
          Jogo.pintura(Jogo.x, 1, "#EEEEEE", 1);
          Jogo.morstrarId(1);
        }
        Jogo.pintura(Jogo.x, Jogo.y, "#000000", 1);
        Jogo.pintura(Jogo.x, (Jogo.y + 1), "#EEEEEE", 1);
        Jogo.morstrarId(1);
        break;
      case 39:
        Jogo.x += 1; //seta pra direita
        if(Jogo.x > 29) {
          Jogo.x = 29;
          Jogo.pintura(29, Jogo.y, "#EEEEEE", 1);
          Jogo.morstrarId(1);
        }
        Jogo.pintura(Jogo.x, Jogo.y, "#000000", 1);
        Jogo.pintura((Jogo.x - 1), Jogo.y, "#EEEEEE", 1);
        Jogo.morstrarId(1);
        break;
      case 40: //seta para baixo
        Jogo.y += 1;
        if(Jogo.y > 22) {
          Jogo.y = 22;
          Jogo.pintura(Jogo.x, 22, "#EEEEEE", 1);
          Jogo.morstrarId(1);
        }
        Jogo.pintura(Jogo.x, Jogo.y, "#000000", 1);
        Jogo.pintura(Jogo.x, (Jogo.y - 1), "#EEEEEE", 1);
        Jogo.morstrarId(1);
        break;
    }
  }, false );
  Jogo.pintura(Jogo.x, Jogo.y, "#000000", 1);
 },
};
window.onload = function () {
  Jogo.telaDeCubos();
  Jogo.atirador();
  Jogo.morstrarId(1);
  let k = setInterval(function() {
  Jogo.pontosAleatorios((Math.floor(Math.random() * 29 + 1)), 1, "#000000");
}, 2300);
  


};
