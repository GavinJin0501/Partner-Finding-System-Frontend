<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="Account"
          placeholder="Please enter your user account"
          :rules="[{ required: true, message: 'Username is required' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="Password"
          placeholder="Please enter your password"
          :rules="[{ required: true, message: 'Password is required' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        Submit
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast} from "vant";

const router = useRouter();
const userAccount = ref('');
const userPassword = ref('');
const onSubmit = async () => {
  const res = await myAxios.post('/user/login', {
    userAccount: userAccount.value,
    userPassword: userPassword.value,
  });
  console.log(res, 'user login...');
  if (res.code === 0 && res.data) {
    showSuccessToast("login success");
    router.replace('/');
  } else {
    showFailToast('login failed');
  }
};

</script>

<style scoped>

</style>