const expect     = require('chai').expect;
const SearchPage = require('../pageObjects/searchPage');
const ResultPage = require('../pageObjects/resultPage');
const Calendar   = require('../helpers/calendar.js');
const testData   = require('./conf.js');
const checkIn    = new Calendar(testData.CHECK_IN_ELEM);
const checkOut   = new Calendar(testData.CHECK_OUT_ELEM);

describe('booking search test', function () {
    

    it('should search location', function () {
        SearchPage.open();
        SearchPage.searchField.setValue(testData.CITY);
        SearchPage.autocompleteItem.waitForVisible(10000);
        SearchPage.autocompleteItem.click();
        checkIn.dateValue = testData.START_DATE;
        checkIn.transitionToTargetMonth()
        checkIn.clickOnTargetDate();
       
        checkOut.input.waitForVisible(10000);
        checkOut.input.click();
        checkOut.dateValue = testData.END_DATE;
        checkOut.input.waitForVisible(10000);
        checkOut.clickOnTargetDate();

        SearchPage.submit.click();
        ResultPage.getResult.map(function(address){
            expect(address.getText()).to.contain(testData.CITY);
        })
       

    });

});