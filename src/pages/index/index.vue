<template>
    <div class="upload-btn">
        {{ uploaded ? '文件上传成功' : '请选择csv格式文件' }}
        <input class="file" type="file" :disabled="uploaded" @change="readCSVFile" />
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data(){
        return {
            uploaded:false
        }
    },
    methods: {
        ...mapActions({
            int:'INT'
        }),
        dataLoaded(data) {
            this.int({
                list:data
            }).then(()=>{
                this.$router.push('/table')
            })
        },
        readCSVFile(e) {
            if(this.uploaded){
                return
            }
            this.uploaded=true
            const obj = e.target
            const { csvToObject, dataLoaded } = this
            let reader = new FileReader()
            reader.readAsText(obj.files[0])
            reader.onload = function() {
                let data = csvToObject(this.result)
                dataLoaded(data)
            }
        },
        csvToObject(csvString) {
            const [header, body] = csvString.split(';;;;;;;;;;')
            const headers = header.replace(/[\n]/g, '').split(';')
            headers.pop()
            const bodys = body.split('####').map(item => {
                const list = item.replace(/[\n]/g, '').split(';')
                list.pop()
                return list
            })
            const list = bodys.map(item => {
                return item.reduce((obj, v, index) => {
                    const key = headers[index].toLowerCase()
                    obj[key] = v
                    return obj
                }, {})
            })
            return list
        }
    }
}
</script>
<style lang="less" scoped>
.upload-btn {
    width: 200px;
    height: 50px;
    border: 1px solid #eee;
    border-radius: 5px;
    position: relative;
    line-height: 50px;
    .file {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
    }
}
</style>
