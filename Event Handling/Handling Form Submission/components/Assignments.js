import AssignmentList from './AssignmentList.js'

export default {
  components: { AssignmentList },
  template: `
    <section class="space-y-5">
        <AssignmentList v-bind:assignments="filters.inProgress" title="In progress"/>
        <AssignmentList v-bind:assignments="filters.completed" title="Completed"/>

    <form @submit.prevent="add">
    <div class="border border-gray-600 text-black">
      <input v-model="newAssignment" placeholder="New Assignment..." class="p-2" />
      <button type="submit" class="bg-white p-2 border-l">Add</button>
      </div>
    </form>
    </section>
   
   
    `,
  data () {
    return {
      assignments: [
        { name: 'Finish project', completed: false, id: 1 },
        { name: 'Read Chapter 1', completed: false, id: 2 },
        { name: 'Playing Dota', completed: false, id: 3 }
      ],
      newAssignment: ''
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
    add () {
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.assignments.length + 1
      })
      this.newAssignment = ''
    }
  }
}
