// From pixabay API

const images = [
    {
        "id":7852285,
        "tags":"ornamental cherry, cherry trees, cherry blossoms",
        "url":"img1.jpg",
        "likes":67
    },
    {
        "id":7850989,
        "tags":"cherry blossoms, park bench, cherry blossom trees",
        "url":"img2.jpg",
        "likes":59
    },
    {
        "id":7852229,
        "tags":"fairytale, leprechaun, meadow",
        "url":"img3.jpg",
        "likes":56
    },
    {
        "id":7852176,
        "tags":"flowers, botany, crocus",
        "url":"img4.jpg",
        "likes":51
    },
    {
        "id":7837426,
        "tags":"crocuses, flowers, plants",
        "url":"img5.jpg",
        "likes":174
    }
]


// $(document).ready(function(){
    
$("#imageDisplay").click(function(){
    
    for(let i = 0; i < images.length; i++) {
        let imgElement = document.createElement("img");
        imgElement.src = images[i].url;
        imgElement.style.height = "200px";
    
        document.getElementById("toDisplay").appendChild(imgElement);
    }
    
});

// });