import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from "next/image";

type Inputs = { name: string; email: string; };

function DrawerFormComponent() {

    const schema = yup.object().shape({ name: yup.string().required(), email: yup.string().email().required(), }).required();
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema), });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        reset()
    }

    return (
        <div className="w-fit bg-zinc-100 flex flex-col h-2/3 px-4 items-center justify-evenly mx-auto mt-10 rounded-lg border-1 border-zinc-800 ">
            <Image src="/next.svg" width={150} height={50} alt="logo" />
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <input defaultValue="" {...register("name")} className="px-2 py-1 outline-none w-64 text-xl font-semibold border-none shadow-lg shadow-white/40 m-0 bg-zinc-400" />
                {errors.name && <span className="text-red-900 px-2 py-0 m-0">This field is required</span>}
                <input {...register("email")} className="px-2 py-1 outline-none w-64 text-xl font-semibold border-none shadow-lg shadow-white/40 m-0 bg-zinc-400" />
                {errors.email && <span className="text-red-900 px-2 py-0 m-0">This field is required</span>}
                < input type="submit" className="btn btn-success font-bold" value="SIGN IN" />
            </form>
        </div>
    );
}

export default DrawerFormComponent;
