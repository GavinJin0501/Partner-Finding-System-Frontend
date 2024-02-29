<template>
  <van-form @submit="onSubmit">
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`Please enter your new ${editUser.editName}`"
          :rules="[{ required: true, message: 'Username is required' }]"
      />

    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        Submit
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">

import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast} from "vant";
import {getCurrentUser} from "../services/user.ts";
import {UserType} from "../models/user";

const route = useRoute();
const router = useRouter();
const editUser = ref({
    editKey: route.query.editKey,
    editName: route.query.editName,
    currentValue: route.query.currentValue
});

const onSubmit = async () => {
  const currentUser: UserType = await getCurrentUser();
  console.log(currentUser);
  if (!currentUser) {
    showFailToast('User not logged in');
    return;
  }

  const res = await myAxios.post('/user/update', {
    'id': currentUser.id,
    [editUser.value.editKey as string]: editUser.value.currentValue,
  });

  console.log('update request:', res);
  if (res.code === 0 && res.data > 0) {
    showSuccessToast('Edit success!');
    router.back();
  } else {
    showFailToast('Edit failed!');
  }
}

</script>

<style scoped>

</style>