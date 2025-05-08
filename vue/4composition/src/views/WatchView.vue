<script setup>
import {reactive, ref, watch, computed} from 'vue'

const books = reactive(['Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 4 - The Mystery'])
const publishedBooksMessage = computed( () => {
  return books.length > 0 ? 'Yes' : 'No'
})



const question = ref('');
const answer = ref('질문에는 일반적으로 물음표가 포함됩니다.')
const src = ref('');
      
    // 질문이 변경될 때마다 이 함수가 실행됩니다
watch(question,async(newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    answer.value = '생각 중...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      const data= await res.json()
      answer.value = data.answer === 'yes' ? '네' : '아니오'
      src.value = data.image
    } catch (error) {
    answer.value = '에러! API에 연결할 수 없습니다.' + error
    }
}
});

</script>
<template>
  <input v-model="question" class="form-control mb-3" style="max-width: 500px;">
  <div>{{answer}}</div>
  <img :src="src"/>
  <hr>
  books: {{ books.length > 0 ? 'yes' : 'no' }}<br>
  books: {{ publishedBooksMessage }}
</template>