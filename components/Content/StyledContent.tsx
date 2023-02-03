import styled from 'styled-components'

const StyledContent = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
`

export default StyledContent
