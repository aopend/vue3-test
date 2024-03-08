<!-- Wold -->
<template>
    <div class="Wold" ref="WoldContainer">
        <p ref="WoldP" class="WoldP">
            {{ showText }}
            <span v-if="isMoer">
                <slot></slot>
            </span>
        </p>
    </div>
</template>
<script lang="ts" setup name="Wold">
import { ref, toRefs, onMounted, nextTick, watch } from "vue";



const WoldContainer = ref<HTMLElement>();
const WoldP = ref<HTMLElement>();

const showText = ref('');
let index = 0;

const isMoer = ref(false)

interface WoldProps {
    // props
    text: string;

}

const props = defineProps<WoldProps>()
const { text } = toRefs(props)

watch(text, () => {
    index = 0;
    computeShowText();
})

const computeNum = (str) => {
    var length = 0;
    for (var i = 0; i < str.length; i++) {
        length += (str.charCodeAt(i) > 255) ? 2 : 1;
    }
    return length;
}
const computeShowText = () => {
    index++;
    let w = text.value;
    let s = w.slice(0, index);
    showText.value = s;
    if (s.length < w.length) {
        nextTick(() => {
            let Ch = WoldContainer.value && WoldContainer.value.offsetHeight || 50;
            let Ph = WoldP.value && WoldP.value.offsetHeight || 50;

            if (Ch > Ph) {
                computeShowText();
            } else {
                let num = 4;
                let zc = s.slice(s.length - num, s.length);
                let jq = computeNum(zc);
                let jqNum = jq < 8 ? 9 : 5;
                let z = text.value.slice(0, index - jqNum);
                showText.value = `${z}...`;
                isMoer.value = true;
            }
        })
    }


}


onMounted(() => {
    computeShowText()
});

</script>
<style lang="scss" scoped>
.Wold {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .WoldP {
        padding: 0;
        margin: 0;
    }
}
</style>