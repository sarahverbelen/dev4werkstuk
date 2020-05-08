let $ = require("jquery");


test(`De displayresults functie maakt kaartjes voor elk resultaat dat eraan meegegeven word`, () => {
    const mockResults = [ //make some mock data to test the function with
        {
            thumbnail: {
                url: "https://via.placeholder.com/150"
            },
            name: "test1"
        },
        {
            thumbnail: {
                url: "https://via.placeholder.com/200"
            },
            name: "test2"
        },
        {
            thumbnail: {
                url: "https://via.placeholder.com/250"
            },
            name: "test2"
        }
    ]
    displayResults(mockResults) //do the function with the mock data

    expect($(".card").length).toBe(mockResults.length); // then test to see if the amount of cards made is the right length
});