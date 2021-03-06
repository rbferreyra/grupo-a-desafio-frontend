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
      <v-col cols="9">
        <v-text-field
          v-model="search"
          label="Digite sua busca"
          append-icon="mdi-account-search"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="3" align="right">
        <v-btn
          dark
          large
          color="grey"
          class="font-weight-bold text-none"
          to="/students/create"
        >
          Cadastrar Aluno
        </v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-data-table
      :options.sync="options"
      :server-items-length="pagination.total"
      :items-per-page="pagination.perPage"
      :page="pagination.page"
      :footer-props="{
        'items-per-page-options': [],
      }"
      :headers="headers"
      :items="students"
      :search="search"
      :loading="loading"
      loading-text="Carregando..."
      class="elevation-1"
    >
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.ra }}</td>
          <td>{{ row.item.name }}</td>
          <td>{{ row.item.cpf }}</td>
          <td>
            <v-btn
              icon
              outlined
              color="indigo"
              class="mr-2"
              :to="{ name: 'StudentsUpdate', params: { uiid: row.item.uiid } }"
            >
              <v-icon color="info">mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              icon
              outlined
              color="red"
              @click="openDialogRemoveStudent(row.item)"
            >
              <v-icon color="danger">mdi-trash-can</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>

    <v-dialog
      v-model="isDialogRemoveStudentOpened"
      max-width="600px"
      persistent
    >
      <v-card>
        <v-card-title class="headline justify-center">
          Tem certeza que deseja remover este aluno?
        </v-card-title>
        <v-card class="d-flex justify-center pa-2" outlined tile>
          {{ student.name }}
        </v-card>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue" text @click="closeDialogRemoveStudent"
            >Cancelar</v-btn
          >
          ou
          <v-btn color="red" class="white--text" @click="removeStudent"
            >Confirmar</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import StudentsService from "@/services/StudentsService";

export default {
  name: "Students",
  watch: {
    options: {
      handler() {
        this.getStudents();
      },
    },
    deep: true,
  },
  methods: {
    getStudents: async function () {
      this.loading = true;
      const { page } = this.options;

      await StudentsService.getStudents(page).then((response) => {
        this.loading = false;
        this.students = response.data.data;

        this.pagination.total = response.data.pagination.total;
        this.pagination.perPage = response.data.pagination.perPage;
        this.pagination.currentPage = response.data.pagination.currentPage;
      });
    },
    openDialogRemoveStudent(student) {
      this.student = student;
      this.isDialogRemoveStudentOpened = true;
    },
    closeDialogRemoveStudent() {
      this.isDialogRemoveStudentOpened = false;
    },
    removeStudent: async function () {
      await StudentsService.removeStudent(this.student.uiid).then(() => {
        this.isDialogRemoveStudentOpened = false;
        this.getStudents();
      });
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
      options: {},
      pagination: {
        currentPage: 1,
        perPage: 20,
        total: 0,
        totalPages: 0,
      },
      loading: true,
      search: "",
      students: [],
      student: {
        name: "",
        email: "",
        cpf: "",
        ra: "",
      },
      isDialogRemoveStudentOpened: false,
    };
  },
};
</script>

<style>
tbody tr:nth-of-type(even) {
  background-color: rgba(236, 237, 237);
}

tbody tr:nth-of-type(odd) {
  background-color: rgb(250, 250, 250);
}

.v-data-table-header {
  background-color: rgba(182, 183, 187);
  color: white;
}

.v-data-footer {
  background-color: rgb(250, 250, 250);
}

.theme--light.v-data-table thead tr th {
  color: white;
}

.theme--light.v-data-table .v-data-footer {
  height: 50px;
  font-size: 14px;
}
</style>