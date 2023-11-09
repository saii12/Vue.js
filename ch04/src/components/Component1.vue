<template>
  <h4>Component1</h4>
  <p>
    count1 : {{ count1 }}
    <button @click="addCount1">증가</button>
  </p>

  <p>
    count2 : {{ count2 }}
    <button @click="addCount2">증가</button>
  </p>

  <p>
    message1 : {{ message1 }}<br />
    <button @click="changeMessage">수정</button>
  </p>

  <p>
    message2 : {{ message2 }}<br />
    <button @click="changeMessage">수정</button>
  </p>

  <p>
    user1 : {{ user1.name }} / {{ user1.age }} / {{ user1.addr }} /
    <button @click="changeUser1">수정</button>
  </p>

  <p>
    user2 : {{ user2.name }} / {{ user2.age }} / {{ user2.addr }} /
    <button @click="changeUser2">수정</button>
  </p>

  <p>
    myValue : {{ myValue }} / myValue2x : {{ myValue2x }}
    <button @click="addMyValue">증가</button>
  </p>
</template>

<script>
import { reactive, ref, computed, watch } from "vue"; // 내가 쓰는 API를 import해줘야함

export default {
  name: "Component1",

  /*
    setup()
    - Composition API를 서술하기 위한 API
    - 기존 Option API data(), methods, computed 통합

    ref
    - 기본형 변수에 반응성을 부여하는 Composition API
    reactive
    - 참조형 변수(객체)에 반응성을 부여하는 Composition API
  */
  setup() {
    // 상태값 선언(반응성 X)
    let message1 = "Hello"; // message2랑 다르게 반응 안해서 버튼 눌려도 값 그대로
    let count1 = 0;
    let user1 = {
      name: "김유신",
      age: 23,
      addr: "부산",
    };

    // 상태값 선언(반응성 O) / 변수에는 ref 쓰고 객체에는 reactive씀
    const count2 = ref(0); // ref쓰고 그냥 ()안에 값 넣는 거네, let이나 const나 다 됨
    let message2 = ref("Hello");
    let user2 = reactive({
      name: "김춘추",
      age: 21,
      addr: "부산",
    });

    const myValue = ref(10);

    // computed : 상태값을 자동으로 계산해서 반환
    const myValue2x = computed(() => {
      return myValue.value * 2;
    });

    // watch : 상태값을 감지해서 콜백함수 실행
    watch(myValue, (current, prev) => {
      // current는 현재값, prev는 이전값 나타냄
      console.log(`이전값, 현재값 : ${prev}, ${current}`); // 백틱
    });

    const addCount1 = function () {
      count1++;
    };

    const addCount2 = function () {
      count2.value++; // ref이용할때는 .value로 쓰는건가? ㅇㅇ 맞는듯
    };

    const changeMessage = function () {
      message1 = "Welcome";
      message2.value = "welcome";
    };

    const changeUser1 = () => {
      //alert("user!!!");
      user1.age++;
      user1.addr = "김해"; // changeUser2 눌렀을 때 얘도 실행되는 건 버그라고 보면 됨
    };

    const changeUser2 = () => {
      user2.age++;
      user2.addr = "경주"; // 반응성은 즉각 반응하여 페이지에 표시
    };

    const addMyValue = () => {
      myValue.value++;
    };

    return {
      count1,
      count2,
      message1,
      message2,
      user1,
      user2,
      myValue,
      myValue2x,
      addCount1,
      addCount2,
      changeMessage, //메서드도 리턴
      changeUser1,
      changeUser2,
      addMyValue,
    };
  },
};
</script>
<style scoped></style>
