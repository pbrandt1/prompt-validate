var prompt = require('./index.js')

console.log('Hi nice to meet you!  We\'re going to have a heckin good time.')
console.log('Lets learn abt each other. plz fill out this form.')
var name = prompt('Name: ', function (val) {
 if (val === 'peter') return true
 console.log('only peters are allowed')
})

var number_of_replicants = prompt('Number Of Replicants: ', function (val) {
  console.log('hmmm...', val, 'replicants, eh?')
  val = parseInt(val)

  if (typeof val !== 'number') {
    console.log('surely you can disclose the number of replicants you have. come on, just type a number')
    return false
  }

  if (val > 0) return true

  console.log('must have at LEAST one replicant.')
})

console.log('Do you have any final thoughts?')
var final_thoughts = prompt()

console.log('hi', name)
console.log('you have', number_of_replicants, 'replicants')
console.log('your FINAL THOUGHTS are', final_thoughts)
console.log('.')
console.log('.')
console.log('.')
console.log('PREPARE FOR NONEXISTENCE')
