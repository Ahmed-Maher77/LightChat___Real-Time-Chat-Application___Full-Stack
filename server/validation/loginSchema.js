const loginSchema = {
    email: {
        in: ["body"],
        isEmail: {
            errorMessage: "Please provide a valid email address"
        },
        trim: true,
        toLowerCase: true,
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