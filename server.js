// server.js
const express = require('express');
const cors = require('cors');
const { getIsLive } = require('tiktok-live-connector'); // 外部ライブラリ
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const TIKTOK_USERNAME = 'm_sankaku'; // チェックしたいTikTokユーザー名

app.get('/api/isLive', async (req, res) => {
  try {
    const result = await getIsLive(TIKTOK_USERNAME);
    res.json({ isLive: result });
  } catch (error) {
    console.error('Error checking live status:', error);
    res.status(500).json({ error: 'Failed to check live status' });
  }
});

app.get('/', (req, res) => {
  res.send('TikTok LIVE Status API is running.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
