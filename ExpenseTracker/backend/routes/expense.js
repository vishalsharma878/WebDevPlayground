const express = require('express');

const expenseController = require('../controller/expense')
const deleteController = require('../controller/delete')

 const userRoutes = express.Router();


userRoutes.post('/expense', expenseController.expenseData);

userRoutes.get('/expense/get', expenseController.getData);

userRoutes.delete('/delete/:id', deleteController.deleteData);

module.exports = userRoutes;