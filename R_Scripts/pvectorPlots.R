#use Pruning
pruning = TRUE
if(pruning){
  testPvectorCoverageDetailed <- testPvectorCoverageDetailed[1:16,]
  testPvectorFull <- testPvectorFull[1:16]
}

#plot bug probability of Pvector given different test coverage levels
bugProbs <- sapply(1:ncol(testPvectorCoverageDetailed),function(x) sum(testPvectorCoverageDetailed[,x])/nrow(testPvectorCoverageDetailed))*100
testCov <- testPvectorCoverages

plot(testCov,bugProbs,ylab = "bugs detected in %", xlab = "test coverage in %",main = "Bug probability of Pvector given test coverage")
lo <- loess(bugProbs ~ testCov)
xl <- seq(min(testCov),max(testCov), (max(testCov) - min(testCov))/5)
lines(xl,predict(lo,xl),col='red',lwd=2)




if(pruning){
  source("pvectorinit.R")
}



#clean up
rm(bugProbs)
rm(testCov)
rm(lo)
rm(xl)