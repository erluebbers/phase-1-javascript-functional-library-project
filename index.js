


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

function myReduce (collection, cb, acc) {
  let total = 0
  if (typeof collection === 'object') {
    let obj = Object.values(collection)
    for (const value of obj) {
      total += cb(0, value)
    }
    return total + acc
  }
}