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
      assignments: [
        { name: 'Finish project', completed: false, id: 1, tag: 'science' },
        { name: 'Read Chapter 1', completed: false, id: 2, tag: 'math' },
        { name: 'Playing Dota', completed: false, id: 3, tag: 'science' }
      ],
     
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
