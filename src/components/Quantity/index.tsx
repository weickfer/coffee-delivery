import { Plus, Minus } from 'phosphor-react'
import { QuantityContainer } from './styles'

type QuantityProps = {
  value: number
  onChange?: (value: number) => void
}

export function Quantity({ value, onChange }: QuantityProps) {
  const minusButtonDisabled = value <= 1

  const handleIncrement = () => {
    if (onChange) {
      onChange(value + 1)
    }
  }

  const handleDecrement = () => {
    if (!minusButtonDisabled && onChange) {
      onChange(value - 1)
    }
  }

  return (
    <QuantityContainer>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={minusButtonDisabled}
      >
        <Minus /* weight="bold" */ size={15} />
      </button>

      <p>{value}</p>

      <button type="button" onClick={handleIncrement}>
        <Plus /* weight="bold" */ size={15} />
      </button>
    </QuantityContainer>
  )
}
