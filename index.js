


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
  let arrCollection
  let total = 0
  Array.isArray(collection) ? arrCollection = collection : arrCollection = Object.values(collection)
  if (acc != null) {
    arrCollection.forEach(element => {
      console.log(total)
      return total += callback(acc, element)
    })
  }
  else {
    arrCollection.forEach(element => callback(0, element, collection))
  }
  return 
}
