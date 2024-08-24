import AssignmentListItem from "./AssignmentListItem.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";


export default {
    components: { AssignmentListItem, AssignmentTags, Panel},
    template: `
      <Panel v-show="assignments.length" class="w-70" id="myPanel">
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

            <template v-slot:footer>
                This is footer
            </template>
          </Panel>
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