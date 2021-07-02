const express = require('express');
const app = express();
const colors = require('colors')
const cors = require('cors')
require('dotenv').config()

const { notFound_1, errorHandler_1 } = require('./team1/middleware/errorMiddleware')

const { notFound_5, errorHandler_5 } = require('./team5/middleware/errorMiddleware')


const errorHandler = require('./team4/middleware/errorhandler')

const searchpageRoute = require('./team4/routes/newsearch')
const wishlistRoute = require('./team4/routes/wishlist')
const cartlistRoute = require('./team4/routes/cart')

const userRoutes = require('./team1/routes/userRoutes')

const reviewRoutes = require('./team5/routes/review')

// const fileupload = require('express-fileupload')

// app.use('/dp', express.static('backend/public/uploads'))

const connectToDatabase = require('./db')

app.use(cors())

app.use(express.json())

connectToDatabase();

app.use('/books', searchpageRoute);
app.use('/api/wishlist', wishlistRoute);
app.use('/api/cartlist', cartlistRoute);
//app.use('/books/:id/review', reviewRoutes);

app.use(errorHandler);

// app.use(fileupload())




app.use('/api/users', userRoutes)

app.use(notFound_1)
app.use(errorHandler_1)

//app.use('/api/bookreview', reviewRoutes)


app.use(notFound_5)
app.use(errorHandler_5)


const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold))


// app.listen(4000, ()=> console.log('listening on port 4000'))
