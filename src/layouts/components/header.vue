<template>
    <header class="top-header">
        <div class="system">
            <svg-icon name="logo"></svg-icon>
            <span>Ele-plus管理系统</span>
        </div>
        <div>
            <el-dropdown>
                <div class="user-info">
                    <el-avatar size="small" src="../src/assets/avatar.png"></el-avatar>
                    <span>Serati Ma</span>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <el-icon>
                                <User />
                            </el-icon>
                            <span>个人中心</span>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-icon>
                                <Setting />
                            </el-icon>
                            <span>个人设置</span>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-icon>
                                <SwitchButton />
                            </el-icon>
                            <span>退出登录</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </header>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<style lang="less" scoped>
.top-header {
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    svg {
        width: 28px;
        height: 28px;
        margin: 0 12px;
    }

    .system {
        width: 208px;
        height: 100%;
        //background: red;
        display: flex;
        align-items: center;
    }

    .user-info {
        margin: 0 12px;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;

        span {
            color: #fff;
            margin: 0 4px;
        }
    }
}
</style>
<script></script>
