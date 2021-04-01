var arrayA = [6,5,3,9,5,6];

for(var i = 0; i < arrayA.length; i++)
{
    for(var i2 = 0; i2 < arrayA.length; i2++)
    {
       if(i != i2 && arrayA[i] == arrayA[i2])
       {
            arrayA[i2] = null;
       }
    
}
}console.log(arrayA);