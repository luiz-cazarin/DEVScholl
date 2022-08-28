<template>
<q-page class="fit column  justify-center items-center content-center">
  <form-register @newStudent="addStudent"></form-register>
  <the-list-students v-if="validateList" :students="students" ></the-list-students>
</q-page>
</template>

<script>
import TheListStudents from 'src/components/TheListStudents.vue'
import FormRegister from '../components/FormRegister.vue'

export default {
  data () {
    return {
      students: []
    }
  },
  components: {
    FormRegister,
    TheListStudents
  },
  computed: {
    validateList () {
      return this.students.length > 0
    }
  },
  methods: {
    addStudent (val) {
      this.students = val
    }
  }
}
</script>
