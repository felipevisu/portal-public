import Container from "./UI/container";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <Container>
        <div className="text-center">
          Este portal é dirigido à administração pública e está em acordo com a
          diretrizes da Lei 12.232 de 29 de abril de 2010.
        </div>
      </Container>
    </footer>
  );
}
