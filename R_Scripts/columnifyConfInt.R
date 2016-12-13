attributes <- 20

myData <- sapply(1:ncol(testColumnifyFullDetailed[1:attributes,]),function(x) sum(testColumnifyFullDetailed[,x])/attributes)
myData
shapiro.test(myData)
qqnorm(myData)
qqline(myData, col = 2)


#confidence interval according to students t-distribution
sampleMean <- mean(myData)
s <- sd(myData)
n <- length(myData)
error <- qt(0.975,df=n-1)*s/sqrt(n)
left <- sampleMean-error
right <- sampleMean+error
confidenceInterval <- c(left,right)
confidenceInterval

#using bootstrap to create normally distributed data! - big in love with bootstrap <3
require(boot)
# function to obtain the mean
Bmean <- function(data, indices) {
  d <- data[indices] # allows boot to select sample 
  return(mean(d))
} 

results <- boot(data = myData, statistic=Bmean, R=1000)
results
plot(results)

boot.ci(results, type=c("norm", "basic", "perc", "bca"))
print(boot.ci(results, type=c("norm", "basic", "perc", "bca")))




#cleanup
rm(myData)