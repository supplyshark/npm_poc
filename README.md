# DNS request package

This npm package will send a DNS request to a DNS server when it's installed.

## Usage

1. Modify the DNS server in `index.js` by replacing `42.42.42.42` with your server IP and `dns.supplyshark.io` with the DNS to your server.
2. Host PoC code in GitHub repository, then add to package.json.

Example:

```json
{
  "name": "foo",
  "version": "0.1.0",
  "dependencies": {
    "poc-npm": "supplyshark/npm_poc#dns"
  }
}
```