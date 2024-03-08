<template>
  <div class="Con" v-if="!isMoer">
    <Wold :text="text">
      <a @click="Moer">详情</a>
    </Wold>

    <!-- <Message></Message> -->
    <button class="btn" @click="openMessage">点击</button>

  </div>

  <div class="Con" v-if="isMoer">
    {{ text }}
  </div>
</template>
<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import Wold from "./components/Wold.vue";
import { message } from "./components/Message/index";
import { ref, onMounted } from "vue";

const isMoer = ref(false)
const text = ref("荷塘的四面，远远近近，高高低低都是树，而杨柳最多。这些树将一片荷塘重重围住;只在小路一旁，漏着几段空隙，像是特为月光留下的。树色一例是阴阴的，乍看像一团烟雾;但杨柳的丰姿，便在烟雾里也辨得出。树梢上隐隐约约的是一带远山，只有些大意罢了。树缝里也漏着一两点路灯光，没精打采的，是渴睡人的眼。这时候最热闹的，要数树上的蝉声与水里的蛙声;但热闹是它们的，我什么也没有");

// const text = ref('Life is too short to spend time with people who suck the happiness out of you. If someone wants you in their life, they’ll make room for you. You shouldn’t have to fight for a spot. Never, ever insist yourself to someone who continuously overlooks your worth. And remember, it’s not the people that stand by your side when you’re at your best, but the ones who stand beside you when you’re at your worst that are your true friends.')

// const addText = () => {
//   text.value = "荷塘的四面，远远近近，高高低低都是树，而杨柳最多。这些树将一片荷塘重重围住;只在小路一旁，漏着几段空隙，像是特为月光留下的。树色一例是阴阴的，乍看像一团烟雾;但杨柳的丰姿，便在烟雾里也辨得出。树梢上隐隐约约的是一带远山，只有些大意罢了。树缝里也漏着一两点路灯光，没精打采的，是渴睡人的眼。这时候最热闹的，要数树上的蝉声与水里的蛙声;但热闹是它们的，我什么也没有";
// }
const openMessage = () => {
  message({
    title: "标题",
    content: "内容，内容，内容，内容，内容，内容，内容！",
    onOk: () => {
      console.log("ok");
    },
    onCancel: () => {
      console.log("cancel");
    },
  })
}

const Moer = () => {
  isMoer.value = true
}

onMounted(() => {
  // addText();

});
</script>

<style scoped>
.Con {
  width: 300px;
  height: 200px;
}
</style>
