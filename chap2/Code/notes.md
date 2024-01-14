- NPM is not node package manager see in official website, dont have a site
- it manages the nodes behind the scenes but it doesnt stand for node package manager
-package.json is a configuration for npm . 
why need?
2 types of dependencies(Packages)
>dev dependecy -> generally required for developing phase
> normal dependency -> used for production
Parcel is bundler and it is a dev dependency

>> caret ^ and tilde ~
caret will help to update automaically minor upgrade
tilde ->  major upgrade

>>package json
records the minimum version you app needs. If you update the versions of a particular package, the change is not going to be reflected here.

>> package lock json
records the exact version of each installed package which allows you to re-install them. Future installs will be able to build an identical dependency tree . track for same version that being deployed

>> in node_modules we have transitive dependencies ()
>> every dependency would have its own lockjson & package.json

>> how to ignite our app by parcel
npx parcel index.html 
npx meaning executing package
npm means installing pacakage

>>Parcel
Dev build
Local Server
HMR -> HOT MODULE REPLACEMNT ! HOW ? File Watching Algorithm (c++)
catching things up faster builds
IMAGE OPTIMIZATION MINIFICATION , BUNDLING , COMPRESSING
consistent hashing
different bundles for support old browser
tree shaking-> remove unused code

>> npx parcel build index.html
create production file , 
>> npx parcel index.html
dev build 


