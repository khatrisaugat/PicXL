const Category = require('../../model/categoryModel');

exports.get_all_categories = async (req, res) => {
    try {
        const allCategories = await Category.findAll({});

        res.status(200).json({
            status: 'success',
            allCategories
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);

        res.status(200).json({
            status: 'success',
            category
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.addCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);

        res.status(201).json({
            status: 'success',
            category
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.update(req.body,{
            where:{
                id: req.params.id
            }
        })

        res.status(200).json({
            status: 'success',
            category
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({
            status: 'success',
            deletedCategory
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};