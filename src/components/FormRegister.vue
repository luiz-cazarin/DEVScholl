<template>
  <div class="q-pa-md" style="width: 700px">
    <p class="text-h4">Cadastrar aluno</p>
    <q-input
      outlined
      v-model.trim="nameStudent"
      @keyup.enter="addStudent"
      label="Nome do aluno"
    />

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

    <div class="q-mt-md q-mb-md">
      <q-btn
        label="Cadastrar"
        @click="addStudent"
        type="submit"
        color="primary"
      />
      <q-btn
        label="Resetar"
        @click="clearField"
        type="reset"
        color="primary"
        flat
        class="q-ml-sm"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameStudent: "",
      students: [],
      alert: false,
    };
  },
  methods: {
    addStudent() {
      if (this.nameStudent.trim().length < 2) {
        this.alert = true;
      } else {
        this.students.push({
          id: Date.now(),
          name: this.nameStudent,
        });
      }
      this.nameStudent = "";
      this.$emit("newStudent", this.students);
    },
    clearField() {
      this.nameStudent = "";
    },
  },
};
</script>
