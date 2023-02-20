var router = require("express").Router();

router.get("/client/info", async (req, res)=>{
    res.send(JSON.stringify({
        message: "Thank you for checking out the client info"
    }));
});

module.exports router;