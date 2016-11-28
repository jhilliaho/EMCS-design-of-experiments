var jan_1_2012 = new Date(2012,Calendar.JAN,1);

test('January 1, 2012 is Sunday', function() {
    var calSun = new Calendar(); // calendar with Sunday as first day of the week
    equal(jan_1_2012.toISOString().slice(0,10), '2012-01-01', 'month 0 is January');
    equal(jan_1_2012.getDay(), 0, 'weekday 0 is Sunday');
});
test('weekStartDate, Sunday', function() {
    var calSun = new Calendar(); // calendar with Sunday as first day of the week
    deepEqual(calSun.weekStartDate(jan_1_2012), jan_1_2012, 'Jan. 1st 2012 is the start of a week');
    deepEqual(calSun.weekStartDate(new Date(2012,0,2)), jan_1_2012, 'first week of 2012 starts on Jan. 1st');
    deepEqual(calSun.weekStartDate(new Date(2012,0,7)), jan_1_2012, 'first week of 2012 starts on Jan. 1st');
    deepEqual(calSun.weekStartDate(new Date(2012,0,8)), new Date(2012,0,8), 'second week of 2012 starts on Jan. 8th');
    deepEqual(calSun.weekStartDate(new Date(2012,0,10)), new Date(2012,0,8), 'second week of 2012 starts on Jan. 8th');
});
test('weekStartDate, Monday', function() {
    var calMon = new Calendar(1); // calendar with Monday as first day of the week
    deepEqual(calMon.weekStartDate(jan_1_2012), new Date(2011,11,26),
        'December. 26th 2011 is the start of the first week of 2012');
    deepEqual(calMon.weekStartDate(new Date(2012,0,2)), new Date(2012,0,2),
        'second week of 2012 starts on Jan. 2nd');
    deepEqual(calMon.weekStartDate(new Date(2012,0,8)), new Date(2012,0,2),
        'second week of 2012 starts on Jan. 2nd');
    deepEqual(calMon.weekStartDate(new Date(2012,0,9)), new Date(2012,0,9),
        'third week of 2012 starts on Jan. 9th');
});