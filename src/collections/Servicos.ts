import type { CollectionConfig } from 'payload'

export const Servicos: CollectionConfig = {
  slug: 'servicos',
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
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'descricao',
      type: 'richText',
    },
    {
      name: 'descricaoCurta',
      type: 'textarea',
      maxLength: 200,
    },
    {
      name: 'prazoEntrega',
      type: 'text',
      admin: { description: 'Ex: "72 horas", "1 semana"' },
    },
    {
      name: 'tagPrazo',
      type: 'text',
      admin: { description: 'Ex: "Go-live 48h", "Setup 1 sem"' },
    },
    {
      name: 'precoBase',
      type: 'number',
    },
    {
      name: 'precoLabel',
      type: 'text',
      admin: { description: 'Ex: "R$ 2.500/mês" ou "Pacote único R$ 3.000"' },
    },
    {
      name: 'destaque',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'icone',
      type: 'text',
      admin: { description: 'Emoji ou nome do ícone SVG' },
    },
    {
      name: 'mediaPreview',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'ordem',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
