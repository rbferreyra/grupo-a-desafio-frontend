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
          <v-col cols="12">
            <v-list v-if="hasError">
              <v-list-item
                v-for="(error, index) in errors"
                :key="index"
                class="pa-0"
              >
                <v-alert dense text type="error" width="100%">
                  {{ error[0] }}
                </v-alert>
              </v-list-item>
            </v-list>
            <v-alert v-if="hasSuccess" dense text type="success" width="100%">
              Aluno cadastrado com sucesso!
            </v-alert>
          </v-col>
          <v-col cols="2">
            <v-subheader class="grey lighten-3 font-weight-bold"
              >Nome*</v-subheader
            >
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Infome o nome completo"
              required
              v-model="student.name"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-subheader class="grey lighten-3 font-weight-bold"
              >E-mail*</v-subheader
            >
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Informe apenas um e-mail"
              required
              v-model="student.email"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-subheader class="grey lighten-3 font-weight-bold"
              >RA*</v-subheader
            >
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Informe o registro acadêmico"
              max-length="20"
              v-model="student.ra"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-subheader class="grey lighten-3 font-weight-bold"
              >CPF*</v-subheader
            >
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Informe o número do documento"
              required
              min-length="11"
              max-length="14"
              v-model="student.cpf"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        large
        color="grey lighten-3"
        class="font-weight-bold text-none"
        to="/"
      >
        Cancelar
      </v-btn>
      <v-btn
        large
        color="grey"
        class="font-weight-bold text-none white--text"
        @click="createStudent"
      >
        Salvar
      </v-btn>
    </v-card-actions>
    <v-dialog v-model="loading" fullscreen full-width>
      <v-container
        fluid
        fill-height
        style="background-color: rgba(255, 255, 255, 0.5)"
      >
        <v-layout justify-center align-center>
          <v-progress-circular indeterminate color="primary">
          </v-progress-circular>
        </v-layout>
      </v-container>
    </v-dialog>
  </v-container>
</template>

<script>
import StudentsService from "@/services/StudentsService";

export default {
  name: "StudentsCreate",
  methods: {
    createStudent: async function () {
      this.loading = true;
      await StudentsService.createStudent(this.student)
        .then(() => {
          this.hasError = false;
          this.hasSuccess = true;
          this.loading = false;
        })
        .catch((error) => {
          this.hasError = true;
          this.hasSuccess = false;
          this.errors = error.response.data.errors;
          this.loading = false;

          window.scrollTo(0, 0);
        });
    },
  },
  data() {
    return {
      loading: false,
      hasError: false,
      hasSuccess: false,
      errors: [],
      student: {
        name: "",
        email: "",
        cpf: "",
        ra: "",
      },
    };
  },
};
</script>
<style>
.theme--light.v-subheader {
  justify-content: flex-end;
}
</style>