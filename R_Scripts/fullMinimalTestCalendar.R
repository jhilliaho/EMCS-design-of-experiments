full <- sapply(1:ncol(testCalendarCoverageDetailed),function(x) sum(testCalendarCoverageDetailed[,x]))
minimal <- sapply(1:ncol(testCalendarCoverageMinimalDetailed),function(x) sum(testCalendarCoverageMinimalDetailed[,x]))



#using bootstrap to create normally distributed data! - big in love with bootstrap <3
require(boot)
# function to obtain the mean
Bmean <- function(data, indices) {
  d <- data[indices] # allows boot to select sample 
  return(mean(d))
} 

results <- boot(data = full-minimal, statistic=Bmean, R=1000)
results
plot(results)

boot.ci(results, type=c("norm", "basic", "perc", "bca"))
# confidence interval is above 0 which means that full has higher probability.