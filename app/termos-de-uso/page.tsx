export default function TermsPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-4 py-24 text-stone-800">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Termos de Uso
        </h1>
        <p className="mt-6 leading-relaxed">
          Esta página deve descrever a finalidade do site, limitações do
          conteúdo, formas de contato e responsabilidades relacionadas ao uso
          das informações exibidas.
        </p>
        <p className="mt-4 leading-relaxed">
          Em serviços de psicologia, também é recomendável deixar claro que o
          conteúdo do site não substitui atendimento emergencial, diagnóstico ou
          acompanhamento individual fora do contexto terapêutico.
        </p>
      </div>
    </main>
  );
}
