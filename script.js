const tile = document.getElementsByClassName('project-tile');

const num = tile.length;

// Hover over project tiles
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

// Change navbar colour when scrolling and return to normal at top of page
$(window).scroll( () => {
    if ($(window).scrollTop() >= 50) {
        $('#navbar').css('background', 'black');
    } else {
        $('#navbar').css('background', 'transparent');
    }
});
