let typeOfFood = prompt('Enter a type of food')
let number = prompt('Enter a number')
let measurement = prompt('Enter a measurement')
let adjective = prompt('Enter an adjective:')
let adjectiveTwo = prompt('Enter an adjective:')
let adjectiveThree = prompt('Enter an adjective:')
let adjectiveFour = prompt('Enter an adjective:')
let adjectiveFive = prompt('Enter an adjective:')
let adjectiveSix = prompt('Enter an adjective:')
let verbEndingInIng = prompt('Enter a verb ending in -ing')
let adverb = prompt('Enter an adverb:')
let verb = prompt('Enter a verb:')
let verbTwo = prompt('Enter an verb:')
let verbThree = prompt('Enter an verb:')
let noun = prompt('Enter an noun:')
let nounTwo = prompt('Enter a noun:')
let nounThree = prompt('Enter an noun:')


let story = `To make ${typeOfFood} you first need to gather your ingredients. You'll need ${number} eggs, a ${measurement} of milk, flour, sugar, and ${adjective} butter. Start by ${verbEndingInIng} together the ${adjectiveTwo} ingredients in a bowl. Then ${adverb} ${verb} in the milk, eggs, and ${adjective} butter. Once the ${noun} is ${adjectiveThree}, you're ready to ${verbTwo}! Scoop the batter onto a/an ${adjectiveFour} ${nounTwo} and cook until all the bubbles ${verbThree}. The ${adjectiveFive} part about making ${typeOfFood} is piling them onto your ${nounThree}, loading them with your ${adjectiveSix} toppings, and digging in!`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`