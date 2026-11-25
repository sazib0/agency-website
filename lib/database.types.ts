export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      consultations: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          company: string | null
          message: string | null
          preferred_date: string
          created_at: string
          status: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone: string
          company?: string | null
          message?: string | null
          preferred_date: string
          created_at?: string
          status?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          company?: string | null
          message?: string | null
          preferred_date?: string
          created_at?: string
          status?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}