import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react';
import {handleSubmit,register} from 'react-hook-form'


function RTE({name,control,defaultValue=""}) {
  
  return (
    <div>
<Controller
name={name  || "content"}
defaultValue={defaultValue}
control={control}

render={({field: {onChange}})=>{
render: <Editor
name={name}
initialValue='dmeo'
init={{
  height: 500,
  menubar: false,

  
/>

/>

    </div>
  )
}

export default RTE