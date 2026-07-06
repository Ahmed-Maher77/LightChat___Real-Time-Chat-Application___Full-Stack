const registerSchema = {
    fullName: {
        notEmpty: {
            errorMessage: "Full name is required",
        },
        isLength: {
            options: { min: 3, max: 50 },
            errorMessage: "Full name must be between 3 and 50 characters",
        },
    },
    email: {
        notEmpty: {
            errorMessage: "Email is required",
        },
        isEmail: {
            errorMessage: "Email is invalid",
        },
        trim: true,
        toLowerCase: true,
    },
    password: {
        notEmpty: {
            errorMessage: "Password is required",
        },
        isLength: {
            options: { min: 6, max: 100 },
            errorMessage: "Password must be between 6 and 100 characters",
        },
    },
    bio: {
        optional: true,
        isLength: {
            options: { max: 200 },
            errorMessage: "Bio must be less than 200 characters",
        },
    },
};

export default registerSchema;
