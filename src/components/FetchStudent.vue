<template>
  <div class="q-pa-md" style="width: 700px">

      <p class="text-h4">Buscar Aluno</p>
      <div class="q-pt-md">
        <q-input outlined type="text" v-model="nameStudent" @keyup.enter="fetchStudent" label="Nome do aluno" />
        <!-- <q-input outlined type="number" v-model.number="idStudent" @keyup.enter="fetchStudent" label="ID do aluno" /> -->

        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">ERRO!</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Nome Invalido! informe um nome valido.
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>

      <div class="q-pt-md q-pb-md">
        <q-btn label="Buscar"  @click="fetchStudent" type="submit" color="primary"/>
        <q-btn label="Resetar" @click="clearField" type="reset" color="primary" flat class="q-ml-sm" />
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      idStudent: null,
      nameStudent: '',
      alert: false
    }
  },
  methods: {
    fetchStudent () {
      if (this.nameStudent.trim().length < 1) {
        this.alert = true
      } else {
        this.$emit('fetchStudent', this.nameStudent)
      }
      this.nameStudent = ''
    },
    clearField () {
      this.nameStudent = ''
    }
  }
}
</script>
