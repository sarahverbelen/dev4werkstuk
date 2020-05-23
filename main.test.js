jest.mock('./main');


test(`GetFilters word aangeroepen als de filter geselecteerd word`, () => {

    document.body.innerHTML = //mock the html file
    '<div>'+ '<input type="checkbox" id="opera" class="filter">' + '</div>';

    const $ = require('jquery');
    const getFilters = require('./main');

    $('#opera').change(function(){
        getFilters();
    });

    $('#opera').change();

    expect(getFilters).toBeCalled();
});