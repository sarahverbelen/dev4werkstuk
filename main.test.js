jest.mock('./main');


test(`getFilters word aangeroepen als de filter geselecteerd word`, () => {

    document.body.innerHTML = //mock the html file
    '<div>'+ '<input type="checkbox" id="opera" class="filter">' + '</div>';

    const $ = require('jquery');
    const app = require('./main');

    $('#opera').change(function(){
        app.getFilters();
    });

    $('#opera').change();

    expect(app.getFilters).toBeCalled();
});

test('functie displayAll toont resultaten ', () => {
    let html = require('fs').readFileSync('./index.html').toString()
    document.body.innerHTML = html;

    const $ = require('jquery');
    const app = require('./main');

    app.displayAll();

    expect(app.displayAll).toBeCalled();


});

