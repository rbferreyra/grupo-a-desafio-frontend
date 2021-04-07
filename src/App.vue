<template>
  <v-app>
    <v-system-bar height="80" color="white" app>
      <v-img
        alt="Grupo A - Educação"
        class="shrink mr-2"
        contain
        src="./assets/logo.png"
        transition="scale-transition"
        width="120"
      />
    </v-system-bar>

    <v-navigation-drawer app>
      <v-sheet color="grey" class="pa-4" align="center" justify="center">
        <div class="font-weight-bold white--text">Módulo Acadêmico</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-face</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Alunos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
  },
};
</script>
