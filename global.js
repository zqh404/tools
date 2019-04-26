const global = {
    paramsType: {
        0: 'number',
        1: 'string',
        2: 'boolean',
        3: 'undefined',
        4: 'null',
        5: 'function',
        6: 'object',
        7: 'formData',
        8: 'date',
        9: 'symbol',
        // 10: 'NaN',
        // 11: 'infinite'
    },

    getType(params) {
        switch (Object.prototype.toString.call(params)) {
            case '[object Number]':
                return 'number';
            case '[object String]':
                return 'string';
            case '[object Boolean]':
                return 'boolean';
            case '[object Undefined]':
                return 'undefined';
            case '[object Null]':
                return 'null';
            case '[object Function]':
                return 'function';
            case '[object Object]':
                return 'object';
            case '[object FormData]':
                return 'formData';
            case '[object Date]':
                return 'date';
            case '[object Symbol]':
                return 'symbol';
            case '[object Array]':
                return 'array'
        }
    },

    //拷贝数组对象
    clone(param) {
        let t = this
        let newParam = null

        //即非对象又非数组，直接返回
        if (t.getType(param) !== 'object' && t.getType(param) !== 'array') {
            return param
        }

        /**
         * 数组处理
         * 遍历每一个数组原子，进行第多次递归，直到基本类型和无法遍历的根节点
         */
        else if (t.getType(param) === 'array') {
            newParam = []
            let len = param.length
            for (let i = 0; i < len; i++) {
                let val = t.clone(param[i])
                if (newParam[i] !== val) {
                    newParam[i] = val
                } else {
                    continue
                }
            }
        }


        //遍历到根节点了
        else if (param === void 0) {
            return param
        }

        //对象
        else{
            newParam = {}

            //对象类型遍历
            for (let key in param) {
                if (param.hasOwnProperty(key)) { //只遍历非原型链上的属性
                    let val = param[key]
                    /**
                     * 遍历到根节点类型数据
                     * 1、用于拷贝的对象没有这个数据；
                     * 2、被拷贝的数据是undefined类型
                     * 3、被拷贝的数据还有子孩子是数组类型，继续递归遍历
                     * 4、其他情况，结束本次循环
                     **/
                    if (t.getType(val) !== 'object' && t.getType(val) !== 'array') {
                        if (newParam[key] !== param[key]) {
                            newParam[key] = param[key]
                        } else if (t.getType(param[key]) === 'undefined') {
                            newParam[key] = undefined
                        } else if (t.getType(val) === 'array') {
                            let valTmp = val[i]
                            newParam[key] = t.clone(valTmp)
                        } else {
                            continue
                        }
                    } else {
                        newParam[key] = t.clone(val)
                    }
                }
            }
        }

        return newParam
    }
}

export default global