export async function sendWhatsAppMessage(phoneNumber: string, message: string): Promise<boolean> {
    const SESSION_ID = process.env.WHATSAPP_SESSION_ID;
    const WA_URL = "/client/sendMessage/" + SESSION_ID;
    const API_URL = process.env.WHATSAPP_SERVER_API;
    const CHAT_ID_SUFFIX = '@c.us';
    // Pastikan nomor telepon diawali dengan 62 dan tanpa +
    let formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Hapus semua non-digit
    if (formattedPhoneNumber.startsWith('0')) {
        formattedPhoneNumber = '62' + formattedPhoneNumber.substring(1);
    } else if (formattedPhoneNumber.startsWith('+62')) {
        formattedPhoneNumber = formattedPhoneNumber.substring(1);
    } else if (!formattedPhoneNumber.startsWith('62')) {
        formattedPhoneNumber = '62' + formattedPhoneNumber;
    }


    if (!WA_URL) {
        console.error('WHATSAPP_API_ENDPOINT is not defined.');
        return false;
    }

    if (!process.env.WHATSAPP_API_KEY) {
        console.error('WHATSAPP_API_KEY is not defined.');
        return false;
    }

    try {
        const response = await fetch(API_URL + WA_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `${process.env.WHATSAPP_API_KEY}`,
            },
            body: JSON.stringify({
                chatId: `${formattedPhoneNumber}${CHAT_ID_SUFFIX}`,
                contentType: "string",
                content: message,
            }),
        });

        if (!response.ok) {
            let errorData = { message: response.statusText };
            try {
                errorData = await response.json();
        } catch (e) { /* ignore if parsing fails */ }
        console.error('WhatsApp API error:', response.status, errorData);
        return false;
        }
        console.log('WhatsApp message sent successfully to:', formattedPhoneNumber);
        return true;
    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
        return false;
    }
}

