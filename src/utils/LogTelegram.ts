const TELEGRAM_BOT_TOKEN = '6024494037:AAE6DUqMoxkNok60A2K03KlTtdxx2teDFGc';

async function LogTelegram(data: any) {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '@YeuAnNhienbot',
          text: data,
        }),
      },
    );

    const result = await response.json();

    // Kiểm tra kết quả từ API
    if (result.ok) {
      console.log('Log message sent to Telegram!');
    } else {
      console.log('Failed to send log message to Telegram.');
    }
  } catch (error) {
    console.error('Error sending log message to Telegram:', error);
  }
}

export {LogTelegram};
