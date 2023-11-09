<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from "vue";

export default {
  name: "Component2",
  setup() {
    const count = ref(0);
    const btnAdd = () => {
      count.value++; // ref이용할때는 .value로 쓰는건가? ㅇㅇ 맞는듯
    };

    onBeforeMount(() => {
      console.log("onBeforeMount...");
    });
    onMounted(() => {
      console.log("onMount...");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate...");
    });
    onUpdated(() => {
      console.log("onUpdated...");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount...");
    });
    onUnmounted(() => {
      console.log("onUnmounted...");
    });

    return {
      count,
      btnAdd,
    };
  },
};
</script>
<template>
  <h4>Component2</h4>
  <p>
    count : {{ count }}
    <button @click="btnAdd">증가</button>
  </p>
</template>
<style scoped></style>
