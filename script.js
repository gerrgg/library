const Board = ( ) => {
    const board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ]

    const render = () => {
        Array.from(document.getElementsByClassName('cell')).forEach(function(item, i) {
            document.getElementById(item.id).innerText = board[i]
        })

        console.log( board )
    }

    const set = ( position, value ) => {
        board[position - 1] = value
    }

    return { render, set }
}

const Player = ( symbol ) => {
    let score = 0
    const getSymbol = () => symbol

    return { getSymbol, score }
}

const ticTacToe = (() => {
    let turn = 1
    const board = Board()

    const players = {
        'X': Player('X'),
        'O': Player('O')
    }

    const whoseTurnIsIt = () => {
        // X - first
        // O - second
        return ( turn % 2 ) ? 'O' : 'X'
    }

    const move = ( e ) => {
        //remove 'cell-' from cell id
        if( e.target.innerText === '' ){
            let index = e.target.id.slice(5)
            board.set(index, players[whoseTurnIsIt()].getSymbol() )
            board.render()
            turn++
        }
    }

    Array.from(document.getElementsByClassName('cell')).forEach(function(cell) {
        cell.addEventListener('click', move)
    })

    return {
        board, players
    };

  })();

  console.log( ticTacToe.board )


