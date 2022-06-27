const form = document.querySelector('.formular')
const upSentence = document.querySelector('.uppercased')
const capSentence = document.querySelector('.capitalized')
const input = document.querySelector('.innerValue')
const submitUList = document.querySelector('.submitUL')
const uperBtn = document.querySelector('.uperList')
const downBtn = document.querySelector('.downList')
const capiBtn = document.querySelector('.capiList')

const onLoad = () =>{
  upSentence.style.textTransform = 'uppercase';
  capSentence.style.textTransform = 'capitalize'
}

window.onload = onLoad

const changer = (e) =>{
  e.preventDefault()
  let inputList = [];
  let inputValue = input.value;
  inputList.push(inputValue)
  inputList.map((item)=>{
      const currentItem = document.createElement("li")
      submitUList.appendChild(currentItem)
      currentItem.innerHTML = item;
  })
  input.value = '';
}
const changeList = (e)=>{
  const chold = submitUList.children;
  Array.from(chold).map((child)=>{
    if(e.target === uperBtn){ child.style.textTransform = 'uppercase'}
    if(e.target === downBtn){ child.style.textTransform = 'lowercase'}
    if(e.target === capiBtn){ child.style.textTransform = 'capitalize'}
  })
}
form.addEventListener('submit', changer)
uperBtn.addEventListener('click', changeList )
downBtn.addEventListener('click', changeList )
capiBtn.addEventListener('click', changeList )

//--------------------------------------------------------------------------------------------------
let frase = 'Yo dono rosas, Oro no doy'

const reverse3= (text)=>{
  if (text===""){return ""}
  let subtext = text.substring(1)
  return reverse3(subtext) + text.charAt(0)
}
console.log(reverse3(frase))


const reverse4 = (text)=>{
  let newArray = [];
  myArray = text.split("");
  for(let i = myArray.length-1; i >= 0 ; i--){
   newArray.push(myArray[i])
  }
  return newArray.join("")
}
console.log(reverse4(frase))

const reverse = (text) =>{
  let textReverse = "";
  for(letter of text){
      textReverse = letter + textReverse
  }
  return textReverse
}
console.log(reverse(frase))

const reverse2 = (text) =>{
  let arrayText = [...text];
  arrayText.reverse()
  return arrayText.join("")
}
console.log(reverse2(frase))


const isPalindrome = (text)=>{
  let original = text.split(" ").join("")
  let noComaOriginal = original.split(",").join("").toLowerCase()
  let reversed = reverse(text).split(" ").join("")
  let noComaReverse = reversed.split(",").join("").toLowerCase()
  console.log(noComaOriginal)
  console.log(noComaReverse)
  return noComaOriginal === noComaReverse
}

console.log(isPalindrome(frase))


const volteaPalabras = (text) =>{
  let separado = text.split(" ");
  let yVolteado = separado.map((palabra)=>{
    return reverse(palabra)
  })
  return yVolteado.join(" ")
}

console.log(volteaPalabras(frase))

//------------------------------------------------------------------------------------------


const orderArrayJoiner = (arr1 , arr2) =>{
  const joinArray = [];
  while(arr1.length && arr2.length){
    let itemToAdd
    if (arr1[0]<arr2[0]){
      itemToAdd = arr1.shift()}
    else{ itemToAdd = arr2.shift()}
    joinArray.push(itemToAdd)
  }
  let newArray = joinArray.concat(arr1).concat(arr2)
    return newArray
}

const ar1 = ["a","j"]
const ar2 = [2,3,6,7,10, "x"]



console.log(orderArrayJoiner(ar1,ar2))


//-------------------------------------------------------------------------

const arrz = [7,7,9,2,0,3,5,7,1,2,9,3,23,76,12]

const arrayOrderer = (arr) =>{
  let orderedArray = arr.sort((a,b)=> {return a - b})
  return orderedArray
}

console.log(arrayOrderer(arrz))


const arrayOrderer2 = (arr) =>{
  if (arr.length === 1) return arr
  let midLength = Math.trunc(arr.length/2)
  let leftmid = arr.splice(0,midLength)
  let rightmid = arr;
  let mergeLeft = arrayOrderer2(leftmid)
  let mergeRight = arrayOrderer2(rightmid)

  return orderArrayJoiner(mergeLeft, mergeRight)
}

console.log(arrayOrderer2(arrz))


const prueba = ["julio", "rafa", "gethse"];

prueba[3] = "new momy"

console.log(prueba)


function bigFunction(y){
  return function something(x){
    return function other (z){console.log(x+y+z)}}
}

let insideFunction = bigFunction(4)

let centerFuntion = insideFunction(7)

centerFuntion(5)


