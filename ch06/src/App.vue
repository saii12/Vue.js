<script setup>
import { useMainStore } from "./store/mainStore";
import MyComponent1 from "./components/MyComponent1.vue";
import MyComponent2 from "./components/MyComponent2.vue";

const mainStore = useMainStore();
</script>

<template>
  <h3>ch06.Pinia 실습</h3>

  <!-- useMainStore의 state 값 가져오기 -->
  <p>mainStore title : {{ mainStore.title }}<br /></p>
  <p>mainStore count : {{ mainStore.count }}<br /></p>

  <p>cities : {{ mainStore.cities }}</p>

  <table border="1">
    <tr>
      <td>아이디</td>
      <td>이름</td>
      <td>나이</td>
    </tr>
    <tr v-for="person in mainStore.persons">
      <!-- for문 이렇게 표현한다! -->
      <td>{{ person.uid }}</td>
      <td>{{ person.name }}</td>
      <td>{{ person.age }}</td>
    </tr>
  </table>

  <MyComponent1 />
  <MyComponent2 />
</template>

<style scoped></style>
