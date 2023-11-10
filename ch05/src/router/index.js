import { createRouter, createWebHistory } from "vue-router";
import Hello from "../components/sub1/Hello.vue";
import Welcome from "../components/sub1/Welcome.vue";
import Greeting from "../components/sub1/Greeting.vue";
import Parent from "../components/sub2/parent.vue";
import Child1 from "../components/sub2/Child1.vue";
import Child2 from "../components/sub2/Child2.vue";
import Header from "../components/sub3/Header.vue";
import Footer from "../components/sub3/Footer.vue";
import Main1 from "../components/sub3/Main1.vue";
import Main2 from "../components/sub3/Main2.vue";
import Main3 from "../components/sub3/Main3.vue";
import Form1 from "../components/sub4/Form1.vue";
import Form2 from "../components/sub4/Form2.vue";
import FormResult1 from "../components/sub4/FormResult1.vue";
import FormResult2 from "../components/sub4/FormResult2.vue";

// router 인스턴스 생성 / 라우터에서 경로 설정을 하고 프론트에서 link 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/hello", name: "Hello", component: Hello }, //App.vue에서 /hello 이 경로 선택
    { path: "/welcome", name: "Welcome", component: Welcome },
    { path: "/greeting", name: "Greeting", component: Greeting },
    {
      path: "/parent",
      name: "Parent",
      component: Parent,
      children: [
        // 자식들
        { path: "child1", component: Child1 }, // child1 앞에 / 안붙이네
        { path: "child2", component: Child2 },
      ],
    },
    {
      path: "/main1", // /main1 링크 생성하고 클릭하면 main1컴포넌트가 출력되고 name="header"에는 Header가 출력
      components: { default: Main1, header: Header, footer: Footer }, // header, footer 내가 임의로 이름 지정
    },
    {
      path: "/main2",
      components: { default: Main2, header: Header, footer: Footer },
    },
    {
      path: "/main3",
      components: { default: Main3, header: Header, footer: Footer },
    },
    { path: "/form1", name: "Form1", component: Form1 },
    { path: "/form2", name: "Form2", component: Form2 },
    { path: "/formResult1", name: "FormResult1", component: FormResult1 }, // Form1 전송할때 name: FormResult1로 push하지만 path 같은 방식으로 설정해줘야함
    {
      path: "/formResult2/:name/:age/:addr", // 파라미터 수신
      name: "FormResult2",
      component: FormResult2,
    },
  ],
});

// router 인스턴스 내보내기 -> main.js 에서 등록
export default router;
