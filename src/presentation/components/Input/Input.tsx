import React from 'react'
import { useCallback, useState } from 'react'
import { NativeSyntheticEvent, TextInputFocusEventData, TextInputProps } from 'react-native'

import { Box } from '../Box'
import { Icon, IconProps } from '../Icon'
import { Row } from '../Row'
import { Typograph } from '../Typograph'
import * as S from './Input.style'

interface InputProps extends TextInputProps {
	label?: string
	iconRight?: IconProps['name']
}

const Input = ({ label, iconRight, ...textInputProps }: InputProps) => {
	const [isFocused, setIsFocused] = useState(false)

	const onBlur = useCallback(
		(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
			setIsFocused(false)
			textInputProps.onBlur?.(e)
		},
		[textInputProps],
	)

	const onFocus = useCallback(
		(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
			setIsFocused(true)
			textInputProps.onFocus?.(e)
		},
		[textInputProps],
	)

	return (
		<Box>
			{label && <Typograph>{label}</Typograph>}

			<Row
				mt="sp3"
				ph="sp4"
				bg="background"
				radius="small"
				alignItems="center"
				borderWidth={1}
				borderColor={isFocused ? 'borderActive' : 'border'}
			>
				<S.Input {...textInputProps} onBlur={onBlur} onFocus={onFocus} />

				{iconRight && (
					<Box ml="sp3">
						<Icon name="search" color="inputIcon" size="small" />
					</Box>
				)}
			</Row>
		</Box>
	)
}

export type { InputProps }
export { Input }
