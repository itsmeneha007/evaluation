

function countFileExtension(files) {
    const extensionCount = {};

    files.forEach(function(file) {
        const extension = file.split(',').pop();
        if (extensionCount[extension]){
            extensionCount[extension]++;

        }else{
            extensionCount[extension] = 1;
        }
    });

    return extensionCount;
}

const files = [
    "document1.pdf",
    "document2.pdf",
    "image1.png",
    "text1.txt",
    "photo1.jpg",
    "program1.exe",
    "data1.csv",
    "report1.pdf"
]

console.log(countFileExtensions(files));