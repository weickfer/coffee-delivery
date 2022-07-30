import * as zod from 'zod'

export const validationSchema = zod.object({
  postal_code: zod
    .string({ required_error: 'Campo CEP é obrigatório' })
    .length(8, 'O CEP deve ter 8 dígitos'),
  street: zod.string({ required_error: 'Campo Rua é obrigatório' }),
  number: zod.string({ required_error: 'Campo Número é obrigatório' }),
  complement: zod.string().optional(),
  neighborhood: zod.string({ required_error: 'Campo Bairro é obrigatório' }),
  city: zod.string({ required_error: 'Campo Cidade é obrigatório' }),
  state: zod.string({ required_error: 'Campo Estado é obrigatório' }),
})

export type PurchaseFormData = zod.infer<typeof validationSchema>
export type PaymentsMethod = 'credit_card' | 'debit_card' | 'cash'