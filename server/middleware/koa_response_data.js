// 读取数据文件
const path =require('path')

const fileUtils=require('../utils/file_utils')
module.exports=async (ctx,next)=>{
    //根据url 读取
    const url =ctx.request.url
    let filePath=url.replace('/api','')
    filePath= '../data'+filePath+'.json'

    filePath =path.join(__dirname,filePath)
    try{
        const ret = await fileUtils.getFileJsonData(filePath)
        ctx.response.body=ret
    }catch(error){
        const errorMsg={
            mssage: '读取文件内容失败,文件资源不存在',
            status:404,
        } 
         ctx.response.body=JSON.stringify(errorMsg)
    }
    
    console.log(filePath)
    await next()
}