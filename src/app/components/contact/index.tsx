import Link from "next/link";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
// Importe ícones adicionais conforme necessário

const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col h-auto bg-mediumblue text-white space-y-4 p-6">
      <h2 className="text-xl font-bold">Entre em Contato</h2>
      <div className="flex space-x-4 items-center">
        <EnvelopeIcon className="h-6 w-6" />
        <Link href="mailto:seuemail@example.com" className="hover:underline">
          seuemail@example.com
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <DevicePhoneMobileIcon className="h-6 w-6" />
        <Link href="tel:+5511999999999" className="hover:underline">
          +55 11 99999-9999
        </Link>
      </div>
      {/* GitHub */}
      <div className="flex space-x-4 items-center">
        {/* Substitua este SVG pelo ícone do GitHub */}
        <img src="/path/to/github-icon.svg" alt="GitHub" className="h-6 w-6" />
        <Link
          href="https://github.com/seuusuario"
          className="hover:underline"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
      {/* Instagram */}
      <div className="flex space-x-4 items-center">
        {/* Substitua este SVG pelo ícone do Instagram */}
        <img
          src="/path/to/instagram-icon.svg"
          alt="Instagram"
          className="h-6 w-6"
        />
        <Link
          href="https://instagram.com/seuusuario"
          className="hover:underline"
          target="_blank"
        >
          Instagram
        </Link>
      </div>
      {/* WhatsApp */}
      <div className="flex space-x-4 items-center">
        {/* Substitua este SVG pelo ícone do WhatsApp */}
        <img
          src="/path/to/whatsapp-icon.svg"
          alt="WhatsApp"
          className="h-6 w-6"
        />
        <Link
          href="https://wa.me/5511999999999"
          className="hover:underline"
          target="_blank"
        >
          WhatsApp
        </Link>
      </div>
    </div>
  );
};

export default Contact;
