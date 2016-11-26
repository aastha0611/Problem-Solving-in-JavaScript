function palindrome(){
	var str=document.getElementById("str").value;
	document.getElementById("result").innerHTML="";
	if(str.toLowerCase().replace(/ /g,'')==str.toLowerCase().replace(/ /g,'').split('').reverse().join('')){
		document.getElementById("result").innerHTML="Yes! It's a palindrome";	
	}
	else{
		document.getElementById("result").innerHTML="No! It's not a palindrome";
	}
}