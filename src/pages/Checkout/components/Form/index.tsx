import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { PurchaseFormData } from '../..'
import { getUFs } from '../../../../utils/getUFs'
import { Input } from '../Input'
import { Select } from '../Select'
import { PurchaseFormContainer } from './styles'

export function PurchaseForm() {
  const { register, formState } = useFormContext<PurchaseFormData>()
  const [ufs, setUfs] = useState<string[]>([])
  const { errors } = formState

  useEffect(() => {
    getUFs().then((response) => setUfs(response))
  }, [])

  return (
    <PurchaseFormContainer>
      <Input
        id="postal_code"
        placeholder="CEP"
        error={errors?.postal_code?.message}
        {...register('postal_code', {
          maxLength: 8,
        })}
      />
      <Input
        id="street"
        placeholder="Rua"
        error={errors?.street?.message}
        {...register('street')}
      />
      <Input
        id="number"
        placeholder="Número"
        error={errors?.number?.message}
        {...register('number')}
      />
      <Input
        id="complement"
        placeholder="Complemento"
        error={errors?.complement?.message}
        {...register('complement')}
      >
        <span>Opcional</span>
      </Input>
      <Input
        id="neighborhood"
        placeholder="Bairro"
        error={errors?.neighborhood?.message}
        {...register('neighborhood')}
      />
      <Input
        id="city"
        placeholder="Cidade"
        error={errors?.city?.message}
        {...register('city')}
      />
      <Select id="state" {...register('state')}>
        <option value="UF">UF</option>
        {ufs.map((uf) => (
          <option key={uf} value={uf}>
            {uf}
          </option>
        ))}
      </Select>
    </PurchaseFormContainer>
  )
}
