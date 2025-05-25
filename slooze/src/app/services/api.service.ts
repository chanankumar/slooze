import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { constants } from 'src/app/app-constants';

@Injectable({
providedIn: 'root'
})

export class ApiService {

      private supabaseUrl = constants.SUPABASE_URL;
        private supabaseKey = constants.SUPABASE_ANON_KEY;
        private supabase: SupabaseClient;


    constructor() {
        this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
    }

    async getProducts(count:number) {
        const { data, error } = await this.supabase
            .from('products')
            .select('*')
            .order('id', { ascending: false })
            .limit(count);

        if (error) throw error;
        return data;
    }

    async updateProduct(data: any, callBack: () => void) {
        const { error, data: updated } = await this.supabase
            .from('products')
            .update(data)
            .eq('id', data.id);

        if (error) {
            console.error('Update failed:', error.message);
        }
        callBack();
        return
    }

    async addProduct(data: any, callBack: () => void) {
        const { error, data: updated } = await this.supabase
        .from('products')
        .insert(data);

        if (error) {
            console.error('Add failed:', error.message);
        }
        callBack();
        return
    }
}
