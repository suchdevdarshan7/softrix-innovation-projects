const CustomerModel = require('./../model/customer.model');


exports.getAllCustomers = async (req, res) => {
    try {
        const allCustomers = await CustomerModel.find();
        res.json(allCustomers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }  

}
