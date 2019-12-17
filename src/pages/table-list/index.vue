<template>
    <div>
        <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border>
            <el-table-column prop="brand" label="品牌" width="100"></el-table-column>
            <el-table-column prop="type" label="车型" width="100"></el-table-column>
            <el-table-column prop="name" label="名称" width="100"></el-table-column>
            <el-table-column prop="model" label="系列" width="100"></el-table-column>
            <el-table-column prop="trans" label="Trans" width="100"></el-table-column>
            <el-table-column prop="color" label="颜色" width="100"></el-table-column>
            <el-table-column prop="date" label="日期" width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.year }}年{{ scope.row.month }}月</span>
                </template>
            </el-table-column>
            <el-table-column prop="count" label="数量" width="100"></el-table-column>
            <el-table-column prop="price" label="价格" width="100"></el-table-column>
            <el-table-column prop="total" label="总额" width="100"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="del({ id: scope.row.id })">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background :page-size="pageSize" :current-page.sync="pageNo" layout="prev, pager, next" :total="list.length"> </el-pagination>
    </div>
</template>

<script src="./index.js"></script>
