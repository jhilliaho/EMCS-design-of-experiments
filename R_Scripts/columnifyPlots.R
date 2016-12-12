#use Pruning
pruning = TRUE
if(pruning){
  testColumnifyCoverageDetailed <- testColumnifyCoverageDetailed[1:16,]
  #testColumnifyCasesDetailed <- testColumnifyCasesDetailed[1:16,]
  testColumnifyFull <- testColumnifyFull[1:16]
  testColumnifyFullMinimal <- testColumnifyFullMinimal[1:16]
}

#plot bug probability of Columnify given different test coverage levels
bugProbs <- sapply(1:ncol(testColumnifyCoverageDetailed),function(x) sum(testColumnifyCoverageDetailed[,x])/nrow(testColumnifyCoverageDetailed))*100
testCov <- testColumnifyCoverages

plot(testCov,bugProbs,ylab = "bugs detected in %", xlab = "test coverage in %",main = "Bug probability of Columnify given test coverage")
lo <- loess(bugProbs ~ testCov)
xl <- seq(min(testCov),max(testCov), (max(testCov) - min(testCov))/5)
lines(xl,predict(lo,xl),col='red',lwd=2)



#plot bug probability and test coverage of Columnify given different amount of test cases
#bugProbs <- sapply(1:ncol(testColumnifyCasesDetailed),function(x) sum(testColumnifyCasesDetailed[,x])/nrow(testColumnifyCasesDetailed))*100
#testCases <- testColumnifyCases
#testCov <- testColumnifyCasesCoverages

#plot(testCases,bugProbs,ylab = "bugs detected in %", xlab = "test cases",main = "Bug probability of Columnify given test cases")
#lo <- loess(bugProbs ~ testCases)
#xl <- seq(min(testCases),max(testCases), (max(testCases) - min(testCases))/5)
#lines(xl,predict(lo,xl),col='red',lwd=2)

#plot(testCases,testCov,ylab = "test coverage in %", xlab = "test cases",main = "Test coverage of Columnify given test cases")
#lo <- loess(testCov ~ testCases)
#xl <- seq(min(testCases),max(testCases), (max(testCases) - min(testCases))/10)
#lines(xl,predict(lo,xl),col='red',lwd=2)

#plot bugs found of full and full minimal test suite
plot(1:length(testColumnifyFull),testColumnifyFull,col="green",xlab="Number of injected bug",ylab="Found?", type="l",main = "Bugs found given the full or minimal/ full test suite")
par(new=TRUE)
plot(1:length(testColumnifyFullMinimal),testColumnifyFullMinimal,col="red",xlab="",ylab="", type="l")



if(pruning){
  source("init.R")
}



#clean up
rm(bugProbs)
rm(testCov)
rm(testCases)
rm(lo)
rm(xl)