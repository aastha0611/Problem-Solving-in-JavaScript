var allCaseCombo=function(str)
{
  var s=str.toLowerCase().split('');  
  var res=[];
  var len=Math.pow(str.length,2);
  for(var i=0;i<len;i++)
  {
    for(var j=0, bit=i; j<str.length; j++, bit=bit/2 )
    {
      s[j]=(bit & 1)? s[j].toUpperCase() : s[j].toLowerCase();
    }
    var new_string=s.join('');
    res.push(new_string);
  }
  console.log(res);
}
allCaseCombo('nyu');