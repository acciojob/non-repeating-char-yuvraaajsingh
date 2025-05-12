function firstNonRepeatedChar(str) {
 // Write your code here

			for (let i = 0; i < str.length-1; i+2) {
				if(str[i]==str[i+1])}
					continue;
				else
					return str[i];
					
		
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
