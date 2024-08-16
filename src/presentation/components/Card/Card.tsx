import React from 'react'
import { Pressable, PressableProps } from '../Pressable'

interface CardProps extends PressableProps {}

const Card = (props: PressableProps) => {
	return <Pressable borderColor="border" borderWidth={1} radius="small" bg="background" p="sp4" {...props} />
}

export { Card }
export type { CardProps }
