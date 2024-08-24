import AssignmentList from './AssignmentList.js'
import AssignmentCreate from './AssignmentCreate.js'

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
    <section class="space-y-5">
        <AssignmentList v-bind:assignments="filters.inProgress" title="In progress"/>
        <AssignmentList v-bind:assignments="filters.completed" title="Completed"/>
        <AssignmentCreate v-on:add="add"></AssignmentCreate>
 
    </section>
   
   
    `,
  data () {
    return {
      assignments: [],
     
    }
  },
  computed: {
    filters () {
      return {
        inProgress: this.assignments.filter(
          assignments => !assignments.complete
        ),
        completed: this.assignments.filter(assignments => assignments.complete)
      }
    }
  },  
  created() {
    fetch('http://localhost:3001/assignments')
    .then(response => response.json())
    .then(fetchAssignmentData => {
      this.assignments = fetchAssignmentData;
    });
  },

  methods: {
    add (name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1
      })
     
    }
  }
}
