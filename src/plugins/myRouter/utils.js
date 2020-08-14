class Utils{
    constructor(){

    }
    // 获取属性类型
    getProperty(value){
        let Rex = /^\[object\s(.*)\]$/
        let type = Object.prototype.toString.call(value)
        return (Rex.exec(type))[1]
    }
}

export default new Utils()