"use client";
import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";

export default function TextEditor({
  input,
  setInput,
}: {
  input: any;
  setInput: any;
}) {
  const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const log = () => {
    if (editorRef.current) {
      setIsSubmitting(true);
      setInput({ ...input, desc: (editorRef.current as any).getContent() });
      (editorRef.current as any).setContent(""); // Clear the editor content
      setIsSubmitting(false);
    }
  };

  // Your tinymce api key goes here
  const apikey = process.env.NEXT_PUBLIC_EDITOR_API_KEY;
  return (
    <>
      <Editor
        apiKey={apikey}
        onInit={(evt, editor) => (editorRef.current = editor as any)}
        initialValue={input.desc}
        init={{
          height: 600,
          width: "100%",
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "codesample",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button
        onClick={log}
        className="rounded-md bg-sky-400 px-4 py-2"
        disabled={isSubmitting}
      >
        Submit Blog
      </button>
    </>
  );
}
