describe("Clase GameBoardSpec", function(){
 
 
    var canvas, ctx;

        beforeEach(function(){
	    loadFixtures('index.html');

	    canvas = $('#game')[0];
	    expect(canvas).toExist();

	    ctx = canvas.getContext('2d');
	    expect(ctx).toBeDefined();

    });
    
    it ("GameBoard.add()", function(){
        var board = new GameBoard();
        spyOn(board, "add");
        
        obj=board.add(new PlayerShip())
        
        expect(board.add).toHaveBeenCalled();
        expect(board.objects[0]).toEqual(obj);
    });
    
    /*it ("GameBoard.remove()", function(){
        var board = new GameBoard();
        spyOn(board, "remove");
        
        obj=board.add(new PlayerShip())
        //obj=board.remove()
        expect(board.remove).toHaveBeenCalled();
        //expect(board.objects[0]).toEqual(0);
        expect(obj.length).toBe(0);
    });*/
    
    it ("GameBoard.overlap()", function(){
        var board = new GameBoard();
        
        
        var primer_objeto=function(){this.x=2;this.y=3;this.h=4; this.w=5}; //no hacen falta los this
        var segundo_objeto=function(){this.x=2;this.y=3;this.h=4; this.w=5};
        
        var obj1 = new primer_objeto();
        var obj2 = new primer_objeto();
        
        board.add(obj1);
        board.add(obj2);
        
        //each(board.objects.function(element, index, list))
        //expect(element, )
        
        //spyOn(board, "overlap");
        intento = board.overlap(obj1, obj2);
        expect(board.overlap).toHaveBeenCalled();
        expect(intento).toEqual(true);
    });
    
    /*it ("GameBoard.step()", function(){
        var dt = 30 / 1000;
        var board = new GameBoard();
        spyOn(board, "resetRemoved");
        spyOn(board, "iterate");
        spyOn(board, "finalizeRemoved");
        spyOn(board, "step");
        board.step(dt);
        expect(board.step).toHaveBeenCalled();
    });*/
});


/*

  En el anterior prototipo (06-player), el objeto Game permite
  gestionar una colecci�n de tableros (boards). Los tres campos de
  estrellas, la pantalla de inicio, y el sprite de la nave del
  jugador, se a�aden como tableros independientes para que Game pueda
  ejecutar sus m�todos step() y draw() peri�dicamente desde su m�todo
  loop(). Sin embargo los objetos que muestran los tableros no pueden
  interaccionar entre s�. Aunque se a�adiesen nuevos tableros para los
  misiles y para los enemigos, resulta dif�cil con esta arquitectura
  pensar en c�mo podr�a por ejemplo detectarse la colisi�n de una nave
  enemiga con la nave del jugador, o c�mo podr�a detectarse si un
  misil disparado por la nave del usuario ha colisionado con una nave
  enemiga.


  Requisitos:

  Este es precisamente el requisito que se ha identificado para este
  prototipo: dise�ar e implementar un mecanismo que permita gestionar
  la interacci�n entre los elementos del juego. Para ello se dise�ar�
  la clase GameBoard. Piensa en esta clase como un tablero de un juego
  de mesa, sobre el que se disponen los elementos del juego (fichas,
  cartas, etc.). En Alien Invasion los elementos del juego ser�n las
  naves enemigas, la nave del jugador y los misiles. Para el objeto
  Game, GameBoard ser� un board m�s, por lo que deber� ofrecer los
  m�todos step() y draw(), siendo responsable de mostrar todos los
  objetos que contenga cuando Game llame a estos m�todos.

  Este prototipo no a�ade funcionalidad nueva a la que ofrec�a el
  prototipo 06.


  Especificaci�n: GameBoard debe

  - mantener una colecci�n a la que se pueden a�adir y de la que se
    pueden eliminar sprites como nave enemiga, misil, nave del
    jugador, explosi�n, etc.

  - interacci�n con Game: cuando Game llame a los m�todos step() y
    draw() de un GameBoard que haya sido a�adido como un board a Game,
    GameBoard debe ocuparse de que se ejecuten los m�todos step() y
    draw() de todos los objetos que contenga

  - debe ofrecer la posibilidad de detectar la colisi�n entre
    objetos. Un objeto sprite almacenado en GameBoard debe poder
    detectar si ha colisionado con otro objeto del mismo
    GameBoard. Los misiles disparados por la nave del jugador deber�n
    poder detectar gracias a esta funcionalidad ofrecida por GameBoard
    cu�ndo han colisionado con una nave enemiga; una nave enemiga debe
    poder detectar si ha colisionado con la nave del jugador; un misil
    disparado por la nave enemiga debe poder detectar si ha
    colisionado con la nave del jugador. Para ello es necesario que se
    pueda identificar de qu� tipo es cada objeto sprite almacenado en
    el tablero de juegos, pues cada objeto s�lo quiere comprobar si ha
    colisionado con objetos de cierto tipo, no con todos los objetos.

*/
