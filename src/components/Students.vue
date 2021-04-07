<template>
  <v-container class="pa-0" fluid>
    <v-sheet
      color="grey lighten-3"
      align="center"
      justify="center"
      class="pa-4"
    >
      <div class="font-weight-bold">Consulta de Alunos</div>
    </v-sheet>
    <v-divider></v-divider>
    <v-row class="pt-4 pr-4 pl-4" no-gutters>
      <v-col cols="7">
        <v-text-field label="Digite sua busca" clearable></v-text-field>
      </v-col>
      <v-col cols="2" align="center">
        <v-btn
          dark
          large
          color="grey lighten-3"
          class="font-weight-bold black--text text-none"
        >
          Pesquisar
        </v-btn>
      </v-col>
      <v-col cols="3" align="right">
        <v-btn dark large color="grey" class="font-weight-bold text-none">
          Cadastrar Aluno
        </v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-data-table
      :headers="headers"
      :items="students"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.ra }}</td>
          <td>{{ row.item.name }}</td>
          <td>{{ row.item.cpf }}</td>
          <td>
            <v-btn icon outlined color="indigo" @click="editStudent(row.item)" class="mr-2">
              <v-icon color="info">mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon outlined color="red" @click="removeStudent(row.item)">
              <v-icon color="danger">mdi-trash-can</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "Students",
  methods: {
    editStudent(item) {
      console.log("click on " + item.ra);
    },
    removeStudent(item) {
      console.log("click on " + item.ra);
    },
  },
  data() {
    return {
      headers: [
        { text: "Registro Acadêmico", value: "ra" },
        { text: "Nome", value: "name" },
        { text: "CPF", value: "cpf" },
        { text: "Ações", value: "actions", sortable: false, width: "12%" },
      ],
      students: [
        {
          ra: "123456",
          name: "Paula Souza",
          cpf: "12345678965",
          glutenfree: true,
        },
        {
          ra: "654321",
          name: "João Silva",
          cpf: "12345678965",
          glutenfree: true,
        },
        {
          ra: "987654",
          name: "Marina Miranda",
          cpf: "12345678965",
          glutenfree: true,
        },
        {
          ra: "789456",
          name: "Mauricio Souza",
          cpf: "12345678965",
          glutenfree: true,
        },
        {
          ra: "159753",
          name: "Mateus Ceara",
          cpf: "12345678965",
          glutenfree: true,
        },
      ],
    };
  },
};
</script>

<style>
  tbody tr:nth-of-type(even) {
    background-color: rgba(236, 237, 237);
  }

  tbody tr:nth-of-type(odd) {
    background-color: rgb(250 ,250, 250);
  }

  .v-data-table-header {
    background-color: rgba(182, 183, 187);
    color: white;
  }

  .v-data-footer {
    background-color: rgb(250 ,250, 250);
  }

  .theme--light.v-data-table thead tr th {
    color: white;
  }
</style>