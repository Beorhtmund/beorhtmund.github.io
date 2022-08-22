const tile = document.getElementsByClassName('project-tile');

const num = tile.length;

for (let i = 0; i < num; i++) {
    tile[i].addEventListener('mouseover', onHover);
    tile[i].addEventListener('mouseout', remove);

    function onHover() {
        tile[i].style.backgroundColor = 'black';
        tile[i].children[1].style.backgroundColor = 'black';
        tile[i].children[1].style.color = 'white';
    }
    
    function remove() {
        tile[i].style.backgroundColor = 'lightgray';
        tile[i].children[1].style.backgroundColor = 'lightgray';
        tile[i].children[1].style.color = 'black';
    }
}