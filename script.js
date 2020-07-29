// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
// input id
let inputS = document.getElementById("search-input");
// button id
let btn = document.getElementById("btn");



inputS.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        let input = document.querySelector("input").value;
        let url = "http://api.giphy.com/v1/gifs/search?q=" + input.replace(" ", "+") + "&api_key=dc6zaTOxFJmzC";
        GiphyAJAXCall.open('GET', url);
        GiphyAJAXCall.send();
    }
});


btn.addEventListener('click', () => {
    let input = document.querySelector("input").value;
    let url = "http://api.giphy.com/v1/gifs/search?q=" + input.replace(" ", "+") + "&api_key=dc6zaTOxFJmzC";
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
});



// AJAX Event 
GiphyAJAXCall.addEventListener('load', function (e) {
    var data = e.target.response;
    pushToDOM(data);

});
/* 3. Show me the GIFs */
let pushToDOM = (input) => {
    JSON
    let response = JSON.parse(input);
    console.log(response);
    let imageURLs = response.data;
    let container = document.querySelector(".img-container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    imageURLs.forEach((image) => {
        setTimeout(() => {
            let box = document.createElement("img");
            box.src = image.images.fixed_width.url;
            box.height = image.images.fixed_width.height;
            box.alt = image.title;
            // let container = document.querySelector(".js-container");
            // container.innerHTML = "<img src=\"" + imageURL + "\">";
            container.appendChild(box);

        }, 500);
    });
    response = "";
}