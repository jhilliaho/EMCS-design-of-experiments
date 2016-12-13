#use Pruning
pruning = FALSE
if(pruning){
  testColumnifyFull <- testColumnifyFull[1:16]
  testColumnifyFullMinimal <- testColumnifyFullMinimal[1:16]
}

fullDetected <- length(which(testColumnifyFull>0))
fullMinimalDetected <- length(which(testColumnifyFullMinimal>0))


#test for normality
shapiro.test(testColumnifyFull)
shapiro.test(testColumnifyFullMinimal)
#p < 0.05 means no normality
qqnorm(testColumnifyFull)
qqline(testColumnifyFull, col = 2)
qqnorm(testColumnifyFullMinimal)
qqline(testColumnifyFullMinimal, col = 2)
#should be a diagonal for normality


#paired student's t-test
#http://support.minitab.com/en-us/minitab/17/topic-library/basic-statistics-and-graphs/hypothesis-tests/tests-of-means/why-use-paired-t/
t.test(testColumnifyFull,testColumnifyFullMinimal,paired=TRUE)
#if p < 0.05 -> reject null hypothesis and accept alternative
#p < 0.05 means that there is a difference in the means

t.test(testColumnifyFull,testColumnifyFullMinimal,paired=TRUE,alt="greater")
#p < 0.05 --> The population mean of the differences (mud) is greater than the hypothesized mean of the differences (mu0).

prop.test(x=c(fullDetected,fullMinimalDetected),n=c(length(testColumnifyFull),length(testColumnifyFull)))
#p < 0.05 --> difference in proportions
#probably just works with bigger sample



if(pruning){
  source("columnifyInit.R")
}