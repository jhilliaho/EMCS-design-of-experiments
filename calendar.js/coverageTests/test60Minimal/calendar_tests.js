var jan_1_2012 = new Date(2012,Calendar.JAN,1);


test('monthDates, Sunday', function() {
    var calSun = new Calendar(); // calendar with Sunday as first day of the week
    var mdc_jan_2012 = calSun.monthDates(2012,0);
    var mdc_feb_2012 = calSun.monthDates(2012,1);
    equal(mdc_jan_2012.length, 5, 'January 2012 spans 5 calendar weeks');
});
test('CalendarException',function(){
    var exception = new CalendarException("test");
    equal(exception,'CalendarException: test')
})