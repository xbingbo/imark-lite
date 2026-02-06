import { defineStore, } from 'pinia'
import type { ItemStyle, } from '~/models/style.type'

export const useContextStore = defineStore('context', {
  state: () => ({
    markdown: '',
    style: 'white' as ItemStyle,
  }),
},)
