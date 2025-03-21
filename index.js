const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/', async (req, res) => {
  const nohp = req.body.nohp;
  const link = req.body.link;

  if (!nohp || !link) {
    return res.status(400).send('Parameter nohp dan link harus diisi!');
  }

  try {
    const headers = {
      'sec-ch-ua-platform': 'windows',
      'referer': `${link}`,
      'sec-ch-ua-mobile': '?0',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      'Accept': 'text/plain, */*; q=0.01',
      'DNT': '1',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Cookie': 'PHPSESSID=032540a5bfd13e91858e01e30d73de6f',
    };

    const params = new URLSearchParams({
      nohp: `${nohp}`,
    });

    const response = await axios.post(`${link}`, params, { headers });

    console.log('Response Code:', response.status);
    console.log('Response Data:', response.data);
    res.send(`BERHASIL! Response Code: ${response.status}, Data: ${JSON.stringify(response.data)}`);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Error: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

setInterval(() => {
  console.log('Interval berjalan... menunggu request ke endpoint /');
}, 2000);
