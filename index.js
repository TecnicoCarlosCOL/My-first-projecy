const express = require('express');
const app= express();
app.get('/',(req ,res) => res.send('Hola desde la casa de carlangas'));
app.listen(5000);






