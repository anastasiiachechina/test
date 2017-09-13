const expect     = require('chai').expect;
const SearchPage = require('../pageObjects/searchPage');
const ResultPage = require('../pageObjects/resultPage');

describe('booking search test', function () {
    

    it('should search location', function () {
        SearchPage.open();
        SearchPage.searchField.setValue('New York');
        SearchPage.autocompleteItem.waitForVisible(10000);
        SearchPage.autocompleteItem.click();
        SearchPage.openCalendar.click();
        SearchPage.submit.click();
        ResultPage.getResult.map(function(address){
            expect(address.getText()).to.contain('New York');
        })
       

    });

});