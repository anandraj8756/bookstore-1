var express = require('express')
var router = express.Router()
const query_find = require('../middleware/query_params');
const {findAlldata,insertdata,findDataBasedOnSearchItem, findDataBasedOnBookid} = require('../../team4/controllers/newsearch')

const Books = require('../model/books');
const { createProductReview }  =  require('../../team5/controllers/review')

router.route('/')
.get(query_find(Books),findAlldata)
.post(insertdata)

router.route('/:id/reviews').post(createProductReview)

router.route('/CommonSearch/:searchitem')
.get(findDataBasedOnSearchItem)

 router.route('/:id')
 .get(findDataBasedOnBookid)

module.exports = router
