const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');
const QUESTION = ['Whats your name? Nicknames are also acceptable: ',
  "Whats an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  'Which sport is your absolute favourite? ',
  "What is your superpower? In a few words, tell us what you are amazing at! "]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(Thank you for your valuable feedback: ${answer});



rl.question(QUESTION[0], (answer) => {
  const name = answer;

  rl.question(QUESTION[1], (answer) => {
    const activity = answer;

    rl.question(QUESTION[2], (answer) => {
      const music = answer;

      rl.question(QUESTION[3], (answer) => {
        const meal = answer;

        rl.question(QUESTION[4], (answer) => {
          const food = answer;

          rl.question(QUESTION[5], (answer) => {
            const sport = answer;

            rl.question(QUESTION[6], (answer) => {
              const superpower = answer;
              console.log(`\n--------------------------------------
              \n${QUESTION[0]} - ${name}, 
              \n ${QUESTION[1]} - ${activity}, 
              \n ${QUESTION[2]} - ${music}, 
              \n ${QUESTION[3]} - ${meal}, 
              \n ${QUESTION[4]} - ${food} 
              \n ${QUESTION[5]} - ${sport}, 
              \n  ${QUESTION[6]} - ${superpower}`)
              rl.close();
            })
          })
        })
      })
    })
  })
});