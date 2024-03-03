<template>
  <user-card-list :user-list="userList"/>
  <van-empty v-if="!userList || userList.length < 1" description="Data is null"/>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {UserType} from "../models/user";
import UserCardList from "../components/UserCardList.vue";
import {useRoute} from "vue-router";

const userList = ref([]);
const route = useRoute();

onMounted(async () => {
  const userListData: UserType[] = await myAxios.get('/user/recommend', {
    params: {
      pageSize: 8,
      pageNum: 1,
    },
  })
      .then(function (response: string): UserType[] {
        console.log('/user/recommend', response);
        return response?.data?.records;
      })
      .catch(function (error: Error) {
        console.log('/user/recommend', error);
      });

  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
});

</script>

<style scoped></style>

