<script>
import { h } from 'vue';
import { useEditor, EditorContent } from "@tiptap/vue-3";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight } from 'lowlight/lib/common'

export default {
  setup() {
    const editor = useEditor({
      content: "",
      extensions: [
        Document,
        Text,
        CodeBlockLowlight.configure({
          lowlight,
        }),
      ],
    });

    return function render() {
      return h('div', [
        h(EditorContent, {
          'data-cy': 'tip-tap__content',
          class: 'tip-tap-editor__content',
          editor: editor.value,
        }),
      ]);
    }
  }
}
</script>
