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
        <div className="w-fit bg-black flex flex-col p-4 items-center justify-center mx-auto mt-10 rounded-lg border-1 border-zinc-800 ">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <input defaultValue="test" {...register("name")} className="px-2 py-1 outline-none w-64 text-xl font-semibold border-none shadow-lg shadow-white/40 m-0" />
                {errors.name && <span className="bg-red-950/50 text-red-400 p-1 rounded m-0">This field is required</span>}
                <input {...register("email")} className="px-2 py-1 outline-none w-64 text-xl font-semibold border-none shadow-lg shadow-white/40 m-0" />
                {errors.email && <span className="bg-red-950/50 text-red-400 p-1 rounded m-0">This field is required</span>}
                < input type="submit" className="btn btn-success font-bold" />
            </form>
        </div>
    );
}

export default DrawerFormComponent;
