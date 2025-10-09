var smallerNumbersThanCurrent = function(nums) {
let outputArray = []
for(i=0;i<nums.length;i++){
  let count = 0
  for(j=0;j<nums.length;j++){
    if(nums[j] < nums[i]){
      count= count+1
      // console.log('count ', count)
    }
  }
  outputArray.push(count)
}
// console.log('outputArray ', outputArray)
return outputArray
};
