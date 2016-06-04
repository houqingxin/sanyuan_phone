
<script>

import status from './status.vue'

import diagram from './equipmentCabinet/cDiagram.vue'
import equiIndex from './equipmentCabinet/index.vue'

import InstabusEIB from './InstabusEIB/index.vue'

import machineRoom from './machineRoom/index.vue'
import equipmentCabinet from './equipmentCabinet/cDiagram.vue'
import portfigure from './equipmentCabinet/portfigure.vue'
export default {
	getComp () {
		
		return {
			status,
			diagram,
			equiIndex,
			InstabusEIB,
			machineRoom,
			equipmentCabinet,
			portfigure

		}
	}
}
</script>