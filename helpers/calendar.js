const moment =  require('moment');
class Calendar {
    constructor(path) { 
        this.inputPath = path; 
        this.calendarPath = '.c2-calendar-body'; 
        this.buttonFurther = '.c2-button-further';
        this.calendarDay = '.c2-day';
        this.currentDate = moment();
    } 
    get input() { 
        return browser.element(this.inputPath); 
    } 
    get calendar() { 
        return browser.element(`${this.inputPath} ${this.calendarPath}`); 
    } 
    get button(){
        return browser.element(this.buttonFurther); 
    }
    get day(){
        return browser.element(this.calendarDay); 
    }
    transitionToTargetMonth(){
        const duration = moment.duration(this.date.diff(this.currentDate));
        const diffMonth = Math.ceil(duration.asMonths());
        for (let i = 1; i < diffMonth; i++){
            this.button.waitForVisible(10000);
            this.button.click();    
        }
        return this;
    }
    set dateValue(value){
        this.date = moment.utc(value, 'YYYY-MM-DD');
    }
    clickOnTargetDate(){
        //find element by data-id millisecodns
        let dataElement = browser.element(`${this.inputPath} ${this.calendarDay}[data-id="${this.date.valueOf()}"]`);
        dataElement.waitForVisible(10000);
        dataElement.click();
        
    }
}

module.exports = Calendar;