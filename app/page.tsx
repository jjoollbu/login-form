import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-emerald-900 via-black to-black text-white p-8">
      
      <div className="text-center space-y-8 max-w-lg">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
          Projeto de Autenticação
        </h1>

        <p className="text-xl text-gray-400">
          Uma interface limpa para o fluxo de login.
        </p>

        <Link href="/login" className="inline-block">
          <div className="svg-btn-container">
            <svg 
              width="180px" 
              height="60px" 
              viewBox="0 0 180 60"
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" />
            </svg>
            
            <span className="font-thin uppercase tracking-wider text-white">
              Ir para o Login
            </span>
          </div>
        </Link>
        
      </div>
    </main>
  );
}