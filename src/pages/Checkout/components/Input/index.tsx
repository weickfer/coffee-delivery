import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
} from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // hasOptional?: boolean
  children?: ReactNode
  error?: string
}

const InputRaw: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { children, error, ...rest },
  ref,
) => {
  return (
    <InputContainer id={rest.id} hasError={!!error} title={error || ''}>
      <input ref={ref} {...rest} />
      {children}
    </InputContainer>
  )
}

export const Input = forwardRef(InputRaw)
