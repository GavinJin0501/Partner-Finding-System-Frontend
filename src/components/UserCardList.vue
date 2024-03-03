<template>
  <van-card
      v-for="user in props.userList"
      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 5px; margin-top: 5px">
        {{tag}}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">Contact Me</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import {UserType} from "../models/user";

interface UserCardListProps {
  userList: UserType[];
}
const props = defineProps<UserCardListProps>();

</script>

<style scoped>

</style>