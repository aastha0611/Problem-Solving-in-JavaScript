var isAnagram=fuction(incomingStr)
{
	str=incomingStr;

var countodd=function(obj)
{ var odd=0;
  for(var key in obj)
  {
    if(obj[key]%2!=0)
      odd++;
  }
  return odd;
}

this.isPalindrome=function()
{
  var stringarr=str.split("").sort();
  var map={};
  for(var i=0;i<=stringarr.length-1;i++)
  {
    map[stringarr[i]]=map[stringarr[i]]+1;
  }
  if(countodd(map)>1)
    console.log("Not a Palindrome");
  else
    console.log("Palindrome");
  }
}
var palin=isAnagram("aaaabbbbcdddd");
palin.isPalindrome();