const { body,  } = require('express-validator');
const { executeValidation } = require('./validation-index.js')


//validation params

const name = body('name')
    .isString().withMessage('the field must be string')
    .notEmpty().withMessage('the field must not be empty')
;

const content = body('content')
    .isString().withMessage('the field must be string')
    .notEmpty().withMessage('the field must not be empty')
;

const image = body('image')
    .isString().withMessage('the field must be string')

;


//validators

const updateReqValidation = [ name, content, image, executeValidation ];

module.exports = {
    updateReqValidation,
}