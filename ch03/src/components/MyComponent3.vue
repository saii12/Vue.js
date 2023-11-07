<!-- script template style 순서는 상관없음-->

<script>
import MyComponent4 from "./MyComponent4.vue";

export default {
  name: "MyComponent3",
  components: {
    MyComponent4, // MyComponent3을 export 시킬땐 그 안에 포함된 MyComponent4도 export 되어야한다
  },
};
</script>

<template>
  <h4>MyComponent3</h4>
  <p>부모 컴포넌트</p>
  <MyComponent4 />
</template>

<style scoped>
h4 {
  color: green;
}
</style>
