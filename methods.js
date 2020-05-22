
const fs = require('fs');

/* 1. Create a method to get all the files inside a given path */
exports.getFilesFromPath = path => {
    try {
        fs.readdir(path, (err, files) => {
            err 
            ? console.log(err) 
            : executeFunctions(files);
        })
    } catch (error) {
        console.log(error);
        return null;        
    }    
}

const executeFunctions = files => {
    printFiles(files);
    inverseSort(files);
    getAmountOfFilesStartingWithALetter(files, 'a');
}


/* 2. Create a method to print all the files*/
const printFiles = files => {
    console.log(files);
}

/* 3. Create a method to inverse sort and print the files of a given path */
const inverseSort = files => {    
    files ? console.log(files.sort().reverse()) : console.log('Something was wrong'); 
}

/* 4. Create a method to get the amount of files starting with one letter*/
const getAmountOfFilesStartingWithALetter = (files, cletter) => {    
    let c = 0;        
    files.forEach(file => {
        file.charAt(0) === letter ? c++ : c                                    
    });        
    console.log(`The amount of files starting with the letter "${letter}" is`, c);         
}