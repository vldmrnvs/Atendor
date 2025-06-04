import { Message } from '@/types/message';

const CONTEXT7_ENDPOINT = 'https://api.context7.com/v1/memory';
const MAGICMCP_ENDPOINT = 'https://api.magicmcp.com/v1/memory';

async function callApi(
  url: string,
  body: Record<string, unknown> | undefined,
  key?: string,
  method = 'POST'
) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (key) {
    headers['Authorization'] = `Bearer ${key}`;
  }

  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}

export async function saveMemory(botId: string, messages: Message[]) {
  const body = { botId, messages };
  const key = process.env.CONTEXT7_API_KEY;

  try {
    return await callApi(`${CONTEXT7_ENDPOINT}/save`, body, key);
  } catch (err) {
    console.error('Context7 unavailable, falling back to MagicMCP');
    return callApi(`${MAGICMCP_ENDPOINT}/save`, body);
  }
}

export async function fetchMemory(botId: string): Promise<Message[]> {
  const key = process.env.CONTEXT7_API_KEY;

  try {
    return await callApi(`${CONTEXT7_ENDPOINT}/fetch/${botId}`, undefined, key, 'GET');
  } catch (err) {
    console.error('Context7 unavailable, falling back to MagicMCP');
    return callApi(`${MAGICMCP_ENDPOINT}/fetch/${botId}`, undefined, undefined, 'GET');
  }
}
