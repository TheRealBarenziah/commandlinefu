# commandlinefu

Simple **nodejs** module to easily get commandlinefu.com snippets in JSON format.  
[![https://nodei.co/npm/commandlinefu.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/commandlinefu.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/commandlinefu)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/TheRealBarenziah/commandlinefu.svg?branch=master)](https://travis-ci.org/TheRealBarenziah/commandlinefu)

# Install

`npm install commandlinefu`

# Use

With nodejs:

```javascript
// clfu.js
const clfu = require("commandlinefu");

clfu()
  .then((res) => console.log(res))
  .catch((e) => e);
```

`node clfu.js` output:

```javascript
{
  "id": "5427",
  "command": "curl ifconfig.me",
  "summary": "Get your external IP address",
  "votes": "262",
  "url": "http://www.commandlinefu.com/commands/view/5427/get-your-external-ip-address"
}
```

This object will be referred as `responseObject` from now on.

# Features

By default (no argument) it will returns a random `responseObject`.  
**You can pass a _string_ as argument, in which case it will return an Array[]** of responseObject{}.  
Available arguments:

- "popular" returns an Array of popular `responseObject` (which tbh doesn't change much over time)
- "search:\$var" returns an Array of `responseObject` related to `$var`

Example of dynamic search:

```javascript
const userInput = "ssh"; // here you got user input as string

clfu(`search:${userInput}`)
  .then((res) => console.log(res))
  .catch((e) => e);
/* Outputs an array like : 
[
    {
        "id": "24887",
        "command": "ssh -L8888:localhost:80 -i nov15a.pem ubuntu@123.21.167.60",
        "summary": "port forwarding",
        "votes": "1",
        "url": "http://www.commandlinefu.com/commands/view/24887/port-forwarding"
    },
    {
        "id": "24879",
        "command": "rsync -e 'ssh -i /root/my.pem' -avz /mysql/db/data_summary.* ec2-1-2-4-9.compute-1.amazonaws.com:/mysql/test/",
        "summary": "rsync using pem file",
        "votes": "0",
        "url": "http://www.commandlinefu.com/commands/view/24879/rsync-using-pem-file"
    },
    {
        "id": "24863",
        "command": "cat myFile.json | ssh root@remoteSftpServer -o \"ProxyCommand=nc.openbsd -X connect -x proxyhost:proxyport %h %p\" 'cat > myFile.json'",
        "summary": "SFTP upload through HTTPS proxy",
        "votes": "0",
        "url": "http://www.commandlinefu.com/commands/view/24863/sftp-upload-through-https-proxy"
    }
]
*/
```

# Discord bot

I originally wrote this for my [discord bot](https://github.com/TheRealBarenziah/jdr9000). If you want to use this module for your own, feel free to check my (dirty) implementation :

- [here](https://github.com/TheRealBarenziah/jdr9000/blob/master/commands/clfu.js#L9) is where I take user input & call my module to fetch stuff accordingly
- [here](https://github.com/TheRealBarenziah/jdr9000/blob/master/utils/format.js#L18) are my format functions. Note that I divide the response into several chunks to get around Discord limitations (maximum 2000 characters for a message).

# CLI

Nodejs make it easy to wrap functions into a custom CLI suiting your needs. In terminal :

```bash
mkdir myCli
cd ./myCli
npm init # you can spam 'return' key for now
npm i commandlinefu # grab this module
touch index.js
```

This is the content of your `index.js` :

```javascript
const clfu = require("commandlinefu");

const commandlinefu = async () => {
  if (!process.argv.slice(2)[0]) {
    return await clfu()
    .then(res => console.log(res.command))
    .catch(e => console.error(e));
  }
  else if (process.argv.slice(2)[0]) {
    return await clfu(process.argv.slice(2)[0])
      .then(res => console.log(res))
      .catch(e => console.error(e));
};

commandlinefu();
```

That's it! Now back into your terminal:

```bash
node index.js # calling clfu without argument
ps auxw | awk '/(apache|httpd)/{print"strace -F -p " $2}' | sh # this is 'res.command' printed in stdout
node index.js search:ssh # calling clfu with "search:ssh" argument, we get an array like we're supposed to :
[
  {
    id: '24887',
    command: 'ssh -L8888:localhost:80 -i nov15a.pem ubuntu@123.21.167.60',
    summary: 'port forwarding',
    votes: '1',
    url: 'http://www.commandlinefu.com/commands/view/24887/port-forwarding'
  },
  {
    id: '24879',
    command: "rsync -e 'ssh -i /root/my.pem' -avz /mysql/db/data_summary.* ec2-1-2-4-9.compute-1.amazonaws.com:/mysql/test/",
    summary: 'rsync using pem file',
    votes: '0',
    url: 'http://www.commandlinefu.com/commands/view/24879/rsync-using-pem-file'
  },
  {...more objects}
]
```

This is the basic principle. You can parse & do your stuff with those arrays in the `else if` block of aforementioned `index.js` file.  
If you never used `process.argv` before, [this read should get you started](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)

# More

If you're looking for out-of-the-box CLI instead of a reusable function, it may be worth checking [this repo](https://github.com/nire0510/clfu).  
At least it helped me decipher commandlinefu.com API endpoints, so thank you nire0510 :)

# Todo

- supporting .mjs
- supporting browsers
  [CHANGELOG](https://github.com/TheRealBarenziah/commandlinefu/blob/master/CHANGELOG.md)
