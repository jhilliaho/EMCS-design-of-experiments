#use Pruning
pruning = FALSE
if(pruning){
  testPvectorFull <- testPvectorFull[1:17]
}

fullDetected <- length(which(testPvectorFull>0))


#test for normality
print(shapiro.test(testPvectorFull))
#p < 0.05 means no normality
qqnorm(testPvectorFull)
qqline(testPvectorFull, col = 2)
#should be a diagonal for normality




if(pruning){
  source("pvectorInit.R")
}