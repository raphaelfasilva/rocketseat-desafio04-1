const express = require('express')
const routes = express.Router()
routes.get('/', function(req, res) {
    return res.redirect("/students")

})
routes.get('/students', function(req, res) {
    return res.render("students/index")
})
routes.get('/teachers', function(req, res) {
    return res.render("teachers/index")
})
module.exports = routes