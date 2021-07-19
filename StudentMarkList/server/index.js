const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const apiRouter = require('./Api/apiRouter');
const hostname ='127.0.0.1';
const port ='7000';

const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(jsonParser);
app.use(urlencodedParser);
app.use(cors());
app.use(apiRouter);
app.get('/',(request,response) => {
    response.send('<h2>Student marklist portal</h2>');
}
);

app.listen(port,hostname,() => {
    console.log('project started...');
})