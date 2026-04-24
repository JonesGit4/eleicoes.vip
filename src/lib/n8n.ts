const N8N_BASE = process.env.N8N_WEBHOOK_BASE_URL || 'https://n8n.duobro.com.br'

export async function triggerN8nWorkflow(
  webhookPath: string,
  data: Record<string, unknown>
) {
  const url = `${N8N_BASE}/webhook/${webhookPath}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return res.json()
}
