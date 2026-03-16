import { useMemo, useState, useEffect } from "react";
import { createEditor, type Descendant, type BaseEditor } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { cn } from "@/lib/utils";

type CustomText = { text: string; bold?: boolean; italic?: boolean; underline?: boolean };

type ParagraphElement = { type: "paragraph"; children: CustomText[] };
type HeadingElement = { type: "heading"; children: CustomText[] };
type ListItemElement = { type: "list-item"; children: CustomText[] };

export type CustomElement = ParagraphElement | HeadingElement | ListItemElement;

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

interface TextEditorProps {
  value: Descendant[];
  onBlurUpdate: (newValue: Descendant[]) => void;
  readOnly?: boolean;
}

const TextEditor = ({ value: parentValue, onBlurUpdate, readOnly }: TextEditorProps) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState<Descendant[]>(parentValue);

  useEffect(() => {
    setValue(parentValue);
  }, [parentValue]);

  return (
    <Slate editor={editor} initialValue={value} onChange={setValue}>
      <Editable
        readOnly={readOnly}
        className={cn(
          "overflow-hidden w-full p-2 border-gray-200 rounded",
          readOnly ? "max-h-16 h-fit" : "min-h-20 border",
        )}
        placeholder="Type something…"
        onBlur={() => {
          onBlurUpdate(value);
        }}
      />
    </Slate>
  );
};

export default TextEditor;
