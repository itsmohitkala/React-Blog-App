import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
function RTE({name, control, defaultValue}) {
  return (
<div className='w-full '>
  <Controller
  name={name || "content"}
  control={control}
  defaultValue={defaultValue}
  render={({field: {onChange}})=>(
    <Editor
      apiKey="YOUR_TINYMCE_API_KEY"
      initialValue="<p>Start writing here...</p>"
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
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help | code",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
    />

  )}
  />
</div>
  )
}

export default RTE