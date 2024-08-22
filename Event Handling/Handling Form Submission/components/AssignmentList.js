import AssignmentListItem from "./AssignmentListItem.js";

export default {
    components: { AssignmentListItem },
    template: `
      <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
    
            <ul>
             <AssignmentListItem 
                v-for="assignment in assignments" 
                v-bind:key="assignment.id"
                v-bind:assignment="assignment"
                ></AssignmentListItem>
            </ul>
          </section>
    `,
    props: {
        assignments: Array,
        title: String    
    }
}