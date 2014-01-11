var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// runs through all the properties in languages and checks to see
// if they are strings, and if they are it prints them
for (var property in languages) {
    if (typeof languages[property] === "string") {
        console.log(languages[property]);
    }
}