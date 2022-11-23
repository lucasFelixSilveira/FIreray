const exec = require('child_process').exec;

function command(cmd) {
  exec('echo '+cmd, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout.split('\n').join(''));
  });
}

module.exports.command = command;