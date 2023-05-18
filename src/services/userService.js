const { createToken } = require('../helpers/createToken');
const { validateInfoUser } = require('../middlewares/validateInfoUser');

const userInfo = async ({
    displayName,
    email,
    password,
}) => {
    const result = await validateInfoUser(displayName, email, password);
    if (result === 'ok') {
        const newToken = await createToken(email);
        return newToken;
    }
    return result;
};

module.exports = userInfo;