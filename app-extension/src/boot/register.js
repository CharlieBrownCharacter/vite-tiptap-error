import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-vue-tiptap-error'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
