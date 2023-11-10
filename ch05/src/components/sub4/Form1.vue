<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = reactive({
  // v-model이랑 reactive랑 거의 세트라고 보면 되는감??
  name: "",
  age: 0,
  addr: "",
});

const submitHandler = () => {
  // router 인스턴스로 컴포넌트 라우팅(데이터 포함) / push로 FormResult1이 뜬다
  router.push({ name: "FormResult1", query: user }); //query 목적지 라우트로 데이터나 매개변수를 전달하는 데 사용
};
</script>
<template>
  <h4>Form1</h4>
  <form @submit.prevent="submitHandler">
    <!-- prevent하는 건 폼 전송 기본 동작 방지하고 submitHandler로 작동하게 하려고 -->
    <input type="text" v-model="user.name" /><br />
    <!-- 양방향 바인딩 -->
    <input type="number" v-model="user.age" /><br />
    <select v-model="user.addr">
      <option>서울</option>
      <option>대전</option>
      <option>대구</option>
      <option>부산</option>
      <option>광주</option>
    </select>
    <br />
    <input type="submit" value="전송" />
  </form>
</template>
<style scoped></style>
