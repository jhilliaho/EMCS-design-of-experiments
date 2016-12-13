require(exactRankTests)
testSize = 17 #20 if not pruned

full <- sapply(1:ncol(testCalendarCoverageDetailed),function(x) sum(testCalendarCoverageDetailed[,x]))
minimal <- sapply(1:ncol(testCalendarCoverageMinimalDetailed),function(x) sum(testCalendarCoverageMinimalDetailed[,x]))

#remove last 2 test suites as they not detect bugs at all
full <- full[1:4]
minimal <- minimal[1:4]

#test for normality
shapiro.test(full)
shapiro.test(minimal)
#p < 0.05 means no normality
qqnorm(full)
qqline(full, col = 2)
qqnorm(minimal)
qqline(minimal, col = 2)
#should be a diagonal for normality



#paired student's t-test
#http://support.minitab.com/en-us/minitab/17/topic-library/basic-statistics-and-graphs/hypothesis-tests/tests-of-means/why-use-paired-t/
t.test(full,minimal,paired=TRUE,alt="greater")
#p < 0.05 --> The population mean of the differences (mud) is greater than the hypothesized mean of the differences (mu0).

prop.test(x=c(sum(full),sum(minimal)),n=c(length(full)*testSize,length(minimal)*testSize))
#p < 0.05 --> difference in proportions
#probably just works with bigger sample

wilcox.exact(full,minimal,alternative = "greater",paired = TRUE,exact = FALSE)

#cleanup
#rm(full)
#rm(minimal)