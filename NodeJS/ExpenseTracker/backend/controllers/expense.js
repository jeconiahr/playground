const ExpenseSchema = require('../models/ExpenseModel')

exports.addExpense = async (req, res) => {
    // console.log(req.body);
    const {title, amount, category, description, date} = req.body

    const Expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        // Validations
        if (!title || !amount || !category || !description || !date) {
            return res.status(400).json({message: "Please fill all the fields"})
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: "Please fill all the fields"})
        }
        await Expense.save()
        res.status(200).json({message: "Expense added successfully"})
    } catch(error) {
        res.status(500).json({message: "Internal server error"})
    }

    console.log(Expense)
}

exports.getExpense = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
}

exports.deleteExpense = async (req, res) => {
    // Params is the object that contains the URL parameters
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((Expense) => {
            res.status(200).json({message: "Expense deleted successfully"})
        })
        .catch((error) => {
            res.status(500).json({message: "Internal server error"})
        })
}
