

const fs = require('fs');

const rs = fs.createReadStream('add.txt',  {encoding: 'utf8', });

const ws = fs.createWriteStream('new-add.txt',  );

rs.pipe(ws)
