import React, { useEffect, useRef, useState } from 'react'

import { Input, InputProps } from '../Input'

const InputSearch = ({ onChangeText, value, ...props }: InputProps) => {
	const [text, setText] = useState(value)
	const timeoutID = useRef<NodeJS.Timeout>()

	useEffect(() => {
		timeoutID.current = setTimeout(() => {
			onChangeText?.(text ?? '')
		}, 1000)

		return () => {
			clearTimeout(timeoutID.current)
		}
	}, [onChangeText, text])

	return <Input onChangeText={setText} value={text} iconRight="search" {...props} />
}

export { InputSearch }
