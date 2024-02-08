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

import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();
const editUser = ref({
    editKey: route.query.editKey,
    editName: route.query.editName,
    currentValue: route.query.currentValue
});
console.log(editUser);

const onSubmit = (values) => {
  // todo: submit the editKey, currentValue, and editName to the backend
  console.log("onSubmit", values)
}

</script>

<style scoped>

</style>