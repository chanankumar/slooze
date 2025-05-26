import { Injectable } from '@angular/core';

import { AuthChangeEvent, createClient, Session, SupabaseClient, User } from '@supabase/supabase-js';
import { constants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  supabaseClient: SupabaseClient<any, "public", any>;

  constructor() {
    this.supabaseClient = createClient(constants.SUPABASE_URL, constants.SUPABASE_ANON_KEY);
  }
  
  async signIn(email: string, password: string) {
    const data:any = await this.supabaseClient.auth.signInWithPassword({ email, password });
    if(data.data.user.aud === "authenticated" && data.data.user.id) {
      localStorage.setItem('user_id', data.data.user.id);
      if (data.data.user) {
        const profile_data = await this.supabaseClient
          .from('profiles')
          .select('*')
          .eq('id', data.data.user.id)
          .single();

          localStorage.setItem('user_admin', profile_data.data.isManager);
      }
      return true
    }
    return false
  }

  async getSession() {
    try {
      const {data, error} = await this.supabaseClient.auth.getSession();
      if (error) throw error;
      return data;
    } catch (err: any) {
      throw new Error(err.message || 'Session check failed');
    }
  }

}
