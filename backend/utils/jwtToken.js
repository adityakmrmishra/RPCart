// CREATING TOKEN AND SAVING IN COOKIE


const sendToken = (user,statusCode,res)=>{
    const token = user.getJWTToken();

    //Option for cookie
    const options = {
        expires: new Date(Date.now() +process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };

    res.status(statusCode).cookie("token",token , options).json({
        success: true,
        user,
        token,
    });

};

export default sendToken;