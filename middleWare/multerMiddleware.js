const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,'./uploads')
    },
    filename:(req,file,callBack)=>{
        const fileName = `image-${Date.now()}-${file.originalname}`
        callBack(null,fileName)
    }
})


// fileFilter

const fileFilter = (req,file,callback)=>{
   if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
    callback(null,true)
   }else{
    callback(null,false)
    return callback(new Error ("only allows png,jpg,jpeg format images"))
   }
}


const multerConfig = multer({
    storage,
    fileFilter
})

module.exports=multerConfig;