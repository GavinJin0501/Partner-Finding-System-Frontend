<template>
    <van-nav-bar 
        title="Title" 
        left-arrow  
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
        <template #right>
            <van-icon name="search" />
        </template>
    </van-nav-bar>

    <div id="content">
        <router-view />
    </div>

    <van-tabbar route @change="onChange">
        <van-tabbar-item to="/" icon="home-o" name="index">Main</van-tabbar-item>
        <van-tabbar-item to="/teams" icon="search" name="teams">Teams</van-tabbar-item>
        <van-tabbar-item to="/user" icon="friends-o" name="user">Me</van-tabbar-item>
    </van-tabbar>

</template>    

<script setup lang="ts">
    import {useRouter} from "vue-router"

    const router = useRouter();

    const onClickLeft = () => {
        router.back();
    };

    const onClickRight = () => {
        router.push("/search");
    };
</script>

<style scoped>
#content {
  padding-bottom: 50px;
}
</style>