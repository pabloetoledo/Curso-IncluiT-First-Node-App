
const fs = require('fs');

/* 1. Create a method to get all the files inside a given path */
exports.getFilesFromPath = path => {
    try {
        return fs.readdirSync(path);   
    } catch (error) {
        console.log(error);
        return null;        
    }    
}

/* 2. Create a method to print all the files*/
exports.printFiles = files => {
    console.log(files);
}

/* 3. Create a method to inverse sort and print the files of a given path */
exports.inverseSort = path => {
    const files = this.getFilesFromPath(path);
    files ? console.log(files.sort().reverse()) : console.log('Something was wrong'); 
}

/* 4. Create a method to get the amount of files starting with one letter*/
exports.getAmountOfFilesStartingWithALetter = (path, letter) => {
    const files = this.getFilesFromPath(path);
    if(files) {
        let c = 0;        
        files.forEach(file => {
            file.charAt(0) === letter ? c++ : c                                    
        });        
        console.log(`The amount of files starting with the letter "${letter}" is`, c);
    }
    else {
        console.log('Something was wrong');
    }     
}