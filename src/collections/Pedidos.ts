import type { CollectionConfig } from 'payload'

export const Pedidos: CollectionConfig = {
  slug: 'pedidos',
  admin: {
    useAsTitle: 'plano',
  },
  fields: [
    {
      name: 'lead',
      type: 'relationship',
      relationTo: 'leads',
    },
    {
      name: 'plano',
      type: 'text',
      required: true,
    },
    {
      name: 'valorPago',
      type: 'number',
    },
    {
      name: 'paymentId',
      type: 'text',
      admin: { description: 'ID da transação OpenPIX/Stripe' },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pendente', value: 'pendente' },
        { label: 'Pago', value: 'pago' },
        { label: 'Ativo', value: 'ativo' },
        { label: 'Cancelado', value: 'cancelado' },
      ],
      defaultValue: 'pendente',
    },
  ],
  timestamps: true,
}
