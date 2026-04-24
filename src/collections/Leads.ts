import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'nome',
  },
  fields: [
    {
      name: 'nome',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'telefone',
      type: 'text',
    },
    {
      name: 'candidatura',
      type: 'text',
      admin: { description: 'Cargo pretendido ou contexto' },
    },
    {
      name: 'cidade',
      type: 'text',
    },
    {
      name: 'servicoInteresse',
      type: 'relationship',
      relationTo: 'servicos',
      hasMany: true,
    },
    {
      name: 'origem',
      type: 'select',
      options: [
        { label: 'Chat IA', value: 'chat_ia' },
        { label: 'Formulário', value: 'formulario' },
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Checkout', value: 'checkout' },
      ],
      defaultValue: 'formulario',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Novo', value: 'novo' },
        { label: 'Contatado', value: 'contatado' },
        { label: 'Convertido', value: 'convertido' },
        { label: 'Perdido', value: 'perdido' },
      ],
      defaultValue: 'novo',
    },
  ],
  timestamps: true,
}
