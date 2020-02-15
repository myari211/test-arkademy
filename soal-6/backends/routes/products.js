const express = require("express");
const router = express.Router();
const model = require("../models/index"); // GET product listing.

router.get("/", async function(req, res, next) {
  try {
    const product = await model.product.findAll({
      include: [
        {
          model: model.categories
        },
        {
          model: model.cashier
        }
      ]
    });
    if (product.length !== 0) {
      res.json({
        status: "OK",
        messages: "",
        data: product
      });
    } else {
      res.json({
        status: "ERROR",
        messages: "EMPTY",
        data: {}
      });
    }
  } catch (err) {
    res.json({
      status: "ERROR",
      messages: err,
      data: {}
    });
  }
});

// POST product
router.post("/", async function(req, res, next) {
  try {
    const { name, cashierId, categoryId, price } = req.body;
    const product = await model.product.create({
      name,
      cashierId,
      categoryId,
      price
    });
    if (product) {
      res.status(201).json({
        status: "OK",
        messages: "User berhasil ditambahkan",
        data: product
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "ERROR",
      messages: err.message,
      data: {}
    });
  }
});
// UPDATE product
router.patch("/:id", async function(req, res, next) {
  try {
    const productId = req.params.id;
    const { name, cashierId, categoryId, price } = req.body;
    const product = await model.product.update(
      {
        name,
        cashierId,
        categoryId,
        price
      },
      {
        where: {
          id: productId
        }
      }
    );
    if (product) {
      res.json({
        status: "OK",
        messages: "User berhasil diupdate",
        data: product
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "ERROR",
      messages: err.message,
      data: {}
    });
  }
}); // DELETE product
router.delete("/:id", async function(req, res, next) {
  try {
    const productId = req.params.id;
    const product = await model.product.destroy({
      where: {
        id: productId
      }
    });
    if (product) {
      res.json({
        status: "OK",
        messages: "User berhasil dihapus",
        data: product
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "ERROR",
      messages: err.message,
      data: {}
    });
  }
});
module.exports = router;
