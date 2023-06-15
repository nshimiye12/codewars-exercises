// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.



function arrayPlusArray(arr1, arr2) {
    const sum1 = arr1.reduce((acc, num) => acc + num, 0);
    const sum2 = arr2.reduce((acc, num) => acc + num, 0);
  
    // Step 2: Add the sums of both arrays
    const totalSum = sum1 + sum2;
  
    // Step 3: Return the total sum
    return totalSum;
  }