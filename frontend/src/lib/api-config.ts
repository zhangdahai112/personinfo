/**
 * API Configuration
 * Centralized configuration for all API endpoints
 */

// Backend API URL (can be configured via environment variable)
// For production, set NEXT_PUBLIC_API_URL in your environment
// Example: NEXT_PUBLIC_API_URL=https://your-domain.com/personinfo/api
const API_URL = typeof window !== 'undefined' 
  ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/personinfo/api')
  : 'http://localhost:8080/personinfo/api'

// API Base Path (for static export, use full backend URL)
export const API_BASE_PATH = API_URL

// API Endpoints
export const API_ENDPOINTS = {
  // User related endpoints
  GET_BY_ID: `${API_BASE_PATH}/getById`,
  SUBMIT: `${API_BASE_PATH}/submit`,
} as const

/**
 * Helper function to build API URL with query parameters
 * @param endpoint - The API endpoint
 * @param params - Query parameters as key-value pairs
 * @returns Full URL with query string
 */
export function buildApiUrl(endpoint: string, params?: Record<string, string>): string {
  if (!params) return endpoint
  
  const queryString = Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
  
  return `${endpoint}?${queryString}`
}
