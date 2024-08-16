import styled from 'styled-components/native'

const Input = styled.TextInput.attrs(({ theme }) => ({
	placeholderTextColor: theme.colors.placeholder,
}))`
	flex: 1;
	color: ${({ theme }) => theme.colors.inputText};
	font-family: ${({ theme }) => theme.fonts.weight.regular};
	font-size: 14px;
	padding: 0px;
	margin: 0px;
	height: 40px;
`

export { Input }
