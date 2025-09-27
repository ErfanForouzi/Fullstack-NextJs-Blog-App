const expressAsyncHandler = require("express-async-handler");
const {
  CategoryController,
} = require("../http/controllers/category.controller");

const { verifyAccessToken, decideAuthMiddleware } = require("../http/middlewares/auth.middleware");

const router = require("express").Router();

router.post(
  "/add",
  verifyAccessToken,
  expressAsyncHandler(CategoryController.addNewCategory)
);
router.get(
  "/list",
  expressAsyncHandler(CategoryController.getListOfCategories)
);
router.patch(
  "/update/:id",
  verifyAccessToken,
  expressAsyncHandler(CategoryController.updateCategory)
);

router.delete(
  "/remove/:id",
  verifyAccessToken,
  expressAsyncHandler(CategoryController.removeCategory)
);
router.get(
  "/:id",
  decideAuthMiddleware,
  expressAsyncHandler(CategoryController.getCategoryById)
);

module.exports = {
  categoryRoutes: router,
};
