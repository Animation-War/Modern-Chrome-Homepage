let command = prompt("Command me I'll do whatever you want?")

if (command.toLowerCase() == "redirect me" || command.toLowerCase() == "redirect") {

    let redirect = prompt("Where would you like to go today?");

    if (redirect.toLowerCase() == "google" || redirect.toLowerCase() == "take me to google") {
        window.location.href = "https://www.google.com"
    }
    else if (redirect.toLowerCase() == "youtube" || redirect.toLowerCase() == "take me to youtube") {
        window.location.href = "https://www.youtube.com"
    }
    else if (redirect.toLowerCase() == "github" || redirect.toLowerCase() == "take me to github") {
        window.location.href = "https://github.com/"
    }
    else if (redirect.toLowerCase() == "chatgpt" || redirect.toLowerCase() == "take me to chatgpt") {
        window.location.href = "https://chat.openai.com/"
    }
    else if (redirect.toLowerCase() == "bard" || redirect.toLowerCase() == "take me to bard") {
        window.location.href = "https://bard.google.com/"
    }
    else if (redirect.toLowerCase() == "typerush" || redirect.toLowerCase() == "take me to typerush") {
        window.location.href = "https://www.typerush.com/account.html?play=1"
    }
    else if (redirect.toLowerCase() == "my website" || redirect.toLowerCase() == "take me to my website") {
        window.location.href = "http://www.warstudioscitybuild.unaux.com/"
    }
    else if (redirect.toLowerCase() == "virustotal" || redirect.toLowerCase() == "virus total" || redirect.toLowerCase() == "take me to virustotal" || redirect.toLowerCase() == "take me to virus total") {
        window.location.href = "https://www.virustotal.com/"
    }
    else if (redirect.toLowerCase() == "gmail" || redirect.toLowerCase() == "take me to gmail") {
        window.location.href = "https://mail.google.com/mail/u/0/#inbox"
    }
    else if (redirect.toLowerCase() == "replit" || redirect.toLowerCase() == "repl" || redirect.toLowerCase() == "take me to replit" || redirect.toLowerCase() == "take me to repl") {
        window.location.href = "https://replit.com/~"
    }
    else {
        alert("Failed to Redirect")
    }
}
else if (command.toLowerCase() == "search") {
    let searchQuery = prompt("Search Search something using Google:");

    if (searchQuery) {
        let encodedQuery = encodeURIComponent(searchQuery);
        let googleSearchURL = `https://www.google.com/search?q=${encodedQuery}`;
        window.location.href = googleSearchURL;
    } else {
        console.log("No search query entered.");
    }
}
else {
    alert("Unknown Command")
}

function runScriptAgain() {
    var sound = document.getElementById("button-sound");
    sound.play();
}

/*
================================================================================================================
                                        Running Script Again 
================================================================================================================
*/

function runScriptAgain() {

    var sound = document.getElementById("button-sound");
    sound.play();

    let command = prompt("Command me I'll do whatever you want?")

    if (command.toLowerCase() == "redirect me" || command.toLowerCase() == "redirect") {

        let redirect = prompt("Where would you like to go today?");

        if (redirect.toLowerCase() == "google" || redirect.toLowerCase() == "take me to google") {
            window.location.href = "https://www.google.com"
        }
        else if (redirect.toLowerCase() == "youtube" || redirect.toLowerCase() == "take me to youtube") {
            window.location.href = "https://www.youtube.com"
        }
        else if (redirect.toLowerCase() == "github" || redirect.toLowerCase() == "take me to github") {
            window.location.href = "https://github.com/"
        }
        else if (redirect.toLowerCase() == "chatgpt" || redirect.toLowerCase() == "take me to chatgpt") {
            window.location.href = "https://chat.openai.com/"
        }
        else if (redirect.toLowerCase() == "bard" || redirect.toLowerCase() == "take me to bard") {
            window.location.href = "https://bard.google.com/"
        }
        else if (redirect.toLowerCase() == "typerush" || redirect.toLowerCase() == "take me to typerush") {
            window.location.href = "https://www.typerush.com/account.html?play=1"
        }
        else if (redirect.toLowerCase() == "my website" || redirect.toLowerCase() == "take me to my website") {
            window.location.href = "http://www.warstudioscitybuild.unaux.com/"
        }
        else if (redirect.toLowerCase() == "virustotal" || redirect.toLowerCase() == "virus total" || redirect.toLowerCase() == "take me to virustotal" || redirect.toLowerCase() == "take me to virus total") {
            window.location.href = "https://www.virustotal.com/"
        }
        else if (redirect.toLowerCase() == "gmail" || redirect.toLowerCase() == "take me to gmail") {
            window.location.href = "https://mail.google.com/mail/u/0/#inbox"
        }
        else if (redirect.toLowerCase() == "replit" || redirect.toLowerCase() == "repl" || redirect.toLowerCase() == "take me to replit" || redirect.toLowerCase() == "take me to repl") {
            window.location.href = "https://replit.com/~"
        }
        else {
            alert("Failed to Redirect")
        }
    }
    else if (command.toLowerCase() == "search") {
        let searchQuery = prompt("Search Search something using Google:");

        if (searchQuery) {
            let encodedQuery = encodeURIComponent(searchQuery);
            let googleSearchURL = `https://www.google.com/search?q=${encodedQuery}`;
            window.location.href = googleSearchURL;
        } else {
            console.log("No search query entered.");
        }
    }
    else {
        alert("Unknown Command")
    }

    function runScriptAgain() {
        var sound = document.getElementById("button-sound");
        sound.play();
    }
}