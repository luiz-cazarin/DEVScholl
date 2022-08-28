<template>
<q-page class="fit column inline  items-center q-pt-xl q-pb-xl">
  <fetch-student></fetch-student>
  <the-student v-if="theStudent"></the-student>
  <the-list-students v-if="validateList" :students="students"></the-list-students>
  <div class="text-h5 text-grey-5" v-else>Nao tem alunos registrados!</div>
</q-page>
</template>

<script>
import TheListStudents from '../components/TheListStudents.vue'
import TheStudent from '../components/TheStudent.vue'
import FetchStudent from '../components/FetchStudent.vue'

export default {
  components: {
    TheListStudents,
    TheStudent,
    FetchStudent
  },
  data () {
    return {
      idStudent: null,
      theStudent: null,
      students: [
        // { id: 0, name: 'Luiz Claudio' },
        // { id: 0, name: 'Thiago Silva' },
        // { id: 0, name: 'Ana Claudia' }
      ]
    }
  },
  computed: {
    validateList () {
      return this.students.length > 0
    }
  },
  methods: {
    fetchStudent () {
      console.log(this.idStudent)
    }
  }
}
</script>
