<template>
  <v-container class="pa-0" fluid>
    <v-sheet
      color="grey lighten-3"
      align="center"
      justify="center"
      class="pa-4"
    >
      <div class="font-weight-bold">Cadastro de Aluno</div>
    </v-sheet>
    <v-divider></v-divider>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-subheader class="grey lighten-3 font-weight-bold"
              >Nome</v-subheader
            >
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Infome o nome completo"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-subheader class="grey lighten-3 font-weight-bold"
              >E-mail</v-subheader
            >
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Informe apenas um e-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-subheader class="grey lighten-3 font-weight-bold"
              >RA</v-subheader
            >
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Informe o registro acadêmico"
              max-length="20"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-subheader class="grey lighten-3 font-weight-bold"
              >CPF</v-subheader
            >
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Informe o número do documento"
              required
              min-length="11"
              max-length="14"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

        <v-btn large color="grey lighten-3" class="font-weight-bold text-none" to="/">
          Cancelar
        </v-btn>
        <v-btn large color="grey" class="font-weight-bold text-none white--text" @click="createStudent()">
          Salvar
        </v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
export default {
  name: "StudentsCreate",
  methods: {
    createStudent() {
      console.log('Criar novo estudante');
    },
  },  
};
</script>
<style>
.theme--light.v-subheader {
  justify-content: flex-end;
}
</style>