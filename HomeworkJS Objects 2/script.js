console.log('Hello');

let library = [ {
    title: 'The Robots of dawn',
    author: 'Isaac Asimov',
    readingStatus: true,
},
{
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false,
}];

for (let i = 0; i < library.length; i++) {
        if (library[i].readingStatus) {
            console.log("Already read " + library[i].title + " by the " + library[i].author + ".");
        }
        else {
            console.log("You still need to read " + library[i].title + " by the " + library[i].author + ".");
        }
}