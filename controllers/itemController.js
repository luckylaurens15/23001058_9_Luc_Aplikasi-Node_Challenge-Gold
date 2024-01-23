const {Item} = require(`../models`);
const { formatResponse } = require("../helpers/formatResponse");

class ItemController {
    static async getAllItem(req, res){
        try {
            const items = await Item.findAll();
            if(items == null){
                res.status(404).json(formatResponse(null, `Cannot find any items`));
            }
            else {
                res.status(200).json(formatResponse(items, `Successfully get ${items.length} items.`));
            }
        }
        catch (err) {
            //Note: Pada dasarnya perlu mapping atau validasi lebih untuk menentukan sebuah error apakah memiliki status code tertentu seperti 400 atau 500. Bisa dipertimbangkan untuk melakukan mapping status code untuk error error yang mungkin terjadi. Note ini berlaku untuk endpoint lain
            res.status(400).json(formatResponse(null, err));
        }
    }

    static async getItem(req, res) {
        try{
            const theItem = await Item.findByPk(req.params.id);
            if (theItem == null){
                res.status(404).json(formatResponse(req.params, `Item with id ${req.params.id} is not found!`));
            }
            else{
                res.status(200).json(formatResponse(theItem, `Successfully get an item ${theItem.item_name} with id ${theItem.id}`));
            }
        }
        catch(err){
            res.status(400).json(formatResponse(req.params, err));
        }
    }

    static addItemPage(req, res){
        res.status(200).json(formatResponse(null, "This is add new item page."));
    }

    static async addNewItem(req, res){
        try {
            const newItem = await Item.create({
                item_name: req.body.item_name,
                price: req.body.price,
                stock: req.body.stock,
            });
            res.status(200).json(formatResponse(newItem, `Successfully added new item ${newItem.item_name}!`));
        }
        catch(err) {
            res.status(400).json(formatResponse(req.body, err));
        }
    }

    static async updateItemPage(req, res) {
        try{
            const theItem = await Item.findByPk(req.params.id);
            if (theItem == null){
                res.status(404).json(formatResponse(req.params, `Item with id ${req.params.id} is not found!`));
            }
            else{
                res.status(200).json(formatResponse(theItem, `This is update page for ${theItem.item_name}.`));
            }
        }
        catch(err){
            res.status(400).json(formatResponse(req.params, err));
        }
    }

    static async updateItem(req, res) {
        try{
            const theItem = await Item.findByPk(req.params.id);
            if (theItem == null){
                res.status(404).json(formatResponse(req.params, `Item with id ${req.params.id} is not found!`));
            }
            else{
                if (req.body.item_name != null){
                    theItem.item_name = req.body.item_name;
                }
                if (req.body.price != null){
                    theItem.price = req.body.price;
                }
                if (req.body.stock != null){
                    theItem.stock = req.body.stock;
                }
                theItem.updatedAt = new Date();
                theItem.save();
                res.status(200).json(formatResponse(theItem, `Successfully Updated ${theItem.item_name} (id : ${theItem.id}).`));
            }
        }
        catch(err){
            res.status(400).json(formatResponse(req.params, err));
        }
    }

    static async deleteItemPage(req, res) {
        try{
            const theItem = await Item.findByPk(req.params.id);
            if (theItem == null){
                res.status(404).json(formatResponse(req.params, `Item with id ${req.params.id} is not found!`));
            }
            else{
                res.status(200).json(formatResponse(theItem, `This is delete confirmation page for ${theItem.item_name}.`));
            }
        }
        catch(err){
            res.status(400).json(formatResponse(req.params, err));
        }
    }

    static async deleteItem(req, res) {
        try{
            const theItem = await Item.findByPk(req.params.id);
            if (theItem == null){
                res.status(404).json(formatResponse(req.params, `Item with id ${req.params.id} is not found!`));
            } //Note: Penulis if elsenya bisa dibuat lebih rapih lagi
            else{
                let IDTemp = theItem.id;

                //Note: Tidak pakai await?
                theItem.destroy();
                res.status(200).json(formatResponse(req.params.id, `Successfully Deleted Item With ID : ${IDTemp}`));
            }
        }
        catch(err){
            res.status(400).json(formatResponse(req.params, err));
        }
    }

}

module.exports = {ItemController};