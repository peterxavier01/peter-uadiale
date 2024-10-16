import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/error-message";
import { useToast } from "@/components/ui/use-toast";

import { cn } from "@/lib/utils";

interface IFormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { toast } = useToast();

  const sendEmailUrl = import.meta.env.VITE_EMAIL_API_URL;

  const onSubmit = async (data: IFormValues) => {
    try {
      setIsLoading(true);

      const response = await axios.post(sendEmailUrl, {
        name: data.fullName,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      setIsLoading(false);

      toast({
        description: "Your message has been sent successfully.",
      });

      reset();

      return response.data;
    } catch (error) {
      toast({
        title: "Message not sent",
        description:
          "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsLoading(false);
      reset(); // Reset the form fields after submission
    }
  };

  const inputStyles =
    "bg-transparent px-4 py-3 rounded border border-dark-brown placeholder:text-sm w-full focus-within:border-2 focus-within:border-golden-yellow outline-none";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg bg-off-white p-4 py-8 text-charcoal md:p-8"
    >
      <div>
        <h2 className="text-h5 font-medium md:text-h4">Send Message</h2>
        <p className="text-xxs md:text-paragraph">
          Get in touch to get started on your project today 👍
        </p>
      </div>

      <div className="mt-9 flex gap-4 max-md:flex-wrap md:gap-9">
        <div className="w-full">
          <input
            type="text"
            placeholder="Your name"
            className={cn(
              inputStyles,
              errors.fullName ? "focus-within:border-red-500" : "",
            )}
            {...register("fullName", { required: true })}
            aria-invalid={errors.fullName ? "true" : "false"}
          />
          {errors.fullName?.type === "required" && (
            <ErrorMessage message="Name is required" />
          )}
        </div>

        <div className="w-full">
          <input
            type="email"
            placeholder="Email address"
            className={cn(
              inputStyles,
              errors.email ? "focus-within:border-red-500" : "",
            )}
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <ErrorMessage message="Email is required" />
          )}
        </div>
      </div>

      <input
        type="text"
        placeholder="Subject"
        className={cn("my-4 md:my-9", inputStyles)}
        {...register("subject")}
      />

      <textarea
        placeholder="Your message"
        className={cn(
          "min-h-40 resize-none",
          inputStyles,
          errors.message ? "focus-within:border-red-500" : "",
        )}
        {...register("message", { required: true })}
        aria-invalid={errors.message ? "true" : "false"}
      />
      {errors.message?.type === "required" && (
        <ErrorMessage message="Message is required" />
      )}

      <Button
        variant="accent"
        className={cn(
          "mt-4 h-[51px] w-full max-w-[247px] uppercase",
          isLoading ? "opacity-60" : "",
        )}
        type="submit"
      >
        {isLoading ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
