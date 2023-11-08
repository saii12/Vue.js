<script>
import EmitComponent1 from "./components/EmitComponent1.vue";
import LifeComponent from "./components/LifeComponent.vue";
import MyComponent1 from "./components/MyComponent1.vue";
import MyComponent2 from "./components/MyComponent2.vue";
import MyComponent3 from "./components/MyComponent3.vue";
import OptionComponent1 from "./components/OptionComponent1.vue";
import OptionComponent2 from "./components/OptionComponent2.vue";
import OptionComponent3 from "./components/OptionComponent3.vue";
import OptionComponent4 from "./components/OptionComponent4.vue";
import PropsComponent1 from "./components/PropsComponent1.vue";
import PropsComponent2 from "./components/PropsComponent2.vue";
import PropsComponent3 from "./components/PropsComponent3.vue";

export default {
  name: "App",
  data() {
    return {
      cities: ["서울", "대전", "대구", "부산", "광주"],
      isShow: true,
    };
  },
  methods: {
    emitHandler: function (data) {
      // emitData 여기로 들어옴
      //alert("emitHandler!");
      console.log(data.name);
      console.log(data.age);
    },
    btnToggle: function () {
      if (this.isShow) {
        //  true인 상태에서 메서드가 실행되니까 false로
        this.isShow = false;
      } else {
        //  화면이 안 뜨는 false인 상태에서 메서드가 실행되니까 true로
        this.isShow = true;
      }
    },
  },
  components: {
    // script 태그안에 setup 빠지면 이렇게 일일히 component 써줘야함
    MyComponent1,
    MyComponent2,
    MyComponent3,
    OptionComponent1,
    OptionComponent2,
    OptionComponent3,
    OptionComponent4,
    PropsComponent1,
    PropsComponent2,
    PropsComponent3,
    EmitComponent1,
    LifeComponent,
    LifeComponent,
  },
};
</script>

<template>
  <h3>ch03.컴포넌트</h3>

  <h4>1)컴포넌트</h4>
  <MyComponent1 />
  <!-- MyComponent1의 template이 들어옴-->
  <MyComponent2 />
  <MyComponent3 />

  <h4>2)Options API</h4>
  <OptionComponent1 />
  <OptionComponent2 />
  <OptionComponent3 />
  <OptionComponent4 />
  <!-- / 붙여줘야함-->

  <h4>3)컴포넌트 통신</h4>
  <PropsComponent1 name="김유신" />
  <PropsComponent1 name="김춘추" age="21" />

  <ul>
    <PropsComponent2 v-for="city in cities" :mycity="city" />
    <!-- PropsComponent2의 mycity 속성에 city변수 바인딩-->
    <!-- :은 v-bind 생략-->
  </ul>

  <PropsComponent3 c3Name="홍길동" c3Age="12" />
  <EmitComponent1 name="홍길동" age="12" v-on:myEmit="emitHandler" />
  <!-- EmitComponent1의 myEmit 이벤트 발생으로 emitHandler 메서드실행-->

  <h4>4)컴포넌트 생명주기</h4>
  <LifeComponent v-if="isShow" />
  <!-- true false 값에 따라 화면에 표시하거나 안한다-->
  <button @click="btnToggle">토글</button>
</template>

<style scoped></style>
