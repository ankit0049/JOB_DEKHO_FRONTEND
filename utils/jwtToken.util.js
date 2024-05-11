export const sendToken = (user, statusCode, res, message) => {
    const cookieExpire = parseInt(process.env.COOKIE_EXPIRES) || 4;

    console.log(typeof cookieExpire)
  
    const token = user.getJWTToken();
  
    const options = {
      expires: new Date(
        Date.now() + cookieExpire * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
  
    if (isNaN(cookieExpire)) {
      return res.status(500).json({
        success: false,
        message: 'Invalid COOKIE_EXPIRE value',
      });
    }
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token
    });
  }
  