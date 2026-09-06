/**
 * テキストのSHA-256ハッシュを計算し、Base64形式で返す
 *
 * @param text - ハッシュを計算するテキスト
 * @returns テキストのSHA-256ハッシュ（Base64形式）
 */
export const calculateSHA256Hash = async (text: string): Promise<string> => {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const buffer = await crypto.subtle.digest('SHA-256', data)
  const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)))
  return base64
}
