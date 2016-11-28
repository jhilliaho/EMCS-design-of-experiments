var jan_1_2012 = new Date(2012,Calendar.JAN,1);

test('weekStartDate, Monday', function() {
    var calMon = new Calendar(1); // calendar with Monday as first day of the week
    deepEqual(calMon.weekStartDate(jan_1_2012), new Date(2011,11,26),
        'December. 26th 2011 is the start of the first week of 2012');
});
test('CalendarException',function(){
    var exception = new CalendarException("test");
    equal(exception,'CalendarException: test')
})