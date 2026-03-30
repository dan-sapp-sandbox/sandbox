import { useState } from "react";
import { type Descendant } from "slate";
import TextEditor from "@/components/textEditor";

const TextEditorPreview = () => {
  const [content, setContent] = useState<Descendant[]>([
    { type: "paragraph", children: [{ text: "Weekly Report on Persian Gulf" }] },
  ]);
  return (
    <div className="flex flex-col gap-2 w-100 h-50">
      <TextEditor value={content} onBlurUpdate={setContent} />
    </div>
  );
};

export default TextEditorPreview;
