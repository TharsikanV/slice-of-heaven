
const sendToken=(admin,statusCode,res)=>{
    const token=admin.getJwtToken();
//     res.status(statusCode).cookie('token',token,
//     //     {
//     //     expire:new Date(Date.now()+process.env.COOKIE_EXPIRES_TIME*24*60*60*1000),
//     //     httpOnly:true
//     // }
// ).json({
//         success:true,
//         token,
//         admin:admin
//     });
const options={
    expires:new Date(Date.now()+process.env.COOKIE_EXPIRES_TIME*24*60*60*1000),
    httpOnly:true,//http request ah thaan payanpaduththanum javasript aala ellam access paannalaathu

}


res.status(statusCode)
.cookie('token',token,options)//key value paar
.json({
    success:true,
    token,
    admin
})
}

module.exports=sendToken;