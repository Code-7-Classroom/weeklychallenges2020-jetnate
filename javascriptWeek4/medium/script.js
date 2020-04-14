
var numP = [4,5,6,7,0,1,2]
function checkTarget (arr,num) {    
 for(var i = 0; i < arr.length;i++) {
     if (arr[i] >= num){
         return 1;
     }
 }

 return arr;

}
checkTarget([4,5,6,7,0,1,2],4);
checkTarget([4,5,6,7,0,1,2],3);