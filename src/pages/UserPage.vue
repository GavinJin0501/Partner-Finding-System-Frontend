<template>
  <van-cell title="Nickname" is-link to="/user/edit" :value="user.username" @click="toEdit('username', 'Nickname', user.username)"/>
  <van-cell title="User Account" :value="user.userAccount"/>
  <van-cell title="Avatar" >
    <img style="height: 32px" :src="user.avatarUrl" alt="https://gavinjin0501.github.io/static/avatar1.png"/>
  </van-cell>
  <van-cell title="Gender" is-link :value="user.gender" @click="toEdit('gender', 'Gender', user.gender)"/>
  <van-cell title="Phone" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone', 'Phone', user.phone)"/>
  <van-cell title="Email" is-link to="/user/edit" :value="user.email" @click="toEdit('email', 'Email', user.email)"/>
  <van-cell title="Planet Code" :value="user.planetCode" @click="toEdit('planetCode', 'PlanetCode', user.planetCode)"/>
  <van-cell title="Account Creation Time" :value="user.createdTime.toDateString()"/>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const user = {
  id: 1,
  username: "username-jjy",
  userAccount: "account-jjy",
  avatarUrl: "https://gavinjin0501.github.io/static/avatar1.png",
  gender: "male",
  phone: "13585519987",
  email: "jjy@jjy.edu",
  planetCode: "1234",
  createdTime: new Date(),
};

const router = useRouter();

const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue
    }
  });
};
</script>

<style scoped>

</style>