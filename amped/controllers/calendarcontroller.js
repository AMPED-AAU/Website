const router = require("express").Router();
const Events = require("../models/events");


router.post("/creat-event", async (req,res) => {
    const events = Events(req.body);
    await event.save();
    res.sendStatus(201);
})

router.get("/get-events", async (req,res) => {
    const events = await Events
})


module.exports = router;