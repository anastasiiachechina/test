const Page = require('./page');

class ResultPage extends Page {
    constructor(){
        super();
        this.resultAdress = '.address .visited_link'; 
    }
    
    get getResult(){
        
        return $$(this.resultAdress);
    }
    
   
}
module.exports = new ResultPage();