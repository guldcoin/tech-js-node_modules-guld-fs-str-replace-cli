#!/usr/bin/env node
const strReplace = require('guld-fs-str-replace')
const program = require('commander')
const thispkg = require(`${__dirname}/package.json`)
const runCLI = require('guld-cli-run')

/* eslint-disable no-console */
program
  .name(thispkg.name.replace('-cli', ''))
  .version(thispkg.version)
  .description(thispkg.description)
  .usage('<path> <old-str> <new-str> [flags...]', 'Replace old-string with new-string for all files in path.')
  .action(async (p, o, n, flags) => {
    strReplace(o, n, [p].concat(flags.rawArgs.slice(3)))
  })

runCLI.bind(program)()
module.exports = program
