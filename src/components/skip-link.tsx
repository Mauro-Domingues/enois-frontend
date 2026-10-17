import { MAIN_CONTENT_ID } from "@/constants/accessibility";
import { texts } from "@/texts";

/**
 * Primeiro item focável da página: quem navega por teclado ou leitor de tela pula o cabeçalho e a
 * navegação e cai direto no conteúdo. Fica invisível até receber foco.
 */
export function SkipLink() {
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      {texts.accessibility.skipToContent}
    </a>
  );
}
