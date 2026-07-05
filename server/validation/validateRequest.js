import { checkSchema, validationResult } from "express-validator";

const validateRequest = (validationSchema) => {
    return [
        checkSchema(validationSchema),
        (req, res, next) => {
            const result = validationResult(req);
            if (!result.isEmpty()) {
                return res.status(400).json({ errors: result.array() });
            }

            next();
        },
    ];
};

export default validateRequest;
