var request = require('request');
var options  ={
    //url: "https://api.github.com/users/idoychinov/repos",
    url: "http://www.json-generator.com/api/json/get/bHDYMNGOmq?indent=2",
    headers: {"User-Agent": "Awesome-Octocat-App"}
};
/*
request(options,function(error,response,body){
 generateSchemaAndSaveFiles(JSON.parse(body));
})*/

/*var bigData = require("./bigJSON");
 generateSchemaAndSaveFiles(bigData.GetBigData());*/

//generateSchemaAndSaveFiles(readJSONFile("ManyDataFields.js"));

readJSONFile("ManyDataFields.js");

function readJSONFile(path){
    var fs = require('fs');
    fs.readFile(path,'utf8',function(err,data){
        if(err){
            console.log(err);
            return;
        }
        generateSchemaAndSaveFiles(JSON.parse(data));
    })
}

function generateSchemaAndSaveFiles(body) {
    var arr = body;
    var encodedArr = [];
    var count;

    for (var obj in arr) {

        var encodedObj = new Object();
        count = 0;
        for (var prop in arr[obj]) {
            encodedObj[count] = arr[obj][prop];
            count++;
        }
        encodedArr.push(encodedObj);
    }
    saveFile(arr,"normal");
    saveFile(encodedArr,"encoded");

    function saveFile(obj,type){
        var fs = require('fs');
        fs.writeFile(type+"/"+type+"JSON.txt", JSON.stringify(obj,null,4), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
                tarGZFile(process.cwd()+"\\"+type);
            }
        })
    }

    function tarGZFile(filePath){
        var targz = require('tar.gz');

        var compress = new targz().compress(filePath,filePath+'.tar.gz', function(err){
            if(err){
                console.log(err);
            } else{
                console.log("The file was compressed");
            }
        })
    }
}