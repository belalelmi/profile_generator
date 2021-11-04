const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');
const questionare = ['Whats your name? Nicknames are also acceptable: ',
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



rl.question(questionare[0], (answer) => {
  const name = answer;

  rl.question(questionare[1], (answer) => {
    const activity = answer;

    rl.question(questionare[2], (answer) => {
      const music = answer;

      rl.question(questionare[3], (answer) => {
        const meal = answer;

        rl.question(questionare[4], (answer) => {
          const food = answer;

          rl.question(questionare[5], (answer) => {
            const sport = answer;

            rl.question(questionare[6], (answer) => {
              const superpower = answer;
              console.log(`\n--------------------------------------
              \n${questionare[0]} - ${name}, 
              \n ${questionare[1]} - ${activity}, 
              \n ${questionare[2]} - ${music}, 
              \n ${questionare[3]} - ${meal}, 
              \n ${questionare[4]} - ${food} 
              \n ${questionare[5]} - ${sport}, 
              \n  ${questionare[6]} - ${superpower}`)
              rl.close();
            })
          })
        })
      })
    })
  })
});