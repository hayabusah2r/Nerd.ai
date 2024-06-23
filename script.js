document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatInput = document.getElementById('chat-input');
    const askButton = document.getElementById('ask-button');
    let userName = '';

    // Start the conversation by asking for the user's name
    appendMessage("Hello! What's your name?", 'bot-message');

    sendButton.addEventListener('click', function() {
        const userMessage = messageInput.value.trim();
        if (userMessage) {
            appendMessage(userMessage, 'user-message');
            messageInput.value = '';
            setTimeout(() => {
                handleBotResponse(userMessage);
            }, 1000);
        }
    });

    askButton.addEventListener('click', function() {
        appendMessage(`How can I assist you today? ${createOptions()}`, 'bot-message');
    });

    function appendMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', className);
        messageElement.innerHTML = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function createOptions() {
        return `
            <div class="options">
                <a href="#" class="option">Create a document.</a>
                <a href="#" class="option">Play a random game.</a>
                <a href="#" class="option">Tell me date & time.</a>
                <a href="#" class="option">Tell me a joke.</a>
                <a href="#" class="option">Tell me a quote.</a>
                <a href="#" class="option">Tell me a random fact.</a>
                <a href="#" class="option">About nerd.ai</a>
            </div>
        `;
    }

    function handleBotResponse(userMessage) {
        if (!userName) {
            // Set the user's name and greet them
            userName = userMessage;
            appendMessage(`Nice to meet you, ${userName}! How can I assist you today? ${createOptions()}`, 'bot-message');
            hideInputSection();
        } else {
            // Handle normal bot responses
            appendMessage(getBotResponse(userMessage), 'bot-message');
        }
    }

    function getBotResponse(userMessage) {
        const jokes = [
            "What's the most positive thing about Switzerland? Their flag has a big plus!",
            "Why should you never trust stairs? Because they're always up to something!",
            "Why did the bullet end up losing his job? Because he got fired!",
            "How do you measure a snake? In inches, because they don't have feet!",
            "What gets wetter the more it dries? A towel!",
            "Where should you go in the room if you're feeling cold? You should go in the corner, because they're usually 90 degrees!",
            "You know why you never see elephants hiding up in trees? Because they're really good at it!",
            "Why don't oysters donate to charity? Because they are shellfish!",
            "Why don't mathematicians like playing hide and seek? Because they can never find a solution!",
            "Why did the math book look sad? Because it had too many problems!"
        ];
        const facts = [
            "There is a species of jellyfish called Turritopsis dohrnii, also known as the IMMORTAL JELLYFISH. It has the ability to revert back to its juvenile polyp stage after reaching adulthood, effectively cheating death and potentially living indefinitely.",
            "The first use of the Hashtag Symbol (#) as a social media tool was on Twitter in 2007.",
            "The driest place on Earth is the Atacama Desert in Chile. Some areas of the desert have received no rainfall in recorded history.",
            "The world's oldest known recipe is for beer.",
            "There are more trees on Earth than stars in the Milky Way galaxy. Estimates suggest there are over three trillion trees on our planet.",
            "Octopuses have three hearts. Two hearts pump blood to the gills, while the third heart circulates blood to the rest of the body.",
            "The shortest war in history was between Britain and Zanzibar in 1896. It lasted only 38 minutes, with Zanzibar surrendering to British forces.",
            "Honey never spoils."
        ];
        const quotes = [
            "That's one small step for a man, a giant leap for mankind. - Neil Armstrong",
            "The love of money is the root of all evil. - the Bible",
            "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
            "Ask not what your country can do for you; ask what you can do for your country. - John Kennedy",
            "Genius is one percent inspiration and ninety-nine percent perspiration. - Thomas Edison"
        ];
        const hyperlinks = [
            "https://seaam-snake-xenzia.netlify.app/",
            "https://tictactoebyseaam.netlify.app/",
            "https://rockpaperscissor-by-seaam.netlify.app/"
        ];

        if (userMessage.toLowerCase().includes('create a document')) {
            window.open('https://typewriterai.netlify.app/', '_blank');
            return 'Redirected to the document creation site...';
        } else if (userMessage.toLowerCase().includes('game')) {
            const randomIndex = Math.floor(Math.random() * hyperlinks.length);
            // Get the hyperlink at the random index
            const randomLink = hyperlinks[randomIndex];
            // Open the hyperlink in a new tab
            window.open(randomLink, '_blank');
            return 'Redirected to game...';
        } else if (userMessage.toLowerCase().includes('date & time')) {
            return `Today's date is ${new Date().toLocaleDateString()} and the current time is ${new Date().toLocaleTimeString()}.`;
        } else if (userMessage.toLowerCase().includes('joke')) {
            return jokes[Math.floor(Math.random() * jokes.length)];
        } else if (userMessage.toLowerCase().includes('quote')) {
            return quotes[Math.floor(Math.random() * quotes.length)];
        } else if (userMessage.toLowerCase().includes('random fact')) {
            return facts[Math.floor(Math.random() * facts.length)];
        } else if (userMessage.toLowerCase().includes('about')) {
            return 'I am nerd.ai, an experimental bot. I was created by an idiot named "Seaam". My job is to offer you several interactive options. My script handles responses to these options, but they can be expanded with more features as needed. As I said earlier, my creation is still on experimental stage, soon I will be able to interact with you just like a human. Creating a bot like this takes hours of hard work. I hope you will appreciate the hard work and share your thoughts. You can reach us here: seaamipsc2020@outlook.com';
        }
         else {
            return 'Sorry, I did not understand that.';
        }
    }

    function hideInputSection() {
        chatInput.style.display = 'none';
        askButton.style.display = 'block';
    }

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('option')) {
            event.preventDefault();
            const userMessage = event.target.textContent;
            appendMessage(userMessage, 'user-message');
            setTimeout(() => {
                handleBotResponse(userMessage);
            }, 1000);
        }
    });
});