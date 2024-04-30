const messages = [["It is foolishness to be shameful of what is gainful - Bishop David Oyedepo"], ["The person that is being watched dont watch others - Rev Kunle Salami"],["Setting goals is the first step in turning the invisible into the visible. —Tony Robbins"],["You can do all things if believe you can - Ayorinde afolami"], ["Be nice to every one, Do to others what you want them to do to you - Gbengus"], ["Say something positive, and you’ll see something positive. —Jim Thompson"], ["Reach for the sky, even when could not get there, you will find yourself among the starts, dream big - unknown"], ["Learn to forgive others fault, you will deliver yourself from unnecessary loads when you do that —Unknown"],["Only fools doubt proofs, make friends with people with proofs - Papa"]];


const generateRandomMessage = () => {
    document.querySelector("#message").innerHTML = messages[Math.floor(Math.random() * messages.length)];

}

document.querySelector("button").addEventListener("click", generateRandomMessage)