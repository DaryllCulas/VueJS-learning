import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    template: `
    <section class="space-y-6">
        <AssignmentList v-bind:assignments="filters.inProgress" title="In progress"/>
        <AssignmentList v-bind:assignments="filters.completed" title="Completed"/>
    </section>
   
    `,
    data() {
        return {
          assignments: [
            { name: "Finish project", completed: false, id: 1 },
            { name: "Read Chapter 1", completed: false, id: 2 },
            { name: "Dota", completed: false, id: 3 },
          ],
        };
      },
      computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(
                    (assignments) => !assignments.complete
                  ),
                completed: this.assignments.filter(
                    (assignments) => assignments.complete
                  ),
            }
        }
      },
}