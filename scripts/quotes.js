const quotesData = {
    "quotes": [
        "It's a liberal with their bleeding heart trying to be nice to the poor people. They're making it worse. Just man up and learn what malloc and free are.",
        "Wäre, wäre - Fahrradkette",
        "Strangers passing in the street<br>By chance, two separate glances meet<br>And I am you and what I see is me",
        "(...) [L]et him not vow to walk in the dark, who has not seen the nightfall.",
        "And in the end, the love you take is equal to the love you make.",
        "Nenn es dann, wie du willst,<br>Nenn's Glück! Herz! Liebe! Gott!<br>Ich habe keinen Nahmen<br>Dafür! Gefühl ist alles;<br>Name ist Schall und Rauch,<br>Umnebelnd Himmelsgluth.",
        "Don't let your girlfriend stop you from meeting your wife",
        "Then, as it was, then again it will be and though the course may change sometimes rivers always reach the sea.",
        "Money, it's a crime - Share it fairly, but don't take a slice of my pie.",
        "They who dream by day are cognizant of many things which escape those who dream only by night.",
        "All we have to decide is what to do with the time that is given us."
    ],
    "attributions": [
        "Terry Davis",
        "Lothar Matthäus",
        "Roger Waters",
        "J.R.R. Tolkien/Elrond",
        "Paul McCartney",
        "Johann Wolfgang von Goethe",
        "LilyPichu",
        "Jimmy Page",
        "Roger Waters",
        "Edgar Allen Poe",
        "J.R.R. Tolkien/Gandalf"
    ]
};

function displayQuotes() {
    const quotesWrapper = document.getElementById('quotes-wrapper');
    const { quotes, attributions } = quotesData;

    quotes.forEach((quote, index) => {
        const quoteContainer = document.createElement('div');
        quoteContainer.className = 'quote-container';

        const quoteElement = document.createElement('div');
        quoteElement.className = 'quote';
        quoteElement.innerHTML = `“${quote}”`;

        const attributionElement = document.createElement('div');
        attributionElement.className = 'attribution';
        attributionElement.textContent = `- ${attributions[index]}`;

        quoteContainer.appendChild(quoteElement);
        quoteContainer.appendChild(attributionElement);

        quotesWrapper.appendChild(quoteContainer);
    });
}

window.onload = displayQuotes;
