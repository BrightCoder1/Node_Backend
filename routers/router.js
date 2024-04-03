const express = require("express");
const router = express.Router();
const Person = require("../model/Person");
const MenuItem = require("../model/menu");
router.get("/", (req, res) => {
  res.send("HOME Page");
});

router.get("/register", (req, res) => {
  res.send("Register Page");
});
// Stroe person data in database

router.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    res.status(202).json(response);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

// Menu data stor process
router.post("/menu", async (req, res) => {
  try {
    const menudata = req.body;
    const newmenudata = new MenuItem(menudata);
    const menuresponse = await newmenudata.save();
    res.status(202).json(menuresponse);
    console.log(menuresponse);
  } catch (error) {
    console.log(error);
  }
});

// Menu data get
router.get("/menu", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

// admin page for person details

router.get("/admin", async (req, res) => {
  try {
    const data = await Person.find();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/menu/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log(response);
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Update data of a person details
router.put("/person/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatepersondata = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatepersondata,
      {
        new: true, //Return the update document
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json("Person not found");
    }

    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json("internal server error");
  }
});
// Delet person details

// router.delete("/person/:id", async (req, res) => {
//   try {
//     const PersonId = req.params.id;

//     const response = await Person.findByIdAndRemove(PersonId);
//     if (!response) {
//       return res.status(404).json({ message: "Data is not find" });
//     }

//     console.log("Delet Data");
//     // res.status(200).json("Data has been deleted");
//   } catch (error) {
//     res.status(500).json({ message: "internal server error"});
//   }
// });


module.exports = router;
