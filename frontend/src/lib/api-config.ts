/**
 * API Configuration
 * Centralized configuration for all API endpoints
 */

// Backend API URL configuration
// Development: http://localhost:8080/api (no context path)
// Production: http://localhost:8080/personinfo/api (with context path)
const getDefaultApiUrl = () => {
  // If environment variable is set, use it
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL
  }
  
  // Development vs Production
  const isDevelopment = process.env.NODE_ENV === 'development'
  return isDevelopment 
    ? 'http://localhost:8080/api'
    : 'http://localhost:8080/personinfo/api'
}

const API_URL = typeof window !== 'undefined' 
  ? getDefaultApiUrl()
  : getDefaultApiUrl()

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
