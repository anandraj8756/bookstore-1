var express = require('express')
var router = express.Router()
const query_find = require('../middleware/query_params');
const {findAlldata,insertdata,findDataBasedOnSearchItem, findDataBasedOnBookid} = require('../../team4/controllers/newsearch')

const Books = require('../model/books');
const { createProductReview, findAllreview }  =  require('../../team5/controllers/review')
const Reviews  = require('../../team5/model/review')
router.route('/')
.get(query_find(Books),findAlldata)
.post(insertdata)

router.route('/:id/reviews').post(createProductReview)
router.route('/viewreview')
.get(query_find(Reviews),findAllreview)

router.route('/CommonSearch/:searchitem')
.get(findDataBasedOnSearchItem)

 router.route('/:id')
 .get(findDataBasedOnBookid)

module.exports = router
