const greetings_messages = [
    "Hi",
    "Hey!",
    "Hello",
    "Welcome",
    "Good Morning",
    "Good Afternoon",
    "Good evening",
    "Good to see you",
    "Nice to see you",
    "How are you",
    "How are you all?",
    "How's it going?"
];

const randomMsg = () => {
    const message = greetings_messages[Math.floor(Math.random() * greetings_messages.length)];
    console.log(message);
}

module.exports = { randomMsg };