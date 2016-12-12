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
testSize = 16 #20 if not pruned

full <- sapply(1:ncol(testCalendarCoverageDetailed),function(x) sum(testCalendarCoverageDetailed[,x]))
minimal <- sapply(1:ncol(testCalendarCoverageMinimalDetailed),function(x) sum(testCalendarCoverageMinimalDetailed[,x]))
cov <- c(testCalendarCoverages,0)
full <- c(full,0)
minimal <- c(minimal,0)

plot(cov, full/testSize, type = "l", col = "chartreuse2", lwd=3, xlab = "Test coverage", ylab = "Bugs probability",ylim=c(0,1), xlim=c(0,100))
par(new=TRUE)
plot(cov, minimal/testSize, type = "l", col = "brown3", lwd=3, xlab = "Test coverage", ylab = "Bugs probability",ylim=c(0,1), xlim=c(0,100))
legend(0,95, legend=c("Full", "Minimal"),col=c("chartreuse2", "brown3"), lty=1:2, cex=0.8)


if(pruning){
  source("init.R")
}



#clean up
rm(bugProbs)
rm(testCov)
rm(testCases)
rm(lo)
rm(xl)