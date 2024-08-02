import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const inputStyles =
    "bg-transparent px-4 py-3 rounded border border-dark-brown placeholder:text-sm w-full focus-within:border-2 focus-within:border-golden-yellow outline-none";

  return (
    <form className="rounded-lg bg-off-white p-4 py-8 text-charcoal md:p-8">
      <div>
        <h2 className="text-h5 font-medium md:text-h4">Send Message</h2>
        <p className="text-xxs md:text-paragraph">
          Get in touch with me to get started on your project today 👍
        </p>
      </div>

      <div className="mt-9 flex gap-4 max-md:flex-wrap md:gap-9">
        <input
          type="text"
          placeholder="Your name"
          required
          className={cn(inputStyles)}
        />
        <input
          type="text"
          placeholder="Email address"
          required
          className={cn(inputStyles)}
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        className={cn("my-4 md:my-9", inputStyles)}
      />

      <textarea
        placeholder="Your message"
        required
        className={cn("min-h-40 resize-none", inputStyles)}
      />

      <Button
        variant="accent"
        className="mt-4 h-[51px] w-full max-w-[247px]"
        type="submit"
      >
        Send
      </Button>
    </form>
  );
}
