export default function ErrorMessage({ message }: { message: string }) {
  return (
    <p role="alert" className="mt-1 text-sm font-medium text-red-500">
      {message}
    </p>
  );
}
