let validationObj = {
    vType(type, v) {
        switch (type) {
            case 'number':
                if (v === null || v === void 0) {
                    return true
                }
                return /^[0-9]+$/.test(v)
            case 'text':
                return typeof v === 'string'
            case 'password':
                return true
            default:
                break
        }
    }
}

export default validationObj
