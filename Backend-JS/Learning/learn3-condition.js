const colors = ["red", "orange", "yellow", "blue", "violet"];

const randomIndex = Math.floor(Math.random() * colors.length);

const randomColor = colors[randomIndex];

switch(randomColor) {
    case 'red':
        console.log("the color is red");
        break;
    case 'orange':
        console.log("the color is orange");
        break;
    case 'yellow':
        console.log("the color is yellow");
        break;
    case 'blue':
        console.log("the color is blue");
        break;
    case 'violet':
        console.log("the color is violet");
        break;
    default:
        console.log("error, no color chosen");
}