#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
commander_1.program
    .version('1.0.0')
    .description('A CLI tool to help you breathe')
    .option('-p, --pattern <pattern>', 'The pattern to use', '4-7-8')
    .option('-c, --cycles <cycles>', 'The number of cycles to run', '10')
    .parse(process.argv)
    .action((options) => {
    console.log(options);
});
commander_1.program.parse(process.argv);
//# sourceMappingURL=main.js.map