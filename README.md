# commandlinefu
Simple module to easily get commandlinefu.com snippets in JSON format.  

# Install
`npm install commandlinefu`  

# Use
With nodejs: 
```javascript
// clfu.js
const clfu = require("commandlinefu);

const responseObject = await clfu();
console.log(responseObject);
/* 'node clfu.js' output :
{
  "id": "5427",
  "command": "curl ifconfig.me",
  "summary": "Get your external IP address",
  "votes": "262",
  "url": "http://www.commandlinefu.com/commands/view/5427/get-your-external-ip-address"
}
*/
```
This object will be referred as `responseObject` from now on.  

# Features
By default (no argument) it will returns a random `responseObject`.  
**You can pass a *string* as argument, in which case it will return an Array[]** of responseObject{}.  
Available arguments:  
-  "popular"  returns an Array of popular `responseObject` (which tbh doesn't change much over time)  
-  "search:$var"  returns an Array of `responseObject` related to `$var`  

Example of dynamic search:  
```javascript
const userInput = "ssh"; // here you got user input as string  

clfu(`search:${userInput}`)
  .then(res => console.log(res))
  .catch(e => e);
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

If you're looking for CLI instead of a reusable function, it may be worth checking [this repo](https://github.com/nire0510/clfu).  
At least it helped me decipher commandlinefu.com API endpoints, so thank you [nire0510](https://github.com/nire0510) :)  

[CHANGELOG](https://github.com/TheRealBarenziah/commandlinefu/blob/master/CHANGELOG.md)  