const progressBar = require('progress');

function progress(timeInSeconds) {
    const bar = new progressBar(':bar', {total : timeInSeconds, width : 4});
    const timer = () => setInterval(() => {
        bar.tick();
        if(bar.complete) {
            clearInterval(timer);
            process.exit();
        }
    }, 1000);
    timer();
}


module.exports = progress