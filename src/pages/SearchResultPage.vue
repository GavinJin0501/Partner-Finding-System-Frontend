<template>
  <user-card-list :user-list="userList" />
  <div>
    <van-empty v-if="!userList || userList.length < 1" description="No such users."/>
  </div>

</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {UserType} from "../models/user";
import UserCardList from "../components/UserCardList.vue";
const route = useRoute();

onMounted(async () => {
    const userListData: UserType[] = await myAxios.get('/user/search/tags', {
      params: {
        tagNameList: tags
      },
      paramsSerializer: params => qs.stringify(params, {indices:  false}),
    })
        .then(function (response: string): UserType[] {
          console.log('/user/search/tags', response);
          return response?.data;
        })
        .catch(function (error: Error) {
          console.log('/user/search/tags', error);
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

const {tags} = route.query;
// const mockUser = {
//   id: 12345,
//   username: "jjy",
//   userAccount: "jjy",
//   avatarUrl: "https://gavinjin0501.github.io/static/avatar1.png",
//   profile: "handsome boy ajdosajdjasaajsldjsajsakjdasjdalsjd",
//   gender: 1,
//   phone: "13585519987",
//   email: "jjy@jjy.com",
//   userRole: 0,
//   planetCode: "123",
//   tags: ['java', 'emo', 'gaming'],
//   createdTime: new Date(),
// };

const userList = ref([]);

</script>

<style scoped></style>

