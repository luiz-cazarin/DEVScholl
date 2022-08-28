<template>
<div class="q-pa-md" style="width: 700px">
    <q-card class="my-card bg-grey-2 text-black">
      <q-card-section class="fit row  justify-center">
        <div class="q-pt-xl q-pb-xl">
          <div class="text-h4 q-pa-md">Maior nota registrada</div>
          <div class="text-h3 fit row  justify-center">{{gradeStudent}}</div>
        </div>
      </q-card-section>
    </q-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      gradeStudent: 9.2
    }
  },
  methods: {
    setGrade () {
      this.gradeStudent = null
    }
  }
}
</script>
