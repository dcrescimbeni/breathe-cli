#!/usr/bin/env node

import chalk, { ChalkInstance } from 'chalk';
import { program } from 'commander';
import ora from 'ora';

program
  .version('0.1.0')
  .description('Guided breathing for your terminal')
  .option('-p, --pattern <box|478>', 'breathing pattern', 'box')
  .option('-c, --cycles <number>', 'number of cycles', '4')
  .parse(process.argv)

const options = program.opts();
const cycles = parseInt(options.cycles) || 4;

type PhaseName = 'inhale' | 'hold' | 'exhale'

interface Phase {
  name: PhaseName
  duration: number;
  color: ChalkInstance;
}

const display = new Map<PhaseName, string>(
  [
    ['inhale', 'Inhale   '],
    ['hold', 'Hold     '],
    ['exhale', 'Exhale   '],
  ]
)

const activeSpinner = {
  "interval": 200,
  "frames": ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]
}

const pausedSpinner = {
  "interval": 200,
  "frames": ["⠿"]
}

const seconds = async (seconds: number) => await new Promise(resolve => setTimeout(resolve, seconds * 1000));

const main = async () => {
  let phases: Phase[] = []

  if (options.pattern === '478') {
    phases = [
      { name: 'inhale', duration: 4, color: chalk.green },
      { name: 'hold', duration: 7, color: chalk.yellow },
      { name: 'exhale', duration: 8, color: chalk.cyan },
    ]
  } else if (options.pattern === 'box') {
    phases = [
      { name: 'inhale', duration: 4, color: chalk.green },
      { name: 'hold', duration: 4, color: chalk.yellow },
      { name: 'exhale', duration: 4, color: chalk.cyan },
      { name: 'hold', duration: 4, color: chalk.yellow },
    ]
  }

  const phaseSpinner = ora();
  phaseSpinner.spinner = activeSpinner
  phaseSpinner.start();

  console.log("")
  console.log("")
  phaseSpinner.text = chalk.white(
    `Take a minute for ${options.pattern === 'box' ? 'Box' : '4-7-8'
    } breathing. ${cycles} cycles`
  )
  await seconds(4)

  phaseSpinner.text = chalk.white('Focus on your breathing and settle in')
  await seconds(4)

  for (let cycle = 1; cycle <= cycles; cycle++) {

    for (const phase of phases) {
      for (let second = 1; second <= phase.duration; second++) {
        // Spinner change logic
        if (second === 1) {
          if (phase.name === 'hold') phaseSpinner.spinner = pausedSpinner
          else phaseSpinner.spinner = activeSpinner
        }

        const phaseDisplayText = display.get(phase.name)
        // Phase display
        phaseSpinner.text = `${phase.color(`${phaseDisplayText} (${second}/${phase.duration})`)}    ${chalk.dim(`[${cycle}/${cycles}]`)}`;

        await seconds(1)
      }
    }
  }

  phaseSpinner.stop();
  console.log(chalk.greenBright('All done. Hope that helped you reset a bit.'));
}

main()

