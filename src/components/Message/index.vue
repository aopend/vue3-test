<!-- Msg -->
<template>
    <div class="Msg" :style="{ top: `${props.seed * 90 + 20}px` }">
        <div>{{ props.title }}</div>
        <div>{{ props.content }}</div>
    </div>
</template>
<script lang="ts" setup name="Msg">
import { onMounted } from "vue";
import type { Option } from "./index";


const props = defineProps<Option>()
onMounted(() => {
    console.log(props)
})
</script>
<style lang="scss" scoped>
.Msg {
    position: fixed;
    top: 20px;
    right: 20px;

    width: 300px;
    height: 80px;
    border: 1px solid #f00;
    padding: 8px;
    border-radius: 8px;
    box-sizing: border-box;
    * {
        box-sizing: border-box;
    }
}
</style>