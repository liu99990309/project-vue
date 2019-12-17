<template>
    <div>
        <el-container>
            <div class="title">
                <span>X轴数据:</span>
                <el-select v-model="xKey" placeholder="请选择">
                    <el-option v-for="item in xKeyOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
                <template v-if="xKey === 'monthString'">
                    <span style="margin-left:20px;">按月显示:</span>
                    <el-select v-model="monthIndex" placeholder="请选择">
                        <el-option v-for="item in monthList" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                    </el-select>
                </template>
                <span style="margin-left:20px;">Y轴数据:</span>
                <el-select v-model="yKey" placeholder="请选择">
                    <el-option v-for="item in yKeyOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
            </div>
            <div style="width:100%;min-height:600px;border:1px solid #ccc;" ref="chart"></div>
        </el-container>
    </div>
</template>

<script src="./index.js"></script>
<style lang="less" scoped>
.el-container {
    flex-direction: column;
    .title {
        text-align: left;
        margin-bottom: 10px;
    }
}
</style>
