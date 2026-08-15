import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react';
import { useForm } from 'react-hook-form';


function RTE({name,control,defaultValue=""}) {
  const {handleSubmit,register} = useForm()
  return (
  <Controller
      name={name || "content"}
      control={control}
      defaultValue={defaultValues || "default value"}
      render={({ field: { onChange } }) => (
        <Editor
          init={{
            height: 500,
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
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic underline strikethrough | " +
              "forecolor backcolor | " +
              "alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | " +
              "link image media table | " +
              "code preview fullscreen | " +
              "removeformat help",
          }}
          onEditorChange={onChange}
        />
      )}
    />
  )
}

export default RTE