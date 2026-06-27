import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="DragonSpine CloudArray Technology">
      <Image src={logo} alt="DragonSpine CloudArray Technology" width={40} height={47} />
    </Link>
  );
}
