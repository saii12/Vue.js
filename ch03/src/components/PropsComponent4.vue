<script>
export default {
  name: "PropsComponent4",
  props: ["c4Name", "c4Age"], // 배열 속성임
};
</script>
<template>
  <h4>PropsComponent4</h4>
  <p>
    c4Name: {{ c4Name }}<br />
    c4Age : {{ c4Age }}
  </p>
</template>

<style scoped></style>
