import { doTheThing } from './utils/index.ts'
import Spinner from 'https://deno.land/x/cli_spinners/mod.ts';

const spinner = Spinner.getInstance();

spinner.start('Installing dependecies...');

setTimeout(async () => {
  await spinner.warn('Some dependecies failed to install');
  spinner.setSpinnerType('weather');
  spinner.start('Contacting the server...');

  setTimeout(async () => {
    await spinner.fail('Server did not respond');
    spinner.setSpinnerType('clock');
    spinner.start('Updating cache...');
    console.log(doTheThing())

    setTimeout(async () => {
      await spinner.succeed();
    }, 2000);
  }, 2000);
}, 2000);
