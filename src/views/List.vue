<template>
  <div>
    <div class="d-flex justify-content-center" v-for="task in tasks" :key="task.id">
      <div class="col-6 mt-2">
        <b-card :title="task.subject">
          <b-card-text>
            {{ task.description }}
          </b-card-text>
          <b-button variant="info" class="mr-2" @click="updateTask(task.id)">Editar</b-button>
          <b-button variant="danger" class="mr-2" @click="deleteTask(task)">Excluir</b-button>
        </b-card>
      </div>
    </div>

    <b-modal ref="modalRemove" hide-footer title="Exclusão de tarefa">
      <div class="d-block text-center">
        Deseja realmente excluir a tarefa: {{ taskSelected.subject }}?
      </div>
      <div class="mt-3 d-flex justify-content-end">
        <b-button variant="ligth" @click="hideModal">Cancelar</b-button>
        <b-button class="ml-2" variant="danger" @click="confirmRemoveTask">Excluir</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { db } from '../firebaseDb'
import Vue from 'vue'

export default {
  name: 'List',
  data() {
    return {
      tasks: [],
      taskSelected: ''
    }
  },
  created(){
    this.getTasks();
  },
  methods: {
    getTasks(){
      this.tasks = [];
      db.collection('tasks').get().then(snapshot => {
        snapshot.forEach(doc => {
          let objectTask = {};
          objectTask = doc.data();
          objectTask.id = doc.id;
          console.log(this.tasks)
          this.tasks.push(objectTask);
        })
      }).catch(error => {
        console.log(error);
      })
    },
    updateTask(idTask){
      this.$router.push({ name: 'form', params: { id: idTask }})
    },
    deleteTask(task){
      this.taskSelected = task;
      this.$refs.modalRemove.show();
    },
    hideModal(){
      this.$refs.modalRemove.hide();
    },
    async confirmRemoveTask(){
      await db.collection('tasks').doc(this.taskSelected.id).delete();
      this.taskSelected = '';
      this.hideModal();
      this.getTasks();
      this.makeToast();
    },
    makeToast(){
        const vm = new Vue();
        vm.$bvToast.toast(`Tarefa excluída com sucesso`, {
          title: 'Sucesso',
          autoHideDelay: 5000,
          variant: 'success'
        })
      }
  }
}
</script>
