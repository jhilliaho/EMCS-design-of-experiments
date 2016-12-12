


# Create array of 100 rows
array=()
for ((i=1; i<=100; i++)); do
   array[i]="permutations[$i,] = c("
done


# Go through 20 files
for ((i=1; i<=20; i++)); do

	counter=1
	# Read a file to array
	while IFS='' read -r line || [[ -n "$line" ]];
	do
		if [ "$i" -lt "20" ]
        then
        	array[counter]=${array[counter]}$line,
        else
        	array[counter]=${array[counter]}$line")"        	
        fi
        let counter+=1
	done < "test$i"
done

echo "permutations <- matrix(nrow = 100, ncol = 20)" > "result_to_r"
echo "" >> "result_to_r"

# Print results
for a in "${array[@]}"
do
	echo $a >> "result_to_r"
done

#testColumnifyPermutations <- matrix(
#  nrow = 100, ncol = 20
#)