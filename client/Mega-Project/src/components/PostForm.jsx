import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import configure from "../appwrite/Configure";
import config from "../config/Config";
import { Input, Container, RTE } from "../components/index";
import Select from "../components/Header/Select";
// import Select from '../components/Header/Select'
// import Button from '../components/Header/Button'
// All the neede imports

function PostForm({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);

  const { register, handleSubmit, watch, getValues, setValue, control } =
    useForm({
      defaultValues: {
        title: post?.title || "no title",
        content: post?.content || "no content",
      },
    });

  const submit = async (data) => {
    console.log(userData);
    
    if (post) {
      const file = data.image[0]
        ? await configure.uploadFile(data.image[0])
        : null;

      if (file) {
        await configure.deleteFile(post.featuredImage);
      }

      const dbPost = await configure.updateDocument(file.$id, {
        ...data,
        featuredImage: file ? file.$id : post.$id,
      });
      if (dbPost) {
        navigate(`/posts/${featuredImage}`);
      }
    } else {
      
      const file = await configure.uploadFile(data.featuredImage[0]);
      console.log(data);
      const dbPost = configure.createDocument({
        ...data,
        featuredImage: file.$id,
        userId: userData.$id
      });
    }


  };

      const slugTransform = useCallback((value) => {
      if (value && typeof value === "string") {
      return  value.replace(/\s/g, "-");
      }
    }, []);

    useEffect(() => {
      const subscription = watch((value, { name }) => {
        if (name === "title") {
          setValue("slug", slugTransform(value.title));
        }
        
      });
      return ()=> subscription.unsubscribe();
    }, [watch, slugTransform]);


  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Enter title"
        {...register("title", { required: "title is required" })}
      />
      <Input
        label="slug"
        {...register("slug")}
        onChange={(e) => setValue("slug", slugTransform(e.target.value))}
      />

      <RTE
        control={control}
        name="content"
        defaultValue={getValues("content")}
      />

      <Input
        label="featured image"
        type='file'
        {...register("featuredImage", {
          required: "featured image is requierd ",
        })}
       
      />

<select {...register("status")}>  
<option value='active'>Active</option>
<option value='unactive'> Unactive</option>

</select>
      <button>{post ? "update" : "Create Post"}</button>
    </form>
  );
}

export default PostForm;
