import * as bcrypt from 'bcrypt';

function passwordsDoMatch(password, submittedPassword) {
    return bcrypt.compareSync(submittedPassword, password);
}

function encryptPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(15));
}

export {
    passwordsDoMatch,
    encryptPassword,
};