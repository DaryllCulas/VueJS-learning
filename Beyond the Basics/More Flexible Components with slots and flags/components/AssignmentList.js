import AssignmentListItem from "./AssignmentListItem.js";
import AssignmentTags from "./AssignmentTags.js";


export default {
    components: { AssignmentListItem, AssignmentTags},
    template: `
      <section v-show="assignments.length" class="w-70">
      <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
             </h2>
             <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
      </div>
            

          <AssignmentTags v-model:currentTag = "currentTag" :initial-tags="assignments.map(a => a.tag)"
           />
    
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
             <AssignmentListItem 
                v-for="assignment in filteredAssignments" 
                v-bind:key="assignment.id"
                v-bind:assignment="assignment"
                ></AssignmentListItem>
            </ul>
            <slot></slot>
          </section>
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }    
    },
    data() {
        return {
            currentTag: 'all',
        };
    },
    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
       
    }
}