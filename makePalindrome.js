var makePalindrome=function(str)
{
  var s=str;
  this.calculate=function()
  {
    map={};
    var strArray=s.split("").sort();
    for(var i=0;i<=strArray.length-1;i++)
    {
      map[strArray[i]]=(map[strArray[i]] || 0) +1;
    }
    var num=count(map)-1;
    console.log("Number of characters required to make the given string palindrome:"+ num);
  }
  var count=function(obj)
  {
    var c=0;
    for(var key in map)
    {
      if(map[key]%2!==0)
        c++;
    }
    return c;
  }
}
var palWord = new makePalindrome("abccd");
palWord.calculate();
