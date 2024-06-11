const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const randomString = () => Math.random().toString(36).slice(2);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");