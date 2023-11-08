<script>
export default {
  name: "PropsComponent2",
  props: ["mycity"], // 배열 속성임
};
</script>
<template>
  <li>{{ mycity }}</li>
</template>

<style scoped></style>
