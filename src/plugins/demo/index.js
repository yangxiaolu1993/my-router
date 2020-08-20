class MyRouter{
    constructor(options){
        this.routes = options.routes || []
        this.mode = options.mode || 'hash' // 模式 hash || history
    }
}

export default MyRouter