import React from 'react'

import { Box, BoxProps } from '@components'

const Divider = (props: BoxProps) => {
	return <Box height={1} bg="line" {...props} />
}

export { Divider }
