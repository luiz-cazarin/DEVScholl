<template>
  <q-layout view="lhh lpr lfr" class="bg-grey-2">
    <q-header elevated class="bg-grey-2 text-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="text-h5 text-weight-medium">
          DEVSchool
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/register" label="Cadastrar aluno" />
        <q-route-tab to="/list" label="Lista de alunos" />
        <q-route-tab to="/highestgrade" label="Maior nota" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
