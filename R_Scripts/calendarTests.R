#use Pruning
pruning = FALSE
if(pruning){
  testCalendarFull <- testCalendarFull[1:16]
  testCalendarFullMinimal <- testCalendarFullMinimal[1:16]
}

fullDetected <- length(which(testCalendarFull>0))
fullMinimalDetected <- length(which(testCalendarFullMinimal>0))


#test for normality
shapiro.test(testCalendarFull)
shapiro.test(testCalendarFullMinimal)
#p < 0.05 means no normality
qqnorm(testCalendarFull)
qqline(testCalendarFull, col = 2)
qqnorm(testCalendarFullMinimal)
qqline(testCalendarFullMinimal, col = 2)
#should be a diagonal for normality



#paired student's t-test
#http://support.minitab.com/en-us/minitab/17/topic-library/basic-statistics-and-graphs/hypothesis-tests/tests-of-means/why-use-paired-t/
t.test(testCalendarFull,testCalendarFullMinimal,paired=TRUE)
#if p < 0.05 -> reject null hypothesis and accept alternative
#p < 0.05 means that there is a difference in the means

t.test(testCalendarFull,testCalendarFullMinimal,paired=TRUE,alt="greater")
#p < 0.05 --> The population mean of the differences (mud) is greater than the hypothesized mean of the differences (mu0).

prop.test(x=c(fullDetected,fullMinimalDetected),n=c(length(testCalendarFull),length(testCalendarFull)))
#p < 0.05 --> difference in proportions
#probably just works with bigger sample



if(pruning){
  source("init.R")
}