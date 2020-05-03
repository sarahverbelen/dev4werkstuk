//when first entering the site, load the entire list of shows
let getShows = new Promise(getAllShows); //because this is an asynchronous funtion, we need to wait for it
getShows.then(function (data) { //when it's done, display the data
    displayResults(data.items);
})

getFilters();

//this function fetches the entries from entries.json and returns them
function getAllShows(resolve) {
    fetch('json')
        .then(response => response.json())
        .then(function (data) {
            resolve(data);
        });
}

function displayResults(results) {
    for (result of results) {
        //console.log(result);

        //the following code makes a card that looks like this:
        //<div class="card" style="width: 18rem;">
        //<img src="..." class="card-img-top" alt="...">
        //<div class="card-body">
        //  <h5 class="card-title">Card title</h5>
        //  <p class="card-text">some text</p>
        //</div>
        //</div>

        //make the div for the card
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('style', 'width: 18rem; display: inline-block; margin-left: 10px; height: 400px; margin-top: 5px');

        //make the image to the card
        let img = document.createElement('img');
        img.setAttribute('src', result.thumbnail.url);
        img.setAttribute('class', 'card-img-top');
        img.setAttribute('style', 'height: 200px;')

        card.appendChild(img); //append the img to the card

        //make the body of the card
        let cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');

        //make the title of the card
        let cardTitle = document.createElement('h5');
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.textContent = result.name;

        cardBody.appendChild(cardTitle); //append the title to the cardbody

        card.appendChild(cardBody); //append the cardbody to the card

        document.body.appendChild(card); //append the card to the page

    }
}

function getFilters() {
    let fullList = document.getElementsByClassName('filter');
    let checkedFilters = [];
    for(filter of fullList){
        if(filter.checked){
            checkedFilters.push(filter);
        }
    }
    console.log(checkedFilters);
}