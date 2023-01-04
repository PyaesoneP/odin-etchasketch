const container = document.querySelector('.container');
const gridContainer = document.querySelector('.gridcontainer');

const gridNumButton = document.createElement('BUTTON');
gridNumButton.classList.add('gridnumbutton');
gridNumButton.textContent = 'Numbers of grid';
let gridNumber = 16;

let grid = document.createElement('div');
grid.classList.add('grid');
grid.textContent = 'grid';

let gridColumn = document.createElement('div');
gridColumn.classList.add('gridcolumn');

gridNumButton.addEventListener('click', () => {
    gridNumber = prompt('Choose the number of grids that you would like. (16 - 100)');
    resetGrid();
    getGridNum(gridNumber);
})

container.insertBefore(gridNumButton, gridContainer);

const howTo = document.querySelector('.gotohow');
const about = document.querySelector('.gotoabout');
const howToSection = document.querySelector('.howtocontainer');
const aboutSection = document.querySelector('.aboutcontainer');

function getGridNum (num) {
    for (let i = 0; i < num; i++) {
        let gridColumn = document.createElement('div');
        gridColumn.classList.add(i);
        gridContainer.appendChild(gridColumn);

        for (let i = 0; i < num; i++) {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            gridColumn.appendChild(grid);
            grid.style.filter = 'brightness(100%)';
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = generateRandomColor();
                switch (grid.style.filter) {
                    case 'brightness(100%)':
                        grid.style.filter = 'brightness(90%)';
                        break;
            
                    case 'brightness(90%)':
                        grid.style.filter = 'brightness(80%)';
                        break;
            
                    case 'brightness(80%)':
                        grid.style.filter = 'brightness(70%)';
                        break;
            
                    case 'brightness(70%)':
                        grid.style.filter = 'brightness(60%)';
                        break;
            
                    case 'brightness(60%)':
                        grid.style.filter = 'brightness(50%)';
                        break;

                    case 'brightness(50%)':
                        grid.style.filter = 'brightness(40%)';
                        break;

                    case 'brightness(40%)':
                        grid.style.filter = 'brightness(30%)';
                        break;

                    case 'brightness(30%)':
                        grid.style.filter = 'brightness(20%)';
                        break;

                    case 'brightness(20%)':
                        grid.style.filter = 'brightness(10%)';
                        break;

                    case 'brightness(10%)':
                        grid.style.filter = 'brightness(0%)';
                        break;
            
                    default:
                        break;
                }
            })
        }
    }
}

function resetGrid () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


function generateRandomColor () {
    let array = ['red', 'blue', 'green', 'pink', 'cyan', 'yellow', 'purple', 'orange', 'magenta'];
    let color = array[Math.floor(Math.random()*9)];
    return color;
}