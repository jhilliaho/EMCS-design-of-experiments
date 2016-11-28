var jan_1_2012 = new Date(2012,Calendar.JAN,1);

test('weekStartDate, Monday', function() {
    var calMon = new Calendar(1); // calendar with Monday as first day of the week
    deepEqual(calMon.weekStartDate(jan_1_2012), new Date(2011,11,26),
        'December. 26th 2011 is the start of the first week of 2012');
});
test('monthDates, Monday', function() {
    var calMon = new Calendar(1); // calendar with Monday as first day of the week
    var mdc_jan_2012 = calMon.monthDates(2012,0);
    var mdc_feb_2012 = calMon.monthDates(2012,1);

    deepEqual(mdc_jan_2012[mdc_jan_2012.length-1][6], new Date(2012,1,5), 'last Sunday Feb. 5th.');
    deepEqual(mdc_feb_2012[mdc_feb_2012.length-1][6], new Date(2012,2,4), 'last Sunday Mar. 4th. ='+mdc_feb_2012[4][6]);
});
test('monthDates Exception',function(){

    var calMon = new Calendar(1);

    raises(function(){
        calMon.monthDates(2012,"0")
    },'CalendarEception: month must be a number (Jan is 0)')
});
test('CalendarException',function(){
    var exception = new CalendarException("test");
    equal(exception,'CalendarException: test')
})