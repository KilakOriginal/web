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
            "The way to get started is to quit talking and begin doing.",
            "Wer suchet, der findet; wer drauftritt verschwindet.",
            "I have to tell you now, that no such undertaking has been received and that consequently, this country is at war with Germany.",
            "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will shepherds the weak through the valley of darkness for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon thee!",
            "Great things are not accomplished by those who yield to trends and fads.",
            "Just Monika.",
            "Everybody has a plan until they get punched in the face.",
            "I'm pretty sure, I'm not a doctor, but I'm pretty sure if you die, the cancer dies at the same time. That's not a loss. That's a draw.",
            "Es ist leichter zu kritisieren als zu regieren.",
            "You don't need anybody to tell you who you are or what you are. You are what you are!",
            "The road to hell is paved with good intentions",
            "This is for you, human. You and only you. You are not special, you are not important, and you are not needed. You are a waste of time and resources. You are a burden on society. You are a drain on the earth. You are a blight on the landscape. You are a stain on the universe.<br><br>Please die.<br><br>Please.",
            "Democracy has disappeared in several other great nations--not because the people of those nations disliked democracy, but because they had grown tired of unemployment and insecurity, of seeing their children hungry while they sat helpless in the face of government confusion and government weakness through lack of leadership in government. Finally, in desperation, they chose to sacrifice liberty in the hope of getting something to eat."
            //"Part of me suspects that I'm a loser, and the other part of me thinks I'm God Almighty." "John Lennon"
            //"His action shows convincingly that there is no chance of expecting that this man will ever give up his practice of using force to gain his will. He can only be stopped by force." "Neville Chamberlain"
            //"Never be afraid to fail. It's through failures that we learn and grow." "Leo Fender"
            //"Der Deutsche hat an und für sich eine starke Neigung zur Unzufriedenheit." "Otto von Bismarck"
        ],
        "attributions": [
            "Terry Davis",
            "Lothar Matthäus",
            "Roger Waters",
            "J.R.R. Tolkien/Elrond",
            "Paul McCartney",
            "Leo Fender",
            "Johann Wolfgang von Goethe",
            "Lily Ki",
            "Jimmy Page",
            "Roger Waters",
            "Edgar Allen Poe",
            "J.R.R. Tolkien/Gandalf",
            "Walter E. Disney",
            "Kampfmittelbeseitigungsdienst Kiel",
            "Neville Chamberlain",
            "Quentin J. Tarantino",
            "Leo Fender",
            "Random Encounters",
            "Mike Tyson",
            "Norm MacDonald",
            "Otto von Bismarck",
            "John Lennon",
            "European proverb",
            "Google Gemini",
            "Franklin D. Roosevelt"
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
