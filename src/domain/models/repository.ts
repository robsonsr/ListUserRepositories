interface Repository {
	id: string
	name: string
	description?: string
	updatedAt: string
	primaryLanguage: {
		id: string
		name: string
		color: string
	}
}

export type { Repository }
