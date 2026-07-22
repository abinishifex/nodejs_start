const fs = require('fs');


// fs.readFile('./doc/blog.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }

//     console.log(data.toString());
// })
if(!fs.existsSync('./asset')){
fs.mkdir('./asset', (err) =>{
    if(err){
        console.log(err);
    }

    console.log("folder Created");
}); }else{
    fs.rmdir('./asset', (err)=> {
        if(err){
            console.log(err);
        }
        console.log("folder deleted");
    })
}
