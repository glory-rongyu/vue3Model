<template>
    <el-result icon="warning" style="margin-top: 200px" sub-title="抱歉，您访问的页面不存在。" title="404">
        <!--        <template #icon>-->
        <!--            <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />-->
        <!--        </template>-->
        <template #extra>
            <el-button onclick="" type="primary" @click="$router.back()">返回首页</el-button>
        </template>
    </el-result>
</template>
