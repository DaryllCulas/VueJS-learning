import AssignmentList from './AssignmentList.js'
import AssignmentCreate from './AssignmentCreate.js'

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
    <section class="flex gap-8">
        <AssignmentList v-bind:assignments="filters.inProgress" title="In progress">
        <AssignmentCreate v-on:add="add"></AssignmentCreate>
        </AssignmentList>

        <div v-show="showCompleted">
            <AssignmentList
              v-bind:assignments="filters.completed" 
              title="Completed" canToggle
              v-on:toggle="showCompleted = !showCompleted"
            ></AssignmentList>
        </div>
 
    </section>
    `,
  data () {
    return {
      assignments: [],
      showCompleted: true
     
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
