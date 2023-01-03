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
    gridNumber = prompt('Choose the number of grids that you would like');
    resetGrid();
    getGridNum(gridNumber);
})

container.insertBefore(gridNumButton, gridContainer);

function getGridNum (num) {
    for (let i = 0; i < num; i++) {
        let gridColumn = document.createElement('div');
        gridColumn.classList.add(i);
        gridContainer.appendChild(gridColumn);

        for (let i = 0; i < num; i++) {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            gridColumn.appendChild(grid);
            grid.addEventListener('mouseover', () => {
                grid.setAttribute("style", "background-color:black;");
            })
        }
    }
}

function resetGrid () {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}