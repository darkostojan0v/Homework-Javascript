console.log('Its on');

let cat = {
    name: "Garfield",

    wholeStory: function(text) {
        return `${this.name} says: ${text}`;
    }
};

let wholeSentence = cat.wholeStory("'I am hungry!'");
console.log(wholeSentence);


