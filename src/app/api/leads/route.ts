import { supabaseServer } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, service, gdprConsent } = body;

    if (!name || !email || !phone || !service || !gdprConsent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseServer
      .from('leads')
      .insert([
        {
          name,
          email,
          phone,
          service,
          gdpr_consent: gdprConsent,
          status: 'new',
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      );
    }

    console.log('Lead saved:', data);

    return NextResponse.json(
      { success: true, message: 'Lead saved successfully', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
