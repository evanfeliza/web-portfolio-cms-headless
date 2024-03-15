import {defineConfig , isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'web-portfolio',

  projectId: 'q0nv1w4r',
  dataset: 'production',
  apiVersion:'2024-03-10',

  plugins: isDev
  ? [structureTool(), visionTool({
    defaultApiVersion: 'v2024-03-10',
    defaultDataset: 'production',

  }),codeInput()]
  : [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
