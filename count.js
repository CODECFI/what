

const fsPromises = require('fs').promises;
const path = require('path')


const count = async () => {
  try{
const data = await fsPromises.readFile(path.join(__dirname, 'add.txt' ,), 'utf8', 
);
 console.log(data + 1)
 

 

}catch (err){
    console.error(err)
  }
}
count();









//Euta .txt file maa 1 raakhera save gara.
//Ani euta count.js banau, yo script run garda file read garera
// tyasko number maa 1 add garera feri save gar