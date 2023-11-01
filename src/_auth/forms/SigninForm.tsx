import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader"
import { SigninValidation } from '@/lib/validation';


const SigninForm = () => {


  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
    
    
  };

  
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
      <img src="/assets/images/logo.png" alt="logo" className="w-11 h-11" />

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Faça login na sua conta
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          Bem vindo(a) de volta! Por favor, insira seus dados.
        </p>
        <form
          onSubmit={form.handleSubmit(handleSignin)}
          className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Senha</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="shad-button_primary">
           
            Conecte-se
           
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Ainda tem uma conta?
            <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1">
              Inscrever-se
            </Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SigninForm
