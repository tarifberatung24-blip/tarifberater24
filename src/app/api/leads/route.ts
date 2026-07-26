import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, phone, service, gdprConsent } = body;

    if (!name || !email || !phone || !service || !gdprConsent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For MVP, we'll store to a simple JSON file or log
    // In production, this would connect to Supabase
    console.log('Lead received:', {
      name,
      email,
      phone,
      service,
      gdprConsent,
      timestamp: new Date().toISOString(),
    });

    // TODO: Connect to Supabase
    // const supabase = createClient();
    // const { data, error } = await supabase.from('leads').insert([
    //   {
    //     name,
    //     email,
    //     phone,
    //     service,
    //     gdpr_consent: gdprConsent,
    //     status: 'new',
    //   },
    // ]);

    return NextResponse.json(
      { success: true, message: 'Lead saved successfully' },
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
