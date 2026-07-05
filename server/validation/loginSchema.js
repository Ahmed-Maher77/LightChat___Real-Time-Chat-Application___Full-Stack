const loginSchema = {
    email: {
        in: ["body"],
        isEmail: true,
        normalizeEmail: true,
        errorMessage: "Please provide a valid email address"
    },
    password: {
        in: ["body"],
        isLength: {
            options: { min: 6, max: 100 }
        },
        errorMessage: "Password must be at least 6 characters long"
    }
}


export default loginSchema;