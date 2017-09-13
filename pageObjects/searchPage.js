const Page = require('./page');


class SearchPage extends Page {
    
    constructor() {
    super();
    this.searchPath = '#ss';
    this.url = '/';
    this.autocompleteList = '.c-autocomplete__item';
    this.calendar = '.c2-day-s-today';
    this.submitButton = '.sb-searchbox__button   ';

    
    }
   open() {
    super.open(this.url);
   }
   get searchField() {
    return browser.element(this.searchPath);
   }
   get autocompleteItem(){
      return browser.element(this.autocompleteList);
   }
   get openCalendar(){
      return browser.element(this.calendar);
   }
   get submit(){
      return browser.element(this.submitButton);
   }

}
 
  

module.exports = new SearchPage();
