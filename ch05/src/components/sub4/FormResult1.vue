<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";

// router query 인스턴스 가져오기
const router = useRoute();

// router query 데이터 수신
const user = router.query;
</script>
<template>
  <h4>FormResult1</h4>

  <p>
    name : {{ user.name }}<br />
    age : {{ user.age }}<br />
    addr : {{ user.addr }}<br />
  </p>
</template>
<style scoped></style>
