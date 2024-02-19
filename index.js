const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const qr = require('qrcode');

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", 'ejs');
app.set("views", path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/scan', (req, res) => {
    const input_txt = req.body.text;
    console.log(input_txt);
    qr.toDataURL('input_txt', (err, src) =>{
        res.render('scan', {qr_code : src});
    })
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});