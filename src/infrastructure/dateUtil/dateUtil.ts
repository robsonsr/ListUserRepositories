import { dateFNSAdapter } from './dateFnsAdapter'

enum Patterns {
	dMMMyyyy = 'd MMM yyyy',
}

interface DateUtil {
	format: (date: Date | string | number, pattern: Patterns) => string
}

const dateUtil: DateUtil = dateFNSAdapter

export type { DateUtil }
export { dateUtil, Patterns }
