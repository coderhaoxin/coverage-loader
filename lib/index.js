'use strict'

const utils = require('loader-utils')
const istanbul = require('istanbul')
const path = require('path')
const fs = require('fs')

const instrumenter = new istanbul.Instrumenter()
const collector = new istanbul.Collector()
const reporter = new istanbul.Reporter()
const sync = false

exports = module.exports = function() {
  if (this.cacheable) {
    this.cacheable()
  }
}

// exports.pitch = function(req) {

// }

const filename = path.resolve(__dirname, 'a.js')
let content = fs.readFileSync(filename)

instrumenter.instrument(content, filename, (err, code) => {
  if (err) {
    return console.error(err)
  }

  // console.log(code)

  let result1 = eval(code)

  console.log(result1)

  collector.add({
    [filename]: result1
  })

  reporter.addAll(['html', 'json'])
  reporter.write(collector, sync, function() {
    console.log('All reports generated')
  })
})
