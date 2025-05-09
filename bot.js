const axios = require('axios');
const yargs = require('yargs');

const argv = yargs
  .option('nohp', {
    alias: 'n',
    type: 'string',
    demandOption: true,
    describe: 'Nomor telepon'
  })
  .option('link', {
    alias: 'l',
    type: 'string',
    demandOption: true,
    describe: 'Link URL'
  })
  .argv;

const fetchData = async () => {
  try {
    const headers = {
      'sec-ch-ua-platform': 'windows',
      'referer': `${argv.link}`,
      'sec-ch-ua-mobile': '?0',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      'Accept': 'text/plain, */*; q=0.01',
      'DNT': '1',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Cookie': 'PHPSESSID=032540a5bfd13e91858e01e30d73de6f',
    };

    const params = new URLSearchParams({
      nohp: `${argv.nohp}`,
    });

    const response = await axios.post(`${argv.link}`, params, {
      headers
    });

    let color;
    if (response.status === 200) {
      color = '\x1b[32m'; // hijau
    } else if (response.status >= 500 && response.status < 600) {
      color = '\x1b[33m'; // kuning
    } else {
      color = '\x1b[0m'; // default
    }

    const resetColor = '\x1b[0m';

    console.log(`Response Code: ${color}${response.status}${resetColor}`);
    console.log(`Response Data: ${color}${response.data}${resetColor}`);
  } catch (error) {
    console.error(error);
  }
};

setInterval(() => {
  fetchData();
}, 2000);
