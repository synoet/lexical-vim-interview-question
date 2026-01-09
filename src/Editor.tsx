import { onMount, onCleanup } from "solid-js";
import { createEditor } from "lexical";
import { registerRichText } from "@lexical/rich-text";

export default function Editor() {
  let editorRef: HTMLDivElement | undefined;

  onMount(() => {
    if (!editorRef) return;

    const editor = createEditor({
      namespace: "MyEditor",
      onError: console.error,
    });

    editor.setRootElement(editorRef);
    const unregister = registerRichText(editor);

    onCleanup(() => {
      unregister();
      editor.setRootElement(null);
    });
  });

  return (
    <div
      ref={editorRef}
      contentEditable
      style={{
        border: "1px solid #ccc",
        "min-height": "200px",
        padding: "10px",
        "border-radius": "4px",
        outline: "none",
      }}
    />
  );
}
