const {Item} = require(`../models`);
const { formatResponse } = require("../helpers/formatResponse");

class ItemController {
    static async getAllItem(req, res){
        try {
            const items = await Item.findAll();
            if(items == null){
                res.status(204).json(formatResponse(null, `Cannot find any items`));
            }
            else {
                res.status(200).json(formatResponse(items, `Successfully get ${items.length} items.`));
            }
        }
        catch(err) {
            res.status(400).json(formatResponse(null, err));
        }
    }

}

module.exports = {ItemController};