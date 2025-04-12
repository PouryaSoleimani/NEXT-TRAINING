import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = { name: string; email: string };

function DrawerFormComponent() {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("name")} />
            {errors.name && <span>This field is required</span>}
            <input {...register("email")} />
            {errors.email && <span>This field is required</span>}
            < input type="submit" />
        </form>
    );
}

export default DrawerFormComponent;
