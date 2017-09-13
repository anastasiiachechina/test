const expect     = require('chai').expect;
const SearchPage = require('../pageObjects/searchPage');
const ResultPage = require('../pageObjects/resultPage');
const Calendar = require('../helpers/calendar.js');

const checkIn = new Calendar('.--checkin-field');
const checkOut = new Calendar('.--checkout-field');

describe('booking search test', function () {
    

    it('should search location', function () {
        SearchPage.open();
        SearchPage.searchField.setValue('New York');
        SearchPage.autocompleteItem.waitForVisible(10000);
        SearchPage.autocompleteItem.click();
        checkIn.dateValue = '2017-12-11';
        checkIn.transitionToTargetMonth().CheckTargetDate();
        checkOut.input.waitForVisible(10000);
        checkOut.input.click();
        checkOut.dateValue = '2017-12-11';
        checkOut.input.waitForVisible(10000);
        checkOut.CheckTargetDate();
        //checkOut.showCalendar.click();
        //checkOut.date = '2017-12-13';
        browser.pause(5000);
        // SearchPage.calendar.click();
        try{
            SearchPage.submitButton.waitForVisible(10000);
            SearchPage.submitButton.click();
        }
        catch(err){
            console.log(err);
        }
        SearchPage.submit.click();
        ResultPage.getResult.map(function(address){
            expect(address.getText()).to.contain('New York');
        })
       

    });

});