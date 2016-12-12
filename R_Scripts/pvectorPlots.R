#use Pruning
pruning = TRUE
if(pruning){
  testCalendarCoverageDetailed <- testCalendarCoverageDetailed[1:16,]
  testCalendarCasesDetailed <- testCalendarCasesDetailed[1:16,]
  testCalendarFull <- testCalendarFull[1:16]
  testCalendarFullMinimal <- testCalendarFullMinimal[1:16]
}

#plot bug probability of calendar given different test coverage levels
bugProbs <- sapply(1:ncol(testCalendarCoverageDetailed),function(x) sum(testCalendarCoverageDetailed[,x])/nrow(testCalendarCoverageDetailed))*100
testCov <- testCalendarCoverages

plot(testCov,bugProbs,ylab = "bugs detected in %", xlab = "test coverage in %",main = "Bug probability of calendar given test coverage")
lo <- loess(bugProbs ~ testCov)
xl <- seq(min(testCov),max(testCov), (max(testCov) - min(testCov))/5)
lines(xl,predict(lo,xl),col='red',lwd=2)



#plot bug probability and test coverage of calendar given different amount of test cases
bugProbs <- sapply(1:ncol(testCalendarCasesDetailed),function(x) sum(testCalendarCasesDetailed[,x])/nrow(testCalendarCasesDetailed))*100
testCases <- testCalendarCases
testCov <- testCalendarCasesCoverages

plot(testCases,bugProbs,ylab = "bugs detected in %", xlab = "test cases",main = "Bug probability of calendar given test cases")
lo <- loess(bugProbs ~ testCases)
xl <- seq(min(testCases),max(testCases), (max(testCases) - min(testCases))/5)
lines(xl,predict(lo,xl),col='red',lwd=2)

plot(testCases,testCov,ylab = "test coverage in %", xlab = "test cases",main = "Test coverage of calendar given test cases")
lo <- loess(testCov ~ testCases)
xl <- seq(min(testCases),max(testCases), (max(testCases) - min(testCases))/10)
lines(xl,predict(lo,xl),col='red',lwd=2)

#plot bugs found of full and full minimal test suite
plot(1:length(testCalendarFull),testCalendarFull,col="green",xlab="Number of injected bug",ylab="Found?", type="l",main = "Bugs found given the full or minimal/ full test suite")
par(new=TRUE)
plot(1:length(testCalendarFullMinimal),testCalendarFullMinimal,col="red",xlab="",ylab="", type="l")



if(pruning){
  source("init.R")
}



#clean up
rm(bugProbs)
rm(testCov)
rm(testCases)
rm(lo)
rm(xl)