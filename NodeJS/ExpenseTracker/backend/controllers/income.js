const IncomeSchema = require('../models/IncomeModel')

exports.addIncome = async (req, res) => {
    // console.log(req.body);
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
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
        await income.save()
        res.status(200).json({message: "Income added successfully"})
    } catch(error) {
        res.status(500).json({message: "Internal server error"})
    }

    console.log(income)
}
