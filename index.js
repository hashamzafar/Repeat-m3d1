/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = (n1, n2) =>{
    
        if(n1 === n2){
           return( n1 * 3)
        }else{
            return( n1 + n2)
        }
    
        
    
}
console.log(sum(4,5))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const number = (n1, n2) =>{
    
    if(n1 >= 50 || n2 >= 50 || n1 + n2 === 50){
       return( true)
    }else{
        return( false)
    }

    

}
console.log(number(26+25))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const character = (str,pos) =>{
    return  (str.slice(0, pos) +str.slice(pos +1)
    )
 
}
console.log(character('happy',2))
/*

4)
 Create a function to find the largest of three given integers.
*/
const larger = (n1, n2,n3)=>{
    if (n1 > n2 || n1>n3){
       return n1
    }else if(n2>n1|| n2> n3){
        return n2
    }else  {
        return n3
    }
}
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
 const range = (n1,n2)=>{
    if(n1>= 40 && n1 <= 60){
        return 'range is between 40 to  60'
    }else if (n1>= 70 && n1 <= 100){
        return 'range is between 70 to 100'
    
    }else{
        return ' its not in range'
    }
 }


/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
  const funEx6 =(str, copies)=>{
      return copies >0 ? string.repeat(copies) : str
  }


/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/ 
 const city =(cityName)=>{
     return cityName.startsWith('Los') || cityName.startsWith('New') ? cityName: ' '
 }
 
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
 const calculator = (...array)=>{
     let sum = 0
     array.forEach((element)=>{
         sum += element
     })
     return sum
 }

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const test =(...argument)=>{
    argument.includes(1) || argument.includes(3)
}




10)

// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
const funcEx10 + (argument => !test(argument))




// 11)

// Create a function to find the longest string from a given array of strings.

const fancEx11 = (...arr){
    let lenghtArr = []
    arr.forEach((str)=>lenghtArr.push(str.lenth))
    let max = Math.max(...lenghtArr)
    let index = lengthArr.indexof(max)
    return `the largest name is ${arr[index]} with ${max} letters`
}


// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
const fancEx12 = ()=>{
    angle < 90? "acute" : angle === 90
    ? "right"
    :angle > 90 && angle < 189? "abtuse
    :angle === 180
    ? "straignt":false 
}



// 13)

// Create a function to find the index of the greatest element of a given array of integers

const fancEx13 = (arr)=>{
    const index =[]
    arr.forEach(nam => index.push(num))
    let greatest = Math.max(...index)
    return greatest
}




// 14)

// Create a function to get the largest even number from an array of integers.
const funcEx14 =(arr)=>{
    let evenArray=[]
    num % 2 === 0 ? array.push(num): 'this array has only odd numbers'
    return Math.max(evenArray)
}




// 15)

// Create a function to check from two given integers, whether one is positive and another one is negative.
const funcEx15 = (n1,n2)=>( n1 < 0 && n2 > 0)|| (n1 > 0 && n2 < 0)



// 16)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
const funcEx16 = ()=>{
    string.length < 3 ? string.toUpperCase() : string.substring(3, -1).toLowerCase() + string.substring(3).toUpperCase
}

// 17)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 18)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

