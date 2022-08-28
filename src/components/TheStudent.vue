<template>
<div class="q-pa-md" style="min-width: 700px">
      <q-card class="my-card bg-grey-2 text-black">
      <q-card-section>
        <div class="q-pt-lg">
          <div class="text-h5">Aluno: {{student}}</div>
          <div class="text-h6">Media: {{grade}}</div>
          <div class="text-h6">Maior Nota: {{grade}}</div>
          <div class="text-h6">Menor nota: {{grade}}</div>
          <div class="text-h6">Provas realizadas: 0</div>
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-actions class=" q-pt-lg">
        <q-input outlined label="Nota da Prova" type="number" color="dark" class="q-mr-md" style="width: 150px" v-model.number="gradeEntered" />
        <q-btn padding="sm" color="primary" class="q-mr-md" style="width: 230px" @click="setGrade">Cadastra nota da prova</q-btn>
      </q-card-actions>

      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">ERRO!</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Valor invalido! informe um valor entre 0 e 10.
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ['student'],
  data () {
    return {
      tests: [],
      gradeEntered: null,
      grade: 0,
      alert: false
    }
  },
  methods: {
    setGrade () {
      if (this.gradeEntered < 0 || this.gradeEntered > 10 || this.gradeEntered === null) {
        this.alert = true
      } else {
        this.tests.push(this.gradeEntered)
        this.grade = this.gradeEntered
      }
      this.gradeEntered = null
    }
  }
}
</script>
