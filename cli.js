#!/usr/bin/env node
const strReplace = require('guld-fs-str-replace')
const program = require('commander')
const VERSION = require('./package.json').version

/* eslint-disable no-console */
program
  .name('guld-fs-str-replace')
  .usage('<path> <old-str> <new-str> [flags...]', 'Replace old-string with new-string for all files in path.')
  .description('Replace old-string with new-string for all files in path.')
  .version(VERSION)
  .action(async (p, o, n, flags) => {
    strReplace(o, n, [p].concat(flags.rawArgs.slice(5)))
  })

program.parse(process.argv)

