const Validator = require('fastest-validator')
const v = new Validator

const validate = (values) => {
    const schema = {
        name: 'string|empty:false',
        image: 'string|empty:false',
        description: 'string|empty:false'
    }

    const validate = v.validate(values, schema)
    return validate;
}

module.exports = {
    validate
}