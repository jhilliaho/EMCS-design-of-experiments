var jan_1_2012 = new Date(2012,Calendar.JAN,1);

test('monthDates Exception',function(){
    var calMon = new Calendar(1);
    raises(function(){
        calMon.monthDates(1969,0)
    },'CalendarException: year must be a number >= 1970')

    var calMon = new Calendar(1);
    raises(function(){
        calMon.monthDates(2012,12)
    },'CalendarException: month must be a number (Jan is 0)')
});
test('monthDays, Sunday', function() {
    var calSun = new Calendar(); // calendar with Sunday as first day of the week
    var mdc_jan_2012 = calSun.monthDays(2012,0);
    var mdc_feb_2012 = calSun.monthDays(2012,1);
    equal(mdc_jan_2012.length, 5, 'January 2012 spans 5 calendar weeks');
});
test('monthText, Sunday', function() {
    var calSun = new Calendar(); // calendar with Sunday as first day of the week
    var now = new Date()
    var monthTextExpected = calSun.monthText(now.getFullYear(),now.getMonth());
    equal(calSun.monthText(),monthTextExpected);

});
test('CalendarException',function(){
    var exception = new CalendarException("test");
    equal(exception,'CalendarException: test')
})