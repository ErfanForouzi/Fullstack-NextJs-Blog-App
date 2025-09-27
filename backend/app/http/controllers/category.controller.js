const createHttpError = require("http-errors");
const Controller = require("./controller");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const { default: slugify } = require("slugify");
const { CategoryModel } = require("../../models/category");
const {
  addCategorySchema,
  updateCategorySchema,
} = require("../validators/category/category.schema");

const {
  copyObject,
} = require("../../utils/functions");

const { default: mongoose } = require("mongoose");

class CategoryController extends Controller {
  async getListOfCategories(req, res) {
    const query = req.query;
    const categories = await CategoryModel.find(query);
    if (!categories)
      throw createHttpError.ServiceUnavailable("دسته بندی ها یافت نشد");

    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        categories,
      },
    });
  }
  async addNewCategory(req, res) {
    const { title, englishTitle, description, type, parent } =
      await addCategorySchema.validateAsync(req.body);
    await this.findCategoryWithTitle(englishTitle);
    const category = await CategoryModel.create({
      title,
      englishTitle,
      description,
      slug: slugify(englishTitle),
    });

    if (!category) throw createHttpError.InternalServerError("خطای داخلی");
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      data: {
        message: "دسته بندی با موفقیت افزوده شد",
      },
    });
  }
  async updateCategory(req, res) {
    const { id } = req.params;
    const { title, englishTitle, description } = req.body;
    await this.checkExistCategory(id);
    await updateCategorySchema.validateAsync(req.body);
    const updateResult = await CategoryModel.updateOne(
      { _id: id },
      {
        $set: { title, englishTitle, description },
      }
    );
    if (updateResult.modifiedCount == 0)
      throw createError.InternalServerError("به روزرسانی انجام نشد");
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "به روز رسانی با موفقیت انجام شد",
      },
    });
  }
  async removeCategory(req, res) {
    const { id } = req.params;
    await this.checkExistCategory(id);
    const deleteResult = await CategoryModel.findByIdAndDelete(id);
    if (deleteResult.deletedCount == 0)
      throw createError.InternalServerError("حدف دسته بندی انجام نشد");
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message: "حذف دسته بندی با موفقیت انجام شد",
      },
    });
  }
  async findCategoryWithTitle(englishTitle) {
    const category = await CategoryModel.findOne({ englishTitle });
    if (category)
      throw createHttpError.BadRequest("دسته بندی با این عنوان وجود دارد.");
  }
  async checkExistCategory(id) {
    const category = await CategoryModel.findById(id);
    if (!category)
      throw createHttpError.BadRequest("دسته بندی با این عنوان وجود ندارد.");
    return category;
  }

   async getCategoryById(req, res) {
    console.log(req.params);
      const { id } = req.params;
      const category = await this.findCategoryById(id);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          category,
        },
      });
    }
    async findCategoryById(id) {
      if (!mongoose.isValidObjectId(id))
        throw createHttpError.BadRequest("شناسه دسته بندی نامعتبر است");
  
      const category = await CategoryModel.findById(id);
      if (!category) throw createHttpError.BadRequest("دسته بندی با این مشخصات یافت نشد");
      return copyObject(category);
    }
}

module.exports = {
  CategoryController: new CategoryController(),
};
