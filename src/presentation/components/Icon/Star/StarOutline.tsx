import React, { memo } from 'react'
import Svg, { Path } from 'react-native-svg'

import { BaseProps } from '../Icon'

const StarOutline = memo(({ size, color }: BaseProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24">
		<Path
			fill={color}
			d="m16.399 15.02 4.413-4.284-6.086-.895L12 4.331l-2.726 5.51-6.086.895L7.6 15.019l-1.053 6.072L12 18.221l5.438 2.87-1.039-6.072ZM24 9.87c0 .212-.125.443-.375.693l-5.236 5.105 1.24 7.212c.01.067.015.163.015.288 0 .481-.197.721-.591.721-.183 0-.375-.057-.577-.173L12 20.312l-6.476 3.404c-.212.116-.404.173-.577.173-.202 0-.353-.07-.454-.209a.85.85 0 0 1-.152-.512c0-.057.01-.154.03-.288l1.24-7.212-5.25-5.105C.12 10.303 0 10.072 0 9.87c0-.356.27-.577.808-.663l7.24-1.053 3.245-6.563C11.476 1.197 11.711 1 12 1s.524.197.707.591l3.245 6.563 7.24 1.053c.539.086.808.307.808.663Z"
		/>
	</Svg>
))

export { StarOutline }
