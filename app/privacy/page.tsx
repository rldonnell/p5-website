import { redirect } from "next/navigation";

export default function PrivacyRedirect(): never {
  redirect("/privacy-policy/");
}
