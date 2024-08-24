import Assignments from "./Assignments.js"
import Panel from "./Panel.js"


export default {
    components: { Assignments, Panel },
    template: `
        <div class= "grid gap-6">
            <Assignments></Assignments>

            <Panel>
                <template v-slot:default>
                    This is my Default Slot
                </template> 
            </Panel>

            <Panel>
                <template v-slot:header>
                    This is my header Slot
                </template> 
            </Panel>

            <Panel theme="light">
                Hello this is footer-slot content
                <template v-slot:footer>
                    This is my footer Slot
                </template> 
            </Panel>
        </div>
    `,
 
}