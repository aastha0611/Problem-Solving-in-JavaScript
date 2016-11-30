var isPangram=function(s){
  var str=s;
  var alpha='abcdefghijklmnopqrstuvwxyz';
this.pangram=function()
{
  var input=str.toLowerCase().replace(/\s+/g,'');
  if(check(input))
    console.log(input+": pangram");
  else
    console.log(input+": not a pangram")
}
var check=function(input)
{ if(input.length<26)
    return false;
  for(var i=0;i<input.length;i++){
    var c=alpha.charAt(i);
    if(input.indexOf(c)==-1)
      return false;
  }
  return true;
} 
}
var pan=new isPangram('The quick brown fox jumps over the lazy dog');
var pan2=new isPangram('The quick brown fo jumps over the lazy dog');
pan.pangram();
pan2.pangram();