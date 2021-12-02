


function myEach (collection, alert) {
  if (typeof collection === 'object') {
    Object.values(collection).forEach((element) => alert(element))
  }
  return collection
}

function myMap (collection, cb) {
  let modArray = []
  if (typeof collection === 'object') {
    Object.values(collection).forEach((element) => {
      modArray.push(cb(element))
    })
  return modArray
  }
}
/* Steps for myReduce

1. takes a colelction, a callback function, and an optional starting value
2. determine if the collection is an array or an object
3. If it is an object, use the Object.values method to turn it into an array
4. if it is an array proceed
5. pass the value of acc into callback if it exists as the initial value
6. iterate through the array, passing each element into callback, updating acc with new value each time
7. return value of acc

*/

function myReduce (collection, callback, acc) {
  let arrCollection = []
  Array.isArray(collection) ? arrCollection = [...collection] : arrCollection = Object.values(collection)
  if (!acc) {
    acc = arrCollection[0]
    arrCollection = arrCollection.slice(1)
  }
  for (const value of arrCollection) {
    acc = callback(acc, value, arrCollection)
  }
  return acc
}

/* Steps for myFind

1. takes in a collection, makes sure it is an array
2. takes in a callback function that returns true or false
3. cb iterates through the collection, finding the first value that returns true
4. stops iterating
5. returns that value

*/

function myFind (collection, cb) {
  let arrCollection = []
  Array.isArray(collection) ? arrCollection = [...collection] : arrCollection = Object.values(collection)
  for (const element of arrCollection) {
    if (cb(element) === true) {
        return element
    }
  }
}

function myFilter (collection, cb) {
  let arrCollection = []
  let modArray = []
  Array.isArray(collection) ? arrCollection = [...collection] : arrCollection = Object.values(collection)
  arrCollection.forEach(element => {
    if (cb(element) === true) {
      modArray.push(element)
    }
  })
  return modArray
}

function mySize (collection) {
  let totalOfElements = 0
  let arrCollection = []
  Array.isArray(collection) ? arrCollection = [...collection] : arrCollection = Object.values(collection)
  arrCollection.forEach(() => totalOfElements += 1)
  return totalOfElements
}

function myFirst (array, n) {
  let newArray = []
  if (n >= 0) {
  for (let i = 0; i < n; i++) {
    newArray.push(array[i])
    }
    return newArray
  }
  else if (!n) {
    return array[0]
  }
}

function myLast (array, n) {
  let newArray = []
  let reversedArray = [...array.reverse()]
  if (n >= 0) {
  for (let i = 0; i < n; i++) {
    newArray.push(reversedArray[i])
    console.log(newArray)
    }
    return newArray
  }
  else if (!n) {
    return reversedArray[0]
  }
}