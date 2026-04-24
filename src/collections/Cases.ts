import type { CollectionConfig } from 'payload'

export const Cases: CollectionConfig = {
  slug: 'cases',
  admin: {
    useAsTitle: 'titulo',
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      required: true,
    },
    {
      name: 'servico',
      type: 'relationship',
      relationTo: 'servicos',
    },
    {
      name: 'resultado',
      type: 'text',
      admin: { description: 'Resumo em 1 linha do resultado' },
    },
    {
      name: 'prazoEntrega',
      type: 'text',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'ativo',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
