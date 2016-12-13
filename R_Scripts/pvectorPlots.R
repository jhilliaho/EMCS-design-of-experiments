#use Pruning
pruning = TRUE
if(pruning){
  testPvectorCoverageDetailed <- testPvectorCoverageDetailed[1:17,]
  testPvectorCasesDetailed <- testPvectorCasesDetailed[1:17,]
  testPvectorFull <- testPvectorFull[1:17]
  #testPvectorFullMinimal <- testPvectorFullMinimal[1:17]
}

#plot bug probability of Pvector given different test coverage levels
bugProbs <- sapply(1:ncol(testPvectorCoverageDetailed),function(x) sum(testPvectorCoverageDetailed[,x])/nrow(testPvectorCoverageDetailed))*100
testCov <- testPvectorCoverages

plot(testCov,bugProbs,ylab = "bugs detected in %", xlab = "test coverage in %",main = "Bug probability of Pvector given test coverage")
lo <- loess(bugProbs ~ testCov)
xl <- seq(min(testCov),max(testCov), (max(testCov) - min(testCov))/5)
lines(xl,predict(lo,xl),col='red',lwd=2)



#plot bug probability and test coverage of Pvector given different amount of test cases
bugProbs <- sapply(1:ncol(testPvectorCasesDetailed),function(x) sum(testPvectorCasesDetailed[,x])/nrow(testPvectorCasesDetailed))*100
testCases <- testPvectorCases
testCov <- testPvectorCasesCoverages

plot(testCases,bugProbs,ylab = "bugs detected in %", xlab = "test cases",main = "Bug probability of Pvector given test cases")
lo <- loess(bugProbs ~ testCases)
xl <- seq(min(testCases),max(testCases), (max(testCases) - min(testCases))/5)
lines(xl,predict(lo,xl),col='red',lwd=2)

plot(testCases,testCov,ylab = "test coverage in %", xlab = "test cases",main = "Test coverage of Pvector given test cases")
lo <- loess(testCov ~ testCases)
xl <- seq(min(testCases),max(testCases), (max(testCases) - min(testCases))/10)
lines(xl,predict(lo,xl),col='red',lwd=2)

#plot bugs found of full and full minimal test suite
testSize = 16 #20 if not pruned

full <- sapply(1:ncol(testPvectorCoverageDetailed),function(x) sum(testPvectorCoverageDetailed[,x]))
#minimal <- sapply(1:ncol(testPvectorCoverageMinimalDetailed),function(x) sum(testPvectorCoverageMinimalDetailed[,x]))
cov <- c(testPvectorCoverages,0)
full <- c(full,0)
#minimal <- c(minimal,0)

plot(cov, full/testSize, type = "l", col = "chartreuse2", lwd=3, xlab = "Test coverage", ylab = "Bugs probability",ylim=c(0,1), xlim=c(0,100))
#par(new=TRUE)
#plot(cov, minimal/testSize, type = "l", col = "brown3", lwd=3, xlab = "Test coverage", ylab = "Bugs probability",ylim=c(0,1), xlim=c(0,100))
#legend(0,95, legend=c("Full", "Minimal"),col=c("chartreuse2", "brown3"), lty=1:2, cex=0.8)


if(pruning){
  source("init.R")
}



#clean up
rm(bugProbs)
rm(testCov)
rm(testCases)
rm(lo)
rm(xl)