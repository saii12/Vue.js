<script setup>
/*export default { 위에서 setup으로, 이 코드 생략
    setup(){

        return{
            
        }
    },
};*/
import { provide } from "vue";
import Component4 from "./Component4.vue";

const user2 = {
  name: "홍길동",
  age: 23,
  addr: "부산",
};

provide("user2", user2); // 하위 컴포넌트로 데이터 전달을 위한 선언
</script>
<template>
  <h4>Component3</h4>
  <Component4 />
</template>
<style scoped></style>
