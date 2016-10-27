var p = require('prompt-sync')()

module.exports = function(label, validation_function) {
  if (typeof label === 'function') {
    validation_function = label
    label = 'input: '
  } else if (typeof label === 'undefined') {
    label = 'input: '
  }

  if (typeof validation_function === 'undefined') {
    validation_function = function () { return true }
  }

  var okay = false
  while (!okay) {
    var res = p(label)
    okay = validation_function(res)
  }

  return res
}
