const mongoose = require('mongoose');


module.exports = (db_name) => {
    mongoose.connect('mongodb://localhost/' + db_name, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
        .then(() => console.log("Successfullt connected to the " + db_name + "database"))
        .catch((err) => {
            console.log("Something went wrong while connecting to the ---->" + db_name + "database")
            console.log(err)
        })
}