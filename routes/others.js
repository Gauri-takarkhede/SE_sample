const express = require("express");
const router = express.Router(); //so now we dont need app.get
const { check, validationResult } = require("express-validator");
const { genSalt, hash } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const Other = require("../models/Others");
const Messages = require("../models/Messages");
// const Message = require("../models/Messages");
//@routes POST api/others
//@desc Register to a others;
//@access public

router.post(
  "/",
  [
    check("name", "Please enter a valid name").notEmpty(),
    check("empno", "Please enter a valid empno").exists(),
    check("password", "Please enter a valid password").notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //bad request
    }
    const { name, empno, password } = req.body;
    try {
      let user = await Other.findOne({ empno });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      user = new Other({
        name,
        empno,
        password,
      });
      const salt = await genSalt(10); // 10 is number of rounds it takes , that is how secureit must be
      user.password = await hash(password, salt);
      await user.save();
      // res.send("User saved int o database magically");
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtsecret"),
        {
          expiresIn: 36000, //3600 seconds i.e 1 hour
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error occured");
    }
  }
);

// @routes GET api/other/queries
// @desc Get all queries asked so far from different students
// @access private

router.get("/queries", auth("others"), async (req, res) => {
  try {
    const studentQueries = await Messages.find({ to: "students section" });
    res.json(studentQueries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error occured");
  }
});

//@routes POST api/faculty/queries
//@desc Reply to query send by student
//@access public

router.post(
  "/queries/:messageId",
  [auth("faculty"), [check("query", "Please enter a query").notEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //bad request
    }
    const { messageId } = req.params;
    console.log(messageId);
    let findQuery = await Messages.findOne({ messageId });
    if (!findQuery) {
      return res.status(400).json({ msg: "Query Doesnt Exists" });
    }
    console.log(findQuery);
    const { query } = req.body;
    try {
      user = new Messages({
        query,
        type: "Reply",
        to: findQuery.from,
        from: req.faculty.id,
        messageId,
      });

      const newMessage = await user.save();
      res.json(newMessage);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error occured");
    }
  }
);
module.exports = router;
