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
      const dbPost = await configure.createDocument({
        ...data,
        featuredImage: file.$id,
        userId: userData.$id
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
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
    <form onSubmit={handleSubmit(submit)} className="mx-auto flex w-full max-w-2xl flex-col gap-5 rounded-lg border border-[var(--color-border)] bg-white p-8 shadow-sm">
      <Input
        label="Enter title"
        {...register("title", { required: "title is required" })}
      />
      <Input
        label="slug"
        {...register("slug")}
        onChange={(e) => setValue("slug", slugTransform(e.target.value))}
      />

      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--color-ink)]">Content</label>
        <RTE
          control={control}
          name="content"
          defaultValue={getValues("content")}
        />
      </div>

      <Input
        label="featured image"
        type='file'
        {...register("featuredImage", {
          required: "featured image is requierd ",
        })}

      />

      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--color-ink)]">Status</label>
        <select {...register("status")} className="w-full rounded-md border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)]">
          <option value='active'>Active</option>
          <option value='unactive'> Unactive</option>
        </select>
      </div>

      <button className="w-full rounded-md bg-[var(--color-brand)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-brand-dark)]">{post ? "update" : "Create Post"}</button>
    </form>
  );
}

export default PostForm;
