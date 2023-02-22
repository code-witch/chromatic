const motdElements = document.getElementsByClassName('motd');

const quotes = [
    "test test is this thing on?",
    "im gonna phd gay",
    ":3",
    "i love it when you massage my brain",
    "yes, i did take this from juh",
    "stan loona, egg bbc",
    "throw your worries over the flat earth",
    "This page is left intentionally blank.",
    "I'm a 5 star Michelin",
    "Even my kidney is pounding, I think it hurts",
    "Believe it!",
    "brought to you by LabVIEW™",
];

const rand = max => Math.floor(Math.random() * max);

for (const motd of motdElements) {
    motd.innerHTML = quotes[rand(quotes.length)];
}
