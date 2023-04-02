const mongoose = require("mongoose")

mongoose.set("strictQuery", false)

mongoose.connect(
  "mongodb+srv://tanujrm15:Ahit1234@cluster0.erjg0fz.mongodb.net/BlogApp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  err => {
    if (err) throw err
    console.log("Connected to MongoDB!")
  }
)

module.exports = mongoose.connection
