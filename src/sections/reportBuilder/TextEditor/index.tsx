import { useMemo, useState, useEffect } from "react";
import { createEditor, type Descendant, type BaseEditor } from "slate";
import { Slate, Editable, withReact, ReactEditor, type RenderLeafProps, type RenderElementProps } from "slate-react";
import { cn } from "@/lib/utils";
import Toolbar from "./Toolbar";

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

  const renderLeaf = ({ leaf, attributes, children }: RenderLeafProps) => {
    if (leaf.bold) children = <strong>{children}</strong>;
    if (leaf.italic) children = <em>{children}</em>;
    if (leaf.underline) children = <u>{children}</u>;
    return <span {...attributes}>{children}</span>;
  };

  const renderElement = ({ element, attributes, children }: RenderElementProps) => {
    switch (element.type) {
      case "heading":
        return <h2 {...attributes}>{children}</h2>;
      case "list-item":
        return <li {...attributes}>{children}</li>;
      case "paragraph":
      default:
        return <p {...attributes}>{children}</p>;
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <Slate editor={editor} initialValue={value} onChange={setValue}>
        {!readOnly && <Toolbar editor={editor} />}
        <Editable
          readOnly={readOnly}
          renderLeaf={renderLeaf}
          renderElement={renderElement}
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
    </div>
  );
};

export default TextEditor;
