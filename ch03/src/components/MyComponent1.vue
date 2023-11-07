<!-- script template style 순서는 상관없음-->

<script>
export default {
  name: "MyComponent1",
};
</script>

<template>
  <h4>MyComponent1</h4>
  <p>사용자 정의 컴포넌트</p>
</template>

<!-- scoped는 해당 컴포넌트만 적용되게 함-->
<style scoped>
h4 {
  color: red;
}
</style>
