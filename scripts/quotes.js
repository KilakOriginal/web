document.addEventListener("DOMContentLoaded", function() {
    const quotesData = {
        "quotes": [
            "It's a liberal with their bleeding heart trying to be nice to the poor people. They're making it worse. Just man up and learn what malloc and free are.",
            "Wäre, wäre - Fahrradkette",
            "Strangers passing in the street<br>By chance, two separate glances meet<br>And I am you and what I see is me",
            "(...) [L]et him not vow to walk in the dark, who has not seen the nightfall.",
            "And in the end, the love you take is equal to the love you make.",
            "Simplicity is the ultimate sophistication.",
            "Nenn es dann, wie du willst,<br>Nenn's Glück! Herz! Liebe! Gott!<br>Ich habe keinen Nahmen<br>Dafür! Gefühl ist alles;<br>Name ist Schall und Rauch,<br>Umnebelnd Himmelsgluth.",
            "Don't let your girlfriend stop you from meeting your wife!",
            "Then, as it was, then again it will be and though the course may change sometimes rivers always reach the sea.",
            "Money, it's a crime - Share it fairly, but don't take a slice of my pie.",
            "They who dream by day are cognizant of many things which escape those who dream only by night.",
            "All we have to decide is what to do with the time that is given us.",
            "Hätte, hätte - Fahraddecke",
            "Wer suchet, der findet; wer drauftritt verschwindet.",
            "I have to tell you now, that no such undertaking has been received and that consequently, this country is at war with Germany.",
            "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will shepherds the weak through the valley of darkness for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon thee!",
            "Great things are not accomplished by those who yield to trends and fads."
            //"His action shows convincingly that there is no chance of expecting that this man will ever give up his practice of using force to gain his will. He can only be stopped by force."
            //"Never be afraid to fail. It's through failures that we learn and grow." "Leo Fender"
        ],
        "attributions": [
            "Terry Davis",
            "Lothar Matthäus",
            "Roger Waters",
            "J.R.R. Tolkien/Elrond",
            "Paul McCartney",
            "Leo Fender",
            "Johann Wolfgang von Goethe",
            "LilyPichu",
            "Jimmy Page",
            "Roger Waters",
            "Edgar Allen Poe",
            "J.R.R. Tolkien/Gandalf",
            "Jonathan Apelt",
            "Kampfmittelbeseitigungsdienst Kiel",
            "Neville Chamberlain",
            "Quentin J. Tarantino",
            "Leo Fender"
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

       /*new Masonry(quotesWrapper, {
            itemSelector: '.quote-container',
            columnWidth: 200,
            percentPosition: true
        });*/
    }

    displayQuotes();
});
