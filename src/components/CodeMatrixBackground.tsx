import React, { useMemo } from 'react';

export const CodeMatrixBackground: React.FC = () => {
  // Pre-configured realistic code fragments for the ambient developer background
  const codeLines = useMemo(
    () => [
      "import { haccoCore, DistributedEngine } from '@hacco/enterprise';",
      "const microservices = await Cluster.deploy({ region: 'global', redundancy: 3 });",
      "export async function optimizeThroughput(req: Request): Promise<LatencyBenchmark> {",
      "  const cacheHit = await redis.get(`cache:v2:${req.params.id}`);",
      "  if (cacheHit) return { latency: '0.4ms', source: 'edge_cache' };",
      "  const vectorNode = await db.vectorIndex.findNearest(req.embeddings, { k: 10 });",
      "  return { telemetry: { status: 200, executionTime: '18ms', uptime: 0.9999 } };",
      "}",
      "// High-concurrency payment reconciliation stream",
      "type TransactionStream = Observable<{ id: UUID; status: 'settled'; auditHash: SHA256 }>;",
      "const biometricAuth = new NativeBiometrics({ fallback: 'secure_enclave' });",
      "docker-compose.prod.yml: 16 containers running healthy on Kubernetes worker-node-04",
      "interface HaccoArchitecture { scalability: 'unlimited'; testCoverage: '100%'; latency: '<50ms' }",
      "git commit -m 'feat: zero-downtime rolling update deployed to production'",
      "export const responsiveTheme = createSystemTokens({ mode: 'dark', neonCyan: '#06B6D4' });",
      "systemctl status hacco-api-gateway.service - Active: running (since 2026-09-12)",
      "const stream = new WebSocket('wss://stream.hacco.dev/v1/telemetry');",
      "SELECT id, tenant_id, vector_embedding <=> $1 AS cosine_distance FROM knowledge_base;",
      "const app = new FlutterEngine(PlatformChannel.nativeModules.turboMode());",
      "metrics.recordLatency('checkout_completion', { p99: 42, p95: 28, unit: 'milliseconds' });",
    ],
    []
  );

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Deep Cyber Gradient Backdrop */}
      <div className="absolute inset-0 bg-[#06080D]" />

      {/* Cyber Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial Neon Lights */}
      <div className="absolute -top-32 left-1/4 w-[650px] h-[650px] bg-cyan-600/10 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 -right-32 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[180px]" />
      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[170px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-600/8 rounded-full blur-[140px]" />

      {/* Ambient Code Matrix Streams (Columns of Real Syntax) */}
      <div className="absolute inset-0 flex justify-between px-4 sm:px-12 opacity-[0.06] font-mono text-[11px] leading-relaxed text-cyan-300 overflow-hidden">
        {/* Left Code Column */}
        <div className="hidden lg:flex flex-col space-y-3 w-1/3 max-w-sm pt-8">
          {codeLines.slice(0, 10).map((line, i) => (
            <div key={`left-code-${i}`} className="truncate">
              <span className="text-slate-600 me-3">{String(i + 1).padStart(2, '0')}</span>
              <span>{line}</span>
            </div>
          ))}
        </div>

        {/* Center Code Column */}
        <div className="hidden 2xl:flex flex-col space-y-3 w-1/3 max-w-md pt-20">
          {codeLines.slice(5, 15).map((line, i) => (
            <div key={`center-code-${i}`} className="truncate">
              <span className="text-slate-600 me-3">{String(i + 12).padStart(2, '0')}</span>
              <span>{line}</span>
            </div>
          ))}
        </div>

        {/* Right Code Column */}
        <div className="hidden md:flex flex-col space-y-3 w-1/3 max-w-sm pt-14 text-end">
          {codeLines.slice(10, 20).map((line, i) => (
            <div key={`right-code-${i}`} className="truncate">
              <span className="text-slate-600 me-3">{String(i + 22).padStart(2, '0')}</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Terminal Scanlines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.2) 3px, transparent 4px)',
        }}
      />

      {/* Dark Vignette to keep text ultra-sharp & readable */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(6, 8, 13, 0.65) 75%, rgba(6, 8, 13, 0.95) 100%)',
        }}
      />
    </div>
  );
};
