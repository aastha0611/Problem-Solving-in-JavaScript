var find=function(arr,x){
  var n=arr.length;
  var i=n-1;
  var j=0;
  var flag=0;
  while((j<n) && (i>=0))
  {
    if(arr[i][j]==x)
    {
      console.log("Found element " + x + " at [" + i+"]["+j+"]");
      flag=1;
      break;
    }
    else if(arr[i][j]>x) 
      i=i-1;
    else
      j=j+1;
  }
  if(!flag)
    console.log("Element " + x + " not found");
}
twoDarray=[[10,20,30,40],[11,21,31,41],[12,22,32,42],[15,25,35,45]];
find(twoDarray,25);