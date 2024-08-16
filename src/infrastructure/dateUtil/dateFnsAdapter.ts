import dateFNS from 'date-fns'
import { DateUtil } from './dateUtil'

const dateFNSAdapter: DateUtil = {
	format: (date, pattern) => {
		return dateFNS.format(date, pattern)
	},
}

export { dateFNSAdapter }
