// TO DO: write tests for at least two functions
// TO DO: refactor to make it more functional & pure


//when first entering the site, load the entire list of shows
let getShows = new Promise(getAllShows); //because this is an asynchronous funtion, we need to wait for it
getShows.then(function (data) { //when it's done, display the data
    displayResults(data.items);
})

//this function fetches the entries from entries.json and returns them
function getAllShows(resolve) {
    fetch('json')
        .then(response => response.json())
        .then(function (data) {
            resolve(data);
        });
}

function displayResults(results) {
    let resultDiv = document.createElement('div');


    //empty the page
    $(".card").remove();


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

        resultDiv.appendChild(card); //append to the div that holds all cards



    }

    document.body.appendChild(resultDiv); //append to the page
}


function getFilters() {
    let fullList = document.getElementsByClassName('filter');
    let checkedFilters = [];
    for (filter of fullList) {
        if (filter.checked) {
            let id = filter.id;
            checkedFilters.push(id);
        }
    }
    return checkedFilters;
}

function applyFilters(filters) {
    let getShows = new Promise(getAllShows); //because this is an asynchronous funtion, we need to wait for it

    //first we check if one of the audience filters is checked
    let audienceFilters;
    let familie = false;
    let volwassenen = false;

    for (filter of filters) {
        if (filter == "familie") {
            familie = true;
        } else if (filter == "volwassenen") {
            volwassenen = true;
        }
    }

    //set the appropriate filters for the showgenreresults function
    if (familie && volwassenen) {
        audienceFilters = ["familie", "volwassenen"];

    } else if (familie) {
        audienceFilters = ["familie", ""];
    } else if (volwassenen) {
        audienceFilters = ["", "volwassenen"];
    }
    if (!familie && !volwassenen) {
        audienceFilters = ["familie", "volwassenen"];
    }
    showGenreResults(audienceFilters);

    //filter the data based on the filters
    getShows.then(function (data) {
                let results = [];

                for (item of data.items) { //loop through the items
                    //console.log(item);

                    if (filters.length > 0) { //if there are filters selected
                        //if it's not only the audience filters:
                        if (!(filters.length == 1 && (familie || volwassenen)) && !(filters.length == 2 && (familie && volwassenen))) {
                                    for (filter of filters) { //loop through the filters

                                        if (familie && volwassenen) {
                                            if (item["genre-v2"] == filter) { //if the items category or genre corresponds with a selected filter
                                                results.push(item); //add it to the list of results
                                            }
                                        } else if (familie) {
                                            if (item["genre-v2"] == filter && item["category"] == "familie") { //if the items category or genre corresponds with a selected filter
                                                results.push(item); //add it to the list of results
                                            }
                                        } else if (volwassenen) {
                                            if (item["genre-v2"] == filter && item["category"] == "volwassenen") { //if the items category or genre corresponds with a selected filter
                                                results.push(item); //add it to the list of results
                                            }
                                        } else {
                                            if (item["genre-v2"] == filter) { //if the items category or genre corresponds with a selected filter
                                                results.push(item); //add it to the list of results
                                            }
                                        }


                                    }
                                } else { //if the only filters are audience filters, just show all of the results
                                    results = data.items;
                                }


                            }
                            else { //if there are no filters selected, just show all of the results
                                results = data.items;
                            }


                        }

                        //console.log(results);
                        //display the results on the page
                        displayResults(results);

                    })
            }

            showGenreResults(["familie", "volwassenen"]);


            //this function calculates how many results there are per genre
            function showGenreResults(audienceFilters) {
                let resultList = {
                    circus: 0,
                    comedy: 0,
                    concert: 0,
                    dans: 0,
                    figurentheater: 0,
                    literatuur: 0,
                    multidisciplinair: 0,
                    muziektheater: 0,
                    opera: 0,
                    theater: 0,
                };

                let getShows = new Promise(getAllShows); //because this is an asynchronous funtion, we need to wait for it
                getShows.then(function (data) { //when it's done, we count the results per genre
                    for (result of data.items) {

                        if (result.category == audienceFilters[0] || result.category == audienceFilters[1]) {
                            resultList[result["genre-v2"]] += 1; //add one to the count in the resultlist of the genre that the item is
                        }
                    }


                    //console.log(resultList);
                    for (genre in resultList) {
                        //display the amount of results between brackets next to the filters
                        document.getElementsByClassName(genre)[0].textContent = genre + ' (' + resultList[genre] + ')';
                    }



                })

            }
