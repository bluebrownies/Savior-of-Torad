var story;
function getStory(name) {
  return {
    currentScene: "attack",
    attack: {
      title: "Chapter 1",
      story: `Once upon a time, the countryside village of Torad lived in blissful peace. Until one day it was attacked by a raging monster who terrorizes them in the midst of the night and there's only one person who can save them ${name}, it's you.`,
      image: "loading.gif",
      choices: [
        {
          choice: "Yes, I'm ready to accept",
          destination: 'battle'
        },
        {
          choice: "Meh, think I'd rather just play video games instead.",
          destination: 'goHome'
        }
      ]
    },

    goHome: {
      title: "Back at home!",
      story: "Yes, you're back in comfort of your own home. Don't worry about it, someone else took care of the problem. No need to feel guilty at all...",
      defaultDestination: 'attack',
      image: "start.gif",
      buttonText: "Let's try this again"

    },

    battle: {
      title: 'Choose your Weapons!',
      story: `In order for you to drive this monster away you have requested the villagers for weapons, they present a sword and a stick. Choose your weapon, choose your fate...`,
      choices: [
        {
        choice: "Choose sword as weapon.",
        destination: 'sword'
        },
        {
        choice: "Choose stick as weapon.",
        destination: 'stick'
        }
      ]
    },

    stick: {
      title: 'Choose your path',
      story: `Good choice young warrior, but there is another great decision you must make. To get to the monster there are two paths: The Forest of Horrors or The Ravaging Swamps. Each is deadly and no one has ever returned from either one. Make your choice ${name}.`,
      choices: [
        {
        choice: "The Forest of Horrors",
        destination: 'forest2'
        },
        {
        choice: "The Ravaging Swamps",
        destination: 'swamps2'
        }
      ]
    },


    sword : {
      title: 'Choose your path',
      story: `Good choice young warrior but there is another great decision you must make. To get to the monster there are two paths: The Forest of Horrors or The Ravaging Swamps. Each is deadly and no one has ever returned from either one. Make your choice ${name}.`,
      choices: [
        {
        choice: "The Forest of Horrors",
        destination: 'forest'
        },
        {
        choice: "The Ravaging Swamps",
        destination: 'swamps'
        }
      ]
    },


    forest : {
      title: 'The Girl...',
      story: `While trudging through the thick forests you hear sudden movement and hide behind a tree. Out of the blue a girl runs into a clearing looking around desperately. From behind her rough voices sound, "Where are you little girl..." It looked like she was being chased by thugs. Should you help her?`,
      choices: [
        {
        choice: "Help the mysterious girl",
        destination: 'help'
        },
        {
        choice: "Keep going without looking back",
        destination: 'nohelp'
        }
      ]
    },

    forest2 : {
      title: 'The Girl...',
      story: `While trudging through the thick forests you hear sudden movement and hide behind a tree. Out of the blue a girl runs into a clearing looking around desperately. From behind her rough voices sound, "Where are you little girl..." It looked like she was being chased by thugs. Should you help her?`,
      choices: [
        {
        choice: "Help the mysterious girl",
        destination: 'help2'
        },
        {
        choice: "Keep going without looking back",
        destination: 'nohelp3'
        }
      ]
    },

    swamps2 : {
      title: 'The Girl...',
      story: `While trudging through the thick swamp you hear sudden movement and hide behind a tree. Out of the blue a girl runs into a clearing looking around desperately. From behind her rough voices sound, "Where are you little girl..." It looked like she was being chased by thugs. Should you help her?`,
      choices: [
        {
        choice: "Help the mysterious girl",
        destination: 'help2'
        },
        {
        choice: "Keep going without looking back",
        destination: 'nohelp2'
        }
      ]
    },

     swamps : {
      title: 'The Girl...',
      story: `While trudging through the thick swamp you hear sudden movement and hide behind a tree. Out of the blue a girl runs into a clearing looking around desperately. From behind her rough voices sound, "Where are you little girl..." It looked like she was being chased by thugs. Should you help her?`,
      choices: [
        {
        choice: "Help the mysterious girl",
        destination: 'help'
        },
        {
        choice: "Keep going without looking back",
        destination: 'nohelp2'
        }
      ]
    },

    nohelp2: {
      title: 'No Guilt',
      story: `You trudge ahead and try not to look behind as you hear the girl's desperate cries for help. After a mile or two in your guilt you don't notice it becoming harder and harder to step. You look down, and find yourself knee-deep in mud! As you sink slowly you realize...`,
      defaultDestination: 'attack',
      image: "gameover.gif",
      buttonText: 'Game over. Play again?'
    },



	nohelp: {
      title: 'No Guilt',
      story: `You trudge ahead and try not to look behind as you hear the girl's desperate cries for help. After a mile or two you you hear a strange buzzing noise. You turn around and see a whole swarm of the most massive mosquitoes you have ever seen in your life. In your panic as you run ahead you fall into a ditch. The mosquitoes swarm above you. The last thing you remember is how the village will never be saved now...`,
      defaultDestination: 'attack',
      image: "gameover.gif",
      buttonText: 'Game over. Play again?'
    },



    nohelp3: {
      title: 'No Guilt',
      story: `You trudge ahead and try not to look behind as you hear the girl's desperate cries for help. After a mile or two you you hear a strange buzzing noise. You turn around and see a whole swarm of the most massive mosquitoes you have ever seen in your life. In your panic as you run ahead you fall into a ditch. The mosquitoes swarm above you. The last thing you remember is how the village will never be saved now...`,
      defaultDestination: 'attack',
      image: "gameover.gif",
      buttonText: 'Game over. Play again?'
    },


  help : {
      title: 'The Hero... but what at what cost?',
      story: `Right before the thugs get to her, you grab her by the arm and pull her into hiding with you. She starts trying to fight you but you get her to be quiet. After a while of looking the thugs leave the clearing. You look at the girl and she glares back. "You're welcome," you mutter, as you start leaving her behind. "What's your name?" she says from behind. "${name}," you reply. "I'm coming with you, my name is Stevie. And the way you are going you will run into trouble, I'll help you though," You halt but she's already 10 steps ahead of you. Looks like she's gonna stick with you from now....`,
      defaultDestination: 'next1',
      buttonText: 'Next'
    },

    help2 : {
      title: 'The Hero... but what at what cost?',
      story: `Right before the thugs get to her, you grab her by the arm and pull her into hiding with you. She starts trying to fight you but you get her to be quiet. After a while of looking the thugs leave the clearing. You look at the girl and she glares back. "You're welcome," you mutter, as you start leaving her behind. "What's your name?" she says from behind. "${name}," you reply. "I'm coming with you, my name is Stevie. And the way you are going you will run into trouble, I'll help you though," You halt but she's already 10 steps ahead of you. Looks like she's gonna stick with you from now....`,
      defaultDestination: 'next2',
      buttonText: 'Next'
    },

    next1: {
      title: 'The Final Battle',
      story: `You have arrived to your destination. It is now just past midnight and you can hear the beast stirring ready for its rampage to the village. This was your chance, while the monster was still half asleep you can strike!`,
      choices: [
        {
        choice: "Strike now",
        destination: 'now'
        },
        {
        choice: "Wait and make sure you aren't rushing into things",
        destination: 'notnow'
        }
      ]
    },

    next2: {
      title: 'The Final Battle',
      story: `You have arrived to your destination. It is now just past midnight and you can hear the beast stirring ready for its rampage to the village. This was your chance, while the monster was still half asleep you can strike!`,
      choices: [
        {
        choice: "Strike now",
        destination: 'now'
        },
        {
        choice: "Wait and make sure you aren't rushing into things",
        destination: 'notnow2'
        }
      ]
    },

    now: {
      title: 'The Untimely End',
      story: `"NO!" Stevie whisper-shouts at you, but you ignore her. As you walk into the cave, confident that this was the right decision, out of the blue something throws you against the wall and knocks the wind out of you. You struggle to remain concious but the monster's hulking figure casts a shadow over you and fall into a sleep doomed to never wake again...`,
      defaultDestination: 'attack',
      image: "gameover.gif",
      buttonText: 'Game over. Play again?'
    },

    notnow: {
      title: 'The End',
      story: `As you walk into the cave with Stevie taking calculated steps the monster whips out of no where but you are ready and unsheath your sword and drive into the monsters heart while Stevie head skilfully tied it's feet to the ground so it could no longer strike you. Well done ${name} you have fought well!`,
      defaultDestination: 'attack',
      image: "youwon.gif",
      buttonText: 'You have won! Want to play again?'
    },

    notnow2: {
      title: 'Sticks are not swords',
      story: `As you walk into the cave with Stevie taking calculated steps the monster whips out of no where but you are ready and unsheath your stick and drive into the monsters heart while Stevie head skilfully tied it's feet to the ground so it could no longer strike you. Wait what? A stick? The stick you chose snaps in two. You slowly look up and Stevie cries at your stupidity. Maybe the sword was a better bet.`,
      defaultDestination: 'attack',
      image: "gameover.gif",
      buttonText: 'Game over. Play again?'

    },


    
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('#start-button')
  var content = document.querySelector('#content')
  button.addEventListener('click', function() {
    var name = document.querySelector('#name-input')
    story = getStory(name.value)
    renderScene()
  })
})

function renderScene() {
  var text = "Next"
  var image = "";
  if (story[story.currentScene].image) {
    image = "<img></img>"
  }
  if (story[story.currentScene].buttonText) {
    text = story[story.currentScene].buttonText
  }
  content.innerHTML = `
  <h1>${story[story.currentScene].title}</h1>
  <p>${story[story.currentScene].story}</p>
  ${image}
  ${getInputs()}
  <button id = "submit-button">${text}</button>
  `
  if (story[story.currentScene].image) {
    document.querySelector("img").src = `./img/${story[story.currentScene].image}`
  }
  var button = document.querySelector("#submit-button");
  button.addEventListener('click', function() {
    getInputValue()
  })
}

function getInputValue() {
  var inputs = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      story.currentScene = inputs[i].getAttribute('data-destination')
      renderScene();
      return;
    }
  }
  story.currentScene = story[story.currentScene].defaultDestination
  renderScene()
}

function getInputs() {
  var input = ""
  if (!story[story.currentScene].choices) {
    return ""
  }
  for(var i = 0; i < story[story.currentScene].choices.length; i++) {
    input += `
    <div>
      <input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
      <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
    </div>`
  }
  return input;
}