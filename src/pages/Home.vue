<template>
<div>
  <q-page class="fit column inline  items-center q-pt-xl q-pb-xl">
    <form-register @newStudent="addStudent"></form-register>

    <fetch-student @fetchStudent="getStudent"></fetch-student>

    <the-student v-if="theStudent" :student="theStudent"></the-student>
    <highest-grade></highest-grade>

    <div v-if="validadeList">
      <div class="q-pa-md" style="width: 700px"><p class="text-h4">Lista de Alunos</p></div>
      <the-list-students :students="students"></the-list-students>
    </div>
  </q-page>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import FormRegister from 'src/components/FormRegister.vue'
import FetchStudent from 'src/components/FetchStudent.vue'
import TheListStudents from 'src/components/TheListStudents.vue'
import TheStudent from 'src/components/TheStudent.vue'
import HighestGrade from 'src/components/HighestGrade.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    FormRegister, FetchStudent, TheListStudents, TheStudent, HighestGrade
  },
  data () {
    return {
      students: [],
      theStudent: null
    }
  },
  computed: {
    validadeList () {
      return this.students.length > 0
    }
  },
  methods: {
    addStudent (val) {
      this.students = val
      console.log(val)
    },
    getStudent (val) {
      this.theStudent = val
      console.log(val)
    }
  }
})
</script>
