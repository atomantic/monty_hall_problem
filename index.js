const shuffle = require('lodash.shuffle');
const random = require('lodash.random');

const iterations = 1000000;
const doorOptions = ['car', 'goat', 'goat'];

const trial = ({switches, wins, losses}) => {
    for(let i=0; i<iterations; i++){
        let doors = shuffle(doorOptions);
        // console.log(doors);
        // always chooses door number 1
        // let choiceNumber = 0;
        // chooses a random door
        let choiceNumber = random(0,2);
        // console.log(choiceNumber);
        let choice = doors[choiceNumber];
        // remaining (remove my choice)
        doors.splice(choiceNumber, 1);
        // console.log(choice, doors);
        for(let o=0;o<doors.length;o++){
            if(doors[o]==='goat'){
                // remove a goat
                doors.splice(o, 1);
                // just one
                break;
            }
        }
        // now there is just choice and doors[0] remaining as options
        let option2 = doors[0];
        // console.log(switches ? `switching from ${choice} to ${option2}` : `staying with ${choice} instead of ${option2}`);
        if(switches) {
            if(option2==='car') wins++;
            else losses++
        }else{
            if(option2==='car') losses++;
            else wins++
        }
    }
    return {wins, losses};
}

const switching = trial({switches: true, wins:0, losses:0});
const staying = trial({switches: false, wins:0, losses:0});

console.log(`ran ${iterations} iterations of each experiment`);
console.log(`switching: ${switching.wins} wins, ${switching.losses} losses, (${switching.wins/iterations})`);
console.log(`staying: ${staying.wins} wins, ${staying.losses} losses, (${staying.wins/iterations})`);