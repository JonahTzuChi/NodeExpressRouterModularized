var router = require("express").Router();

router.get("/product/info", async (req, res)=>{
    res.send(JSON.stringify({
        message: "Thank you for checking out the product info"
    }));
});

module.exports = {
    router: router
};