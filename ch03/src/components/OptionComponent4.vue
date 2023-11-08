<script>
export default {
  name: "OptionComponent4",
  //watch은 특정 상태를 감시하고, 상태가 변경될 때마다 특정 동작을 수행
  watch: {
    inputTxt: function () {
      const pos = this.inputTxt.indexOf(this.forbiddenTxt); // indexOf로 특정 문자열의 첫번째 위치 반환, 없으면 -1
      console.log(pos);
      if (pos >= 0) {
        alert(this.forbiddenTxt + "입력 불가");
        this.inputTxt = this.inputTxt.substring(0, pos); // 0번부터 pos값 직전까지 출력(바보는 출력 안됨)
      }
    },
  },
  data() {
    return {
      forbiddenTxt: "바보",
      inputTxt: "",
    };
  },
};
</script>
<template>
  <h4>watch 옵션</h4>
  <div>
    <p>금지어 발견 : {{ forbiddenTxt }}</p>
    <textarea v-model="inputTxt" cols="30" rows="10"></textarea>
  </div>
</template>
<style scoped></style>
