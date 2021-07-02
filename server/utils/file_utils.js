// 用读取文件的工具
const fs=require('fs')
module.exports.getFileJsonData=(filePath)=>{
    //根据文件路径去读取内容
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,'utf-8',(error,data)=>{
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
            })
    })

}