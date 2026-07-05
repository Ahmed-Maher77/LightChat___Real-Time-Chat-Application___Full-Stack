const createCookie = (name, token) => {
    return res.cookie(name, token, {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // set to true in production
    });
};
