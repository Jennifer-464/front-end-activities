// From pixabay API

const images = [
    {
        "id":7852285,
        "tags":"ornamental cherry, cherry trees, cherry blossoms",
        "url":"https://pixabay.com/get/ge1eaa8d1b5785f916ca332ca25f07ac826ffa62a930385428ac547a89cb08a5a164690feafdfdd6760bdc55fd9ab078ba004afa47b40a4edb6c0fa4d8bd2135b_640.jpg",
        "likes":67
    },
    {
        "id":7850989,
        "tags":"cherry blossoms, park bench, cherry blossom trees",
        "url":"https://pixabay.com/get/gc7f77b3d2900f1cdb1603e39dcee48d5d16f51c73c8297bf1bbbc4764feee98daade1cfad60692dc80ccd4045dc90117cbf1d5937ae777e692f3a530bf94dc0c_640.jpg",
        "likes":59
    },
    {
        "id":7852229,
        "tags":"fairytale, leprechaun, meadow",
        "url":"https://pixabay.com/get/gb2ddede6be7f6613a7167e6e7dda87a34f47394f518d756b439adcb5e58458afa57daa58bef65d1f759b05eed4900d16bd7037beffcbddade99751c73ee40ee8_640.jpg",
        "likes":56
    },
    {
        "id":7852176,
        "tags":"flowers, botany, crocus",
        "url":"https://pixabay.com/get/geeb0762cb6d888610b003a991f7a7488c9e2fb59ccfc79021dc5adcf9c78b946724321630aac8880487651c278c2fd5c9b63073216c921ce4f713ae6dd4c2457_640.jpg",
        "likes":51
    },
    {
        "id":7837426,
        "tags":"crocuses, flowers, plants",
        "url":"https://pixabay.com/get/g63c15a83d713f926a6e20a4c5aa79c041d8aa343fa9839c4b576e3a8dbb2b74dcb295cd80508083c6dbe87cb42e27075b83aca521b486b71f1cea1f477f73de8_640.jpg",
        "likes":174
    }
]


// $(document).ready(function(){
    
$("#imageDisplay").click(function(){
    
    for(let i = 0; i < images.length; i++) {
        let imgElement = document.createElement("img");
        imgElement.src = images[i].url;
        imgElement.style.height = "300px";
    
        document.getElementById("toDisplay").appendChild(imgElement);
    }
    
});

// });