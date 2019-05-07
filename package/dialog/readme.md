## 弹框组件
组件有modal、alert弹框（继续更新中...）

## 基本配置参数
1. width:  number类型，非必需，弹框宽度；
2. height: number类型，非必需，弹框高度；
3. messageType： string类型，非必需，Alert弹框参数，message提示类型；
   + message type
     + message: 普通信息提示
     + success: 成功信息提示
     + error  : 错误信息提示
     + warning: 警告信息提示
4. message: string类型，非必需，Alert弹框参数，消息文本内容；
5. title: string类型，非必需，弹框标题；
6. isOk: boolean类型，Alert弹框参数，搭配callback函数 function isOk(){}；
7. isCancel: boolean类型, Alert弹框参数, 搭配callback函数 function isCancel(){}；

## 用法 (javascript代码)
### modal()
```
    import myComponent from './myComponent'
    this.$dialog.modal(myComponent, {
        width: 320,
        title: 'myComponent'
    })
```

### alert()
```
    this.$dialog.alert({
        messageType: 'warning',
        message: 'alter dialog',
        isOk: true,
        isCancel: true,
        ok(res){
            console.log(res)
        },
        cancel(res){
            console.log(res)
        }
    })
```