import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { toast } from "@repo/ui/hooks/use-toast";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createContact } from "~/app/lib/actions/queries";

type FormFields = {
  phone: string;
  name: string;
};

const AddContactForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormFields>();
  const isLoading = formState.isLoading;

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
    const response = await createContact(data);
    toast({
      title: "New Contact",
      description: `Created a new contact ,${data.name}`,
    });
    reset();
  };

  return (
    <form className="w-full bg-muted/40 p-4" onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="phone">Mobile</Label>
      <Input
        {...register("phone")}
        name="phone"
        placeholder="Mobile"
        className="outline-none rounded-lg mb-2"
      />

      <Label htmlFor="name">Name</Label>
      <Input
        {...register("name")}
        name="name"
        placeholder="Name"
        className="oultine-none rounded-lg"
      />

      <Button className="button rounded-full my-4 mx-auto w-[30%] flex">
        Save
      </Button>
    </form>
  );
};

export default AddContactForm;
