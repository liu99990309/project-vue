<template>
    <div class="app">
        <el-container>
            <el-header>
                销售数据统计
            </el-header>
            <el-container>
                <el-aside>
                    <el-menu @select="onSelect" :default-active="active" background-color="#515a6e" text-color="#fff" active-text-color="#ffd04b">
                        <el-menu-item v-for="item of items" :key="item.path" :index="item.path">
                            <span slot="title">{{ item.title }}</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import routes from '@src/router/routes'

export default {
    data(){
        return {
            items:routes.filter(item=>item.path!=='*'),
        }
    },
    computed:{
        active(){
            return this.items.find(item=>item.path===this.$route.path).path
        }
    },
    methods:{
        onSelect(v){
            this.$router.push(v)
        }
    }
}
</script>

<style lang="less"  scoped>
.app {
    width: 100%;
    height: 100%;
    display: flex;
}
.el-header {
    background-color: #414858;
    color: #fff;
    text-align: center;
    line-height: 60px;
    text-align: left;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
}

.el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
}
</style>
