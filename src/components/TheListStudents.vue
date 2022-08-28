<template>

<div class="q-pa-md" style="width: 700px">
    <q-markup-table dark class="bg-primary">
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Aluno</th>
          <th class="text-right">Media</th>
          <th class="text-right">Maior nota</th>
          <th class="text-right">Menor nota</th>
          <th class="text-right">qtd Provas</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="student in students" :key="student.id">
          <td class="text-left">0</td>
          <td class="text-left">{{student.name}}</td>
          <td class="text-right">0</td>
          <td class="text-right">0</td>
          <td class="text-right">0</td>
          <td class="text-right">0</td>
        </tr>
      </tbody>
    </q-markup-table>

  </div>
</template>

<script>
export default {
  props: ['students']
}
</script>
