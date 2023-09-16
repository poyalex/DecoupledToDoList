require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const path = require('path');


/* Middleware */
app.use(express.json());
if (process.env.NODE_ENV !== 'development'){
  app.use(express.static('public'))
}

/* Controller Goes Here Remove the tes*/
app.get('/test', (req, res)=>{
	res.status(200).json({
		website: 'My Website',
		info: 'Not that much'
	})
})
//LISTENER


// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});