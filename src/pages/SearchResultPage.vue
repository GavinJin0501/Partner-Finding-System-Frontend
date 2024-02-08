<template>
  <form action="/">
    <van-search v-model="searchText" show-action placeholder="Please enter the tag" @search="onSearch" @cancel="onCancel"
      autofocus />
  </form>

  <van-divider content-position="left">Selected Tags</van-divider>
  <div v-if="activeIds.length === 0">Please select the tags</div>
  <van-row gutter="16">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="medium" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>

  </van-row>

  <van-divider content-position="left">Available Tags</van-divider>
  <van-tree-select v-model:active-id="activeIds" v-model:main-active-index="activeIndex" :items="tagList" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { useRouter } from 'vue-router'

// const router = useRouter();

const searchText = ref('');
const initTagList = [
  {
    text: 'Group 1',
    children: [
      { text: 'Delaware', id: 'Delaware' },
      { text: 'Florida', id: 'Florida' },
    ],
  },
  {
    text: 'Group 2',
    children: [
      { text: 'Alabama', id: 'Alabama' },
      { text: 'Kansas', id: 'Kansas' },
      { text: 'Louisiana', id: 'Louisiana' },
    ],
  },
];
const activeIds = ref([]);
const activeIndex = ref(0);
const tagList = ref(initTagList);

const onCancel = () => {
  searchText.value = '';
  tagList.value = initTagList;
};

const onSearch = (val: string) => {
  tagList.value = initTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = { ...parentTag };
    tempParentTag.children = tempChildren.filter(item => item.text.includes(val));
    return tempParentTag;
  });

};
const doClose = (tag: string) => {
  activeIds.value = activeIds.value.filter(item => item !== tag)
};




</script>

<style scoped></style>

