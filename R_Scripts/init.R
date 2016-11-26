#use this script to load all your data

testCalendarFull <- c(1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0)
testCalendarFullMinimal <- c(1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0)
testCalendar90P <- c(1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0)
testCalendar70P <- c(1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0)
testCalendar60P <- c(1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0)
testCalendar45P <- c(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
testCalendar30P <- c(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)

testCalendar0C <- c(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
testCalendar1C <- c(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
testCalendar2C <- c(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
testCalendar3C <- c(1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0)
testCalendar5C <- c(1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0)
testCalendar10C <- c(1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0)
testCalendar20C <- c(1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0)
testCalendar30C <- c(1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0)
testCalendar35C <- c(1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0)

testCalendarCoverages <- c(100,88.37,74.4,62.8,46.5,30.23)
testCalendarCases <- c(35,30,20,10,5,3,2,1,0)
testCalendarCasesCoverages <- c(100,100,93.02,67.44,65.12,62.79,37.21,30.23,0)

testCalendarCoverageDetailed <- data.frame(testCalendarFull,testCalendar90P,testCalendar70P,testCalendar60P,testCalendar45P,testCalendar30P)
testCalendarCasesDetailed <- data.frame(testCalendar35C,testCalendar30C,testCalendar20C,testCalendar10C,testCalendar5C,testCalendar3C,testCalendar2C,testCalendar1C,testCalendar0C)