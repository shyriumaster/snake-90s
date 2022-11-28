var Jogo = {
	t: 0,                  // controla a velocidade com setTimeOut
	direcaoX: 0,           //Controla a dereção direita e esquerda da seta da cobrianha
	direcaoY: 1,           //Conrola a direção para cima e para baixo da cobrinha
	countCubos: "",        //Faz os cubos ou quadrados do espaço que a cobinha percorre
    corpo: [14, 14, 43],       //Tamanno da cobrinha fixo
    on: false,             //Faz a cobrinha crescer se true
    cubo: Math.floor(Math.random() * 638 + 1), //Nuemro aleatorio do cubo que acobrinha vai perseguir
    //Cria a tela de jogo
    tela: function () {
    	for (var a = 1; a < 639; a++) {
      		this.countCubos  += "<div class='cubos' id="+ a +">&nbsp;</div>";
    	}
    	return this.countCubos;
	},
    //Faz toda a cobrinha com array fixo
	executarCabeca: function(x, y) {
        //coordenada do id para pintar no array
		var coordenadas;
		coordenadas = (((29 * y) + (x - 28)) -1);    
        //Controla o for i para  o valor 1;  evita erros de bug
        var t = 1;
        // Faz os numeros correrem o array de 0 a this.corpo.length 
        for (var i = 0; i <= Jogo.corpo.length -1; i++) {
        if (i == 0) final = Jogo.corpo[i];
        Jogo.corpo[i] = Jogo.corpo[t];
        if (i == Jogo.corpo.length -1) Jogo.corpo[Jogo.corpo.length - 1] = coordenadas;
        t++;
        }
        t = 1;     
                      
        //Faz a cobrinha aarecer na tela
        for (var n = 0; n <= Jogo.corpo.length - 1; n++) {
            if (n == 0) {
                document.getElementById(this.corpo[n]).style.backgroundColor = "#EEEEEE";
            } else {
            document.getElementById(this.corpo[n]).style.backgroundColor = "#000000";
         }} 
	},
    //Aumenta em 1 o tamanho da cobrinha queando  a this.cubo.length - 1 for igual a this.cubo
	crescimento: function () {
        var per = document.getElementById(this.cubo).style;
        if (this.cubo === this.corpo[this.corpo.length -1]) {
           this.on = true;
           this.cubo = Math.floor(Math.random() * 638 + 1);
           if (this.on == true) {
            Jogo.corpo.unshift(0);
            this.on = false;  
            }
        }
        per.backgroundColor = "#2F2f4F";
        return per;
    },
     //Corpo principal que faz a cobrinha andar e aparecer
	 principal: function (x, y) {
            var tempo = setInterval(function() {
            	y = y + Jogo.direcaoY;  //Jogo.direcaoY = 0 ou 1 modifica a direcao da cobirnha
                x = x + Jogo.direcaoX;  //Jogo.direcaoX = 0 ou 1 modifica a direcao da cobrinah
                //====================================
                //Faz a cobrinha não bater na parede
                if(x < 1) {
                  x = 29;
                }
                if(y < 1) {
                  y = 22;
                }
                if(x > 29) {
                  x = 1;
                }
                if(y > 22) {
                  y = 1;
                }
                //====================================
                Jogo.crescimento();
                //Controla o tamanho da cobrinha
                Jogo.executarCabeca(x, y); //Controla a cobirnha
                              
               }, 300);  
              Jogo.t++;    
    },
};
//Quando o arquivo for carregado
window.onload = function() {
   document.getElementById("conteiner").innerHTML = Jogo.tela();
   document.getElementById("comecar").addEventListener("click", function() {
   //Clicar para começar o jogo;
        document.getElementById("comecar").style.display = "none";
      Jogo.principal(14, 2);
    }, false);
};
//Evento que controla as setas do teclado ====KeyDown====
//Observação: As letras W, D, X, A também são setas
document.addEventListener('keydown', function (seta) {
    var evento = seta.keyCode;
    switch(evento) {
        case 37:
            Jogo.direcaoX = -1;
            Jogo.direcaoY = 0;
            break;
        case 65:
            Jogo.direcaoX = -1;
            Jogo.direcaoY = 0;
            break;
        case 38:
            Jogo.direcaoY = -1;
            Jogo.direcaoX = 0;
            break;
        case 87:
            Jogo.direcaoY = -1;
            Jogo.direcaoX = 0;
            break;
        case 39:
            Jogo.direcaoX = 1;
            Jogo.direcaoY = 0;
            break;
        case 68:
            Jogo.direcaoX = 1;
            Jogo.direcaoY = 0;
            break;
        case 40:
            Jogo.direcaoY = 1;
            Jogo.direcaoX = 0;
            break;
        case 88:
            Jogo.direcaoY = 1;
            Jogo.direcaoX = 0;
            break;
   }
 }, false);
    