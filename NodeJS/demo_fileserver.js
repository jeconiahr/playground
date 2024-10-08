var fs = require('fs');

// To create a new file with a specified content: use appendFile()
fs.appendFile('mynewfile1.txt', 'Hello content!', function(err){
    if (err) throw err;
    console.log('Saved!');
})

// To create a new empty new file: use open() with 'w' flag
fs.open('mynewfile2.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log('Saved!');
})

// To replace the content of a file: use writeFile()
fs.writeFile('mynewfile3.txt', 'This is my text', function(err){
    if (err) throw err;
    console.log('Saved!');
});

// To delete a file: use unlink()
fs.unlink('mynewfile2.txt', function(err){
    if (err) throw err;
    console.log('File deleted!');
});