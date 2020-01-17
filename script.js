// game
const Player = ( symbol ) => {
    let score = 0;
    const getSymbol = () => symbol;
}

const Board = () => {
    let cells = [];
}

const ticTacToe = (() => {
    
    // declarations
    const board = Board();
    const player1 = Player('X');
    const player2 = Player('O');

    let cellElems = document.getElementsByClassName('cell');

    function playerMove( e ){
        console.log( e )
    }

    function gameOver(){
        console.log( 'gameover' )
    }

    function restart(){
        console.log( 'restart' )
    }

    // ADD EVENT
    for( let cell of cellElems ){
        cell.addEventListener( 'click', function(e){
            console.log( e )
        } );
    }

})();