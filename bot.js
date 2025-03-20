const axios = require('axios');

const fetchData = async () => {
  try {
    const headers = {
      'sec-ch-ua-platform': 'windows',
      'referer': 'https://layanan-danaid.web-ofice.biz.id//ast/bowonohp.php',
      'sec-ch-ua-mobile': '?0',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      'Accept': 'text/plain, */*; q=0.01',
      'DNT': '1',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Cookie': 'PHPSESSID=032540a5bfd13e91858e01e30d73de6f',
    };

    const params = new URLSearchParams({
      nohp: '0858-1234-5678',
    });

    const response = await axios.post('https://layanan-danaid.web-ofice.biz.id/ast/bowonohp.php', params, { headers });

    console.log('Response Code:', response.status);
    console.log('Response Data:', response.data);
  } catch (error) {
    console.error(error);
  }
};

setInterval(() => {
  fetchData();
}, 2000);

