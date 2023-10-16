console.log(2==1)
 console.log(2>1)
 console.log(2<1)
 console.log(2<=1)
 console.log(2>=1)
console.log(2 != 1)

//------------------------------**********-----------------------//

 console.log("2" < 4)
 console.log("2" > 1)

 console.log(null > 0)
 console.log(null < 0)
 console.log(null <= 0)
 console.log(null >= 0)

// the reason is that an equality check == and comparision ><  and >= or <= work differently 

 //coparisons convert null to a number treating it as a 0 
 //thats why (3) null >= is true 
 //and null > 0 is false


// === check the dataypes as well

console.log("2" === 2) // O/P false
console.log(2 === 2) // O/P true


 let state =(Boolean (null))
 let state1 = (state)


 console.log(state1)