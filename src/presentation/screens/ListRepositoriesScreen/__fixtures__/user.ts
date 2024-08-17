const profile = {
	name: 'Robson',
	avatarUrl: 'wwww',
	bio: 'Bio qualquer',
	id: '123',
	login: 'robsonsr',
}

const repositoriesFirstResponse = [
	{
		cursor: 'a1b',
		node: {
			id: '0',
			name: 'spotfy',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '0',
				color: '#E34C26',
				name: 'HTML',
			},
		},
	},
	{
		cursor: 'c2d',
		node: {
			id: '1',
			name: 'gitify',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '1',
				color: '#F7DF1E',
				name: 'JavaScript',
			},
		},
	},
	{
		cursor: 'e3f',
		node: {
			id: '2',
			name: 'weatherly',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '2',
				color: '#007ACC',
				name: 'TypeScript',
			},
		},
	},
	{
		cursor: 'g4h',
		node: {
			id: '3',
			name: 'taskmaster',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '3',
				color: '#3572A5',
				name: 'Python',
			},
		},
	},
	{
		cursor: 'i5j',
		node: {
			id: '4',
			name: 'noteflow',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '4',
				color: '#CC342D',
				name: 'Ruby',
			},
		},
	},
	{
		cursor: 'k6l',
		node: {
			id: '5',
			name: 'devconnect',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '5',
				color: '#563D7C',
				name: 'CSS',
			},
		},
	},
	{
		cursor: 'm7n',
		node: {
			id: '6',
			name: 'vidsnap',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '6',
				color: '#00599C',
				name: 'C++',
			},
		},
	},
	{
		cursor: 'o8p',
		node: {
			id: '7',
			name: 'museapp',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '7',
				color: '#00ADD8',
				name: 'Go',
			},
		},
	},
	{
		cursor: 'q9r',
		node: {
			id: '8',
			name: 'trackify',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '8',
				color: '#DEA584',
				name: 'Rust',
			},
		},
	},
	{
		cursor: 's1t',
		node: {
			id: '9',
			name: 'codehub',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '9',
				color: '#F05138',
				name: 'Swift',
			},
		},
	},
]
const repositoriesSecondResponse = [
	{
		cursor: 'u2v',
		node: {
			id: '10',
			name: 'journey',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '10',
				color: '#A97BFF',
				name: 'Kotlin',
			},
		},
	},
	{
		cursor: 'w3x',
		node: {
			id: '11',
			name: 'mapster',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '11',
				color: '#B07219',
				name: 'Java',
			},
		},
	},
	{
		cursor: 'y4z',
		node: {
			id: '12',
			name: 'mediastream',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '12',
				color: '#4F5D95',
				name: 'PHP',
			},
		},
	},
	{
		cursor: 'a5b',
		node: {
			id: '13',
			name: 'quizcraft',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '13',
				color: '#178600',
				name: 'C#',
			},
		},
	},
	{
		cursor: 'c6d',
		node: {
			id: '14',
			name: 'cloudsync',
			updatedAt: '2024-08-16T21:27:47.080640',
			primaryLanguage: {
				id: '14',
				color: '#00B4AB',
				name: 'Dart',
			},
		},
	},
]

const firstResponse = {
	user: {
		...profile,
		repositories: {
			edges: repositoriesFirstResponse,
			pageInfo: {
				endCursor: 's1t',
				hasNextPage: true,
			},
			totalCount: 15,
		},
	},
}

const secondResponse = {
	user: {
		...profile,
		repositories: {
			edges: repositoriesSecondResponse,
			pageInfo: {
				endCursor: 'c6d',
				hasNextPage: false,
			},
			totalCount: 15,
		},
	},
}

export { firstResponse, secondResponse }
