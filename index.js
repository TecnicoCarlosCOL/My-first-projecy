const express = require('express');
const app= express();
app.get('/',(req ,res) => res.send('Hola desde el servidor'));
app.listen(5000);