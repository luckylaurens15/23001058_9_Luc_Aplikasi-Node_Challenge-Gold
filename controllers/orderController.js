const {Order, Item} = require(`../models`);
const { formatResponse } = require("../helpers/formatResponse");

class OrderController {
    static async getAllOrder (req, res){
        try {
            const orders = await Order.findAll({include: ['User', 'Item']});
            if(orders == null){
                res.status(404).json(formatResponse(null, `Cannot find any orders`));
            }
            else {
                res.status(200).json(formatResponse(orders, `Successfully get ${orders.length} orders.`));
            }
        }
        catch(err) {
            res.status(400).json(formatResponse(null, err));
        }
    }

    static async getAnOrder (req, res){
        try{
            const theOrder = await Order.findByPk(req.params.id, {include: ['User', 'Item']});

            if (theOrder == null){
                res.status(404).json(formatResponse(req.params, `Order with id ${req.params.id} is not found!`));
            }
            else{
                res.status(200).json(formatResponse(theOrder, `Successfully get an order with id ${theOrder.id}`));
            }
        }
        catch(err){
            res.status(400).json(formatResponse(req.params, err));
        }
    }

    static async getUserOrder (req, res){
        try{
            const orders = await Order.findAll({
                where:{
                    user_id:req.params.id
                },
                include: ['User', 'Item']
            });

            if (orders == null){
                res.status(404).json(formatResponse(req.params, `User Order with user id ${req.params.id} is not found!`));
            }
            else{
                res.status(200).json(formatResponse(orders, `Successfully get ${orders.length} orders from user with id : ${req.params.id}.`));
            }
        }
        catch(err){
            res.status(400).json(formatResponse(req.params, err));
        }
    }

    static newOrderPage(req, res){
        res.status(200).json(formatResponse(null, "This is new order page."));
    }

    static async createNewOrder(req, res){
        try {
            const item = await Item.findByPk(req.body.item_id);
            if (item.stock < req.body.qty){
                res.status(400).json(formatResponse(req.body, `Cannot make an order due to not enough stock. Stock = ${item.stock}, while required items = ${req.body.qty}!`));
            }
            else{
                const newOrder = await Order.create({
                    user_id: req.body.user_id,
                    item_id: req.body.item_id,
                    qty: req.body.qty,
                });
    
                // Updating item page to reduce the stock after order
                item.stock = item.stock - newOrder.qty;
                item.save();
    
                res.status(200).json(formatResponse(newOrder, `Successfully created new order ${newOrder.id}!`));
            }
        }
        catch(err) {
            res.status(400).json(formatResponse(req.body, err));
        }
    }

    static async updateStatusPage (req, res){
        try{
            const theOrder = await Order.findByPk(req.params.id, {include: ['User', 'Item']});

            if (theOrder == null){
                res.status(404).json(formatResponse(req.params, `Order with id ${req.params.id} is not found!`));
            }
            else{
                res.status(200).json(formatResponse(theOrder, `This is order page with order:id ${theOrder.id}. Make sure to update the status by following this criteria: Status = {On Process, Delivered, Done, Cancelled}!`));
            }
        }
        catch(err){
            res.status(400).json(formatResponse(req.params, err));
        }
    }

    static async updateStatus(req, res){
        try{
            const theOrder = await Order.findByPk(req.params.id, {include: ['User', 'Item']});

            if (theOrder == null){
                res.status(404).json(formatResponse(req.params, `Order with id ${req.params.id} is not found!`));
            }
            else if (req.body.status == null){
                res.status(404).json(formatResponse(req.body, `Cannot Update order status with null. Update order status PUT must include the new status.`))
            }
            else{
                let oldStatusTemp = theOrder.status;
                if (req.body.status == oldStatusTemp){
                    res.status(200).json(formatResponse(theOrder, `No Update for the status! The status = ${req.body.status}`));
                }
                else if(oldStatusTemp == "Cancelled"){
                    res.status(200).json(formatResponse(theOrder, `Cannot update cancelled order!`));
                }
                else if (req.body.status == "Cancelled"){
                    theOrder.status = req.body.status;
                    theOrder.save();

                    // return back stock after the order is cancelled
                    const theItem = await Item.findByPk(theOrder.item_id);
                    theItem.stock = theItem.stock + theOrder.qty;
                    theItem.save();

                    res.status(200).json(formatResponse(theOrder, `Successfully cancelled an order with ${theOrder.id}. ${oldStatusTemp} -> ${theOrder.status}!`));
                }
                else{
                    theOrder.status = req.body.status;
                    theOrder.save();

                    res.status(200).json(formatResponse(theOrder, `Successfully updated order status with ${theOrder.id}. ${oldStatusTemp} -> ${theOrder.status}!`));
                }
            }
        }
        catch(err){
            res.status(400).json(formatResponse(req.params, err));
        }
    }
}

module.exports = {OrderController};