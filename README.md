# dev4werkstuk

## Approach
* First I did a functional analysis of the existing site
* My next step was to plan the different functions I was going to need
* Next, I planned the flow of the site: what buttons were going to do what etc.

## Functional analysis
* When you first see the site, all of the shows are displayed
* The filters are displayed at the top as a list of keywords
* clicking a filter once selects it, clicking a filter again deselects the filter
* there is also a link that clears the filters
* you have two kinds of filters: genre and audience
* The genre filters have the amount of results between brackets next to them
* selecting only an audience filter only changes the numbers between the brackets of the genre filters, not the actual results
* selecting only a genre filter shows you all the results for that genre
* selecting both an audience and a genre filter shows you all the results of that genre and for that audience
* you can select more than 1 filter and it will show all of the results for those filters


## Function Planning
* displayResults(list of results) -> Shows all of the results on the webpage
* getAllShows() -> returns a list of all the shows, without filtering
* getFilters() -> returns a list of all the filters that are currently selected
* applyFilters(list of all shows, list of filters) -> returns a list of all the shows left over when applying the filters

## Flow Planning
* First loading the page: displayResults(getAllShows())
* When selecting or deselecting a filter: displayResults(applyFilters(getAllShows(), getFilters()))
* When clearing the list of filters: displayResults(getAllShows())

## Resources used
* https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0
* https://stackoverflow.com
* Lessons from Ehb: development IV