var arrayb = [1,2,3];
var pow =2
var novoarray = 0;

for(var i = arrayb.length; i<=0; i--)
{ 
    console.log("index =" + i);
    if(arrayb[i] == arrayb.length)
    
    {
        novoarray += arrayb[i] * Math.pow (10,pow);
        pow++;
    }
}
novoarray++;
console.log(novoarray);


