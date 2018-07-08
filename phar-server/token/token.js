const jwt = require('jsonwebtoken')
const secret = 'notsosecret'

function createToken(user) {
    console.log('USER IN JWT', user)

    return jwt.sign(
        {
            id: user._id,
            username: user.username,
            email: user.email
        },
        secret,
        {
            algorithm: 'HS256',
            expiresIn: '1h'
        }
    );
}

module.exports = createToken