let arrayb = [1,2,3];
var pow =0;
var novoarray = 0;

for(var i = arrayb.length-1; i >= 0; i--)
{ 
    console.log("Index = "+ i+ "Value= " + arrayb[i]);
    
        novoarray +=  arrayb[i] * Math.pow (10 , pow);
        pow++;
          
}
novoarray++;
console.log(novoarray);
