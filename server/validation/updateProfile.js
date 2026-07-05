const updateProfileSchema = {
    fullName: {
        optional: true,
        isLength: {
            options: { min: 3, max: 50 },
            errorMessage: "Full name must be between 3 and 50 characters",
        },
    },
    bio: {
        optional: true,
        isLength: {
            options: { max: 200 },
            errorMessage: "Bio must be less than 200 characters",
        },
    },
    profilePic: {
        optional: true,
        
    }
};

export default registerSchema;
