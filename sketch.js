var jogador
var inimigo
function setup() {
 createCanvas (windowWidth,windowHeight);
 jogador=new Player (width/2,height/2)
 inimigo=new Nivel_1 ()
}

function draw() {
 background ("black");
 jogador.mostrar ();
 jogador.andar ();
 inimigo.mostrar ();
 if (jogador.isTouching(inimigo)) {
    jogador.destroy ()
 }
}

function windowResized () {

    resizeCanvas (windowWidth,windowHeight);

}
