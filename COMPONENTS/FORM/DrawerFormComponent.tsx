import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = { name: string; email: string; };

function DrawerFormComponent() {

    const schema = yup.object().shape({ name: yup.string().required(), email: yup.string().email().required(), }).required();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>({ resolver: yupResolver(schema), });
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
