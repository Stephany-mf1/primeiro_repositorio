let arrayA : Array <number> = [1,7,3,6,5,6];

let pivoti:string = '-1';

for(var i in arrayA)
{
    let leftsum:number =0; 
    let rightSum: number =0;

    for(var i2 in arrayA)
    {
       if(i2 < i)
       {
            leftsum += arrayA[i2];
            
       }
       else if (i2 > i)
       {
            rightSum += arrayA[i2];
       }

    } 
    if(leftsum == rightSum)
    {
         pivoti = i;
    }
    
}console.log("pivot index =" + i)
