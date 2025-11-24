'use server';

import { redirect } from 'next/navigation';

export async function contactFormAction(formData) {
  
    const name = formData.get('ContactName');
    const email = formData.get('ContactEmail');
    const message = formData.get('ContactMessage');
  
    // Here you can handle the form data, e.g., save it to a database or send an email.
    console.log('Contact Form Submission:', { name, email, message });
  
    // You can also return a value if needed.
    redirect('/');
    return { success: true };
};