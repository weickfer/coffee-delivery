import {
  ReactNode,
  SelectHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'
import { SelectContainer } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode
}

const SelectRaw: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { children, ...rest },
  ref,
) => {
  return (
    <SelectContainer id={rest.id}>
      <select ref={ref} {...rest}>
        {children}
      </select>
    </SelectContainer>
  )
}

export const Select = forwardRef(SelectRaw)
