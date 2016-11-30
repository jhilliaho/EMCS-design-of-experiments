attributes <- 16

data <- sapply(1:ncol(testCalendarFullDetailed[1:attributes,]),function(x) sum(testCalendarFullDetailed[,x])/attributes)
data
shapiro.test(data)
qqnorm(data)
qqline(data, col = 2)


#confidence interval according to students t-distribution
sampleMean <- mean(data)
s <- sd(data)
n <- length(data)
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

results <- boot(data, statistic=Bmean, R=1000)
results
plot(results)

boot.ci(results, type=c("norm", "basic", "perc", "bca"))




#cleanup
#rm(data)