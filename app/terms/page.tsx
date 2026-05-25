import { redirect } from "next/navigation";

export default function TermsRedirect(): never {
  redirect("/terms-and-conditions/");
}
