// console.log("text");

function changeBG() {
    // console.log("change()");
    // console.log(Math.floor(3.7))
    // Math floor rundet immer eine Zahl ab, zwingt immer auf die niedrige Ganz-Zahl, bei 3.7 kommt zb 3 
    //Math random gibt eine random Zahl zwischen 0-1
    // RGB hat eine Spanne von 0-255 

    // console.log(Math.floor(Math.random() * 256));
    let red = (Math.floor(Math.random() * 256));
    let green = (Math.floor(Math.random() * 256));
    let blue = (Math.floor(Math.random() * 256));
    console.log(red, green, blue);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}



