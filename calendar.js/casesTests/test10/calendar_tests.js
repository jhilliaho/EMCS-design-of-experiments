var jan_1_2012 = new Date(2012,Calendar.JAN,1);

test('weekStartDate, Sunday', function() {
    var calSun = new Calendar(); // calendar with Sunday as first day of the week
    deepEqual(calSun.weekStartDate(new Date(2012,0,10)), new Date(2012,0,8), 'second week of 2012 starts on Jan. 8th');
});
test('weekStartDate, Monday', function() {
    var calMon = new Calendar(1); // calendar with Monday as first day of the week
    deepEqual(calMon.weekStartDate(jan_1_2012), new Date(2011,11,26),
        'December. 26th 2011 is the start of the first week of 2012');
});
test('monthDates, Sunday', function() {
    var calSun = new Calendar(); // calendar with Sunday as first day of the week
    var mdc_jan_2012 = calSun.monthDates(2012,0);
    var mdc_feb_2012 = calSun.monthDates(2012,1);
    deepEqual(mdc_jan_2012[0][0], jan_1_2012, 'first Sunday is Jan. 1st. = '+mdc_jan_2012[0][0]);
    deepEqual(mdc_jan_2012[1][0], new Date(2012,0,8), 'second Sunday is Jan. 8th.');
});
test('monthDates, Monday', function() {
    var calMon = new Calendar(1); // calendar with Monday as first day of the week
    var mdc_jan_2012 = calMon.monthDates(2012,0);
    var mdc_feb_2012 = calMon.monthDates(2012,1);

    equal(mdc_jan_2012.length, 6, 'January 2012 spans 6 calendar weeks');
    deepEqual(mdc_jan_2012[mdc_jan_2012.length-1][6], new Date(2012,1,5), 'last Sunday Feb. 5th.');
    deepEqual(mdc_feb_2012[mdc_feb_2012.length-1][6], new Date(2012,2,4), 'last Sunday Mar. 4th. ='+mdc_feb_2012[4][6]);
});
test('monthDates Exception',function(){
    var calMon = new Calendar(1);

    raises(function(){
        calMon.monthDates("2012",0)
    },'CalendarException: year must be a number >= 1970')

    var calMon = new Calendar(1);

    raises(function(){
        calMon.monthDates(2012,"0")
    },'CalendarEception: month must be a number (Jan is 0)')
});
test('CalendarException',function(){
    var exception = new CalendarException("test");
    equal(exception,'CalendarException: test')
})