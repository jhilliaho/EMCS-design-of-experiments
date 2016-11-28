var jan_1_2012 = new Date(2012,Calendar.JAN,1);



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