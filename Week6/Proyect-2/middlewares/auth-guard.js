const User = require('../models/User.model')

const checkFields = (req, res, next) => {

    let errorMessage = "";


    const { username, email, userPwd } = req.body

    if (!email) errorMessage += "Need email\n"
    if (!username) errorMessage += 'Need username\n'
    if (!userPwd) errorMessage += 'Need password\n'

    if (errorMessage) {
        res.render('auth/register', { errorMessage, username, email, userPwd })
        return

    }
    else {
        const promises = [User.findOne({ username }), User.findOne({ email })]

        Promise
            .all(promises)
            .then(([username, email]) => {
                if (username) errorMessage += 'Existing Username\n'
                if (email) errorMessage += 'Existing Email\n'
                if (errorMessage) {
                    res.render('auth/register', { errorMessage, ...req.body })
                    return
                }

            })
            .catch(error => next(error))

    }
    next()
}

module.exports = { checkFields }



