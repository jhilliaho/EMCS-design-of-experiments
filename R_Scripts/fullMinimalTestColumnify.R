full <- sapply(1:ncol(testColumnifyCoverageDetailed),function(x) sum(testColumnifyCoverageDetailed[,x]))
minimal <- sapply(1:ncol(testColumnifyCoverageMinimalDetailed),function(x) sum(testColumnifyCoverageMinimalDetailed[,x]))



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