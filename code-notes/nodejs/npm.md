---
title : Node Package Manager (NPM)
tags:
  - NodeJS
emoji: 🟩
link: http://npmjs.com
---
## What is NPM?
NPM is package manager for javascript programming language.

## NPM Command
Check version of npm:

```terminal
npm -v 
```

Install package globaly: 

```terminal
npm -i -g asd@version
```

## What is Package.json?
Json file that keeps metadata about the project and node module and version that use in the project.

Create package.json with below command

```terminal
npm init --yes
```

package.json:
```Json
{
  "name": "node_traning",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
## Install Package

```Terminal
npm i underscore
```
After installing complete name and version of package add to the package.json

```Json
{
  "name": "node_traning",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "underscore": "^1.11.0"
  }
}
```
### Note
We use installed package with require function

## Node_module

When we install a package npm has installed automatically the dependencies of the package and stored in the node_module folder. another package can use that dependency but if the version of a dependency is different, the dependency stored in package/node_module

## Upload and Download Project

When we want to work with projects that download from Github or etc, we use the below command after download the code of the project 

```Terminal
npm i
```
This command look at package.json and installed the dependencies
### Note 
we put node_module directory in gitignore

## Dependency Version

suppose the below Json

```Json
{
    "absd" : "^4.10.2", // is equal 4.x
    "efgh" : "~1.5.3" // is equal 1.5.x
}
```
If we run the npm install command for the first dependency, npm installed the latest version of the package that Major version is 4 and for the second dependency, npm installed the latest version of package that Major version is 1 and Minor version is 5.

## List Of Dependency

We can see all dependency of the project with the below command
```Terminal
npm list
```
```Output
├─┬ mongoose@5.10.15
│ ├── bson@1.1.5
│ ├── kareem@2.3.1
│ ├─┬ mongodb@3.6.3
│ │ ├─┬ bl@2.2.1
│ │ │ ├─┬ readable-stream@2.3.7
│ │ │ │ ├── core-util-is@1.0.2
│ │ │ │ ├── inherits@2.0.4
│ │ │ │ ├── isarray@1.0.0
│ │ │ │ ├── process-nextick-args@2.0.1
│ │ │ │ ├── safe-buffer@5.1.2
│ │ │ │ ├─┬ string_decoder@1.1.1
│ │ │ │ │ └── safe-buffer@5.1.2
│ │ │ │ └── util-deprecate@1.0.2
│ │ │ └── safe-buffer@5.2.1 deduped
│ │ ├── bson@1.1.5 deduped
│ │ ├── denque@1.4.1
│ │ ├─┬ require_optional@1.0.1
│ │ │ ├── resolve-from@2.0.0
│ │ │ └── semver@5.7.1
│ │ ├── safe-buffer@5.2.1 deduped
│ │ └─┬ saslprep@1.0.3
│ │   └─┬ sparse-bitfield@3.0.3
│ │     └── memory-pager@1.5.0
│ ├── mongoose-legacy-pluralize@1.0.2
│ ├── mpath@0.7.0
│ ├─┬ mquery@3.2.2
│ │ ├── bluebird@3.5.1
│ │ ├─┬ debug@3.1.0
│ │ │ └── ms@2.0.0
│ │ ├── regexp-clone@1.0.0 deduped
│ │ ├── safe-buffer@5.1.2
│ │ └── sliced@1.0.1 deduped
│ ├── ms@2.1.2
│ ├── regexp-clone@1.0.0
│ ├── safe-buffer@5.2.1
│ ├── sift@7.0.1
│ └── sliced@1.0.1
└── underscore@1.11.0
```
If we want to see just the dependency of project

```Terminal
npm list --depth=0
```
```Output
├── mongoose@5.10.15
└── underscore@1.11.0
```
## Viewing Information About Package

We can read more about the package and data in package.json file with the below command

```Terminal
npm view mongoose
```
```Output
mongoose@5.10.15 | MIT | deps: 11 | versions: 619
Mongoose MongoDB ODM
https://mongoosejs.com

keywords: mongodb, document, model, schema, database, odm, data, datastore, query, nosql, orm, db

dist
.tarball: https://registry.npmjs.org/mongoose/-/mongoose-5.10.15.tgz
.shasum: 5e559467890e0883d2a1ff0470a7467a1b47e52d
.integrity: sha512-3QUWCpMRdFCPIBZkjG/B2OkfMY2WLkR+hv335o4T2mn3ta9kx8qVvXeUDojp3OHMxBZVUyCA+hDyyP4/aKmHuA==
.unpackedSize: 2.1 MB

dependencies:
bson: ^1.1.4                     ms: 2.1.2                        
kareem: 2.3.1                    regexp-clone: 1.0.0              
mongodb: 3.6.3                   safe-buffer: 5.2.1               
mongoose-legacy-pluralize: 1.0.2 sift: 7.0.1                      
mpath: 0.7.0                     sliced: 1.0.1                    
mquery: 3.2.2                    

maintainers:
- aaron <aaron.heckmann+github@gmail.com>
- rauchg <rauchg@gmail.com>
- tjholowaychuk <tj@vision-media.ca>
- vkarpov15 <val@karpov.io>

dist-tags:
latest: 5.10.15  legacy: 4.13.21  unstable: 3.9.7  

published 16 hours ago by vkarpov15 <val@karpov.io>

```
If we want to see just the dependency of the package, use the below command
```Terminal
npm view mongoose dependencies
``` 
```Output
{
  bson: '^1.1.4',
  kareem: '2.3.1',
  mongodb: '3.6.3',
  'mongoose-legacy-pluralize': '1.0.2',
  mpath: '0.7.0',
  mquery: '3.2.2',
  ms: '2.1.2',
  'regexp-clone': '1.0.0',
  'safe-buffer': '5.2.1',
  sliced: '1.0.1',
  sift: '7.0.1'
}

```

If we want to see all versions of the package use below command (sometimes you want to downgrade your package version)

```Termianl
npm view mongoose versions
```
```Output
[
  '0.0.1',     '0.0.2',     '0.0.3',        '0.0.4',        '0.0.5',
  ...
    '5.10.11',  '5.10.12',   '5.10.13',   '5.10.14',      '5.10.15'
]
```

## Install Specific Version of a Package
``` Terminal
npm install mongoose@2.4.2
```
## Update Packages
When we want to see outdated package use below command

```Terminal
npm outdated
```
```Output
Package     Current   Wanted   Latest  Location
mongoose      4.1.1  4.13.21  5.10.15  node_traning
underscore    1.4.0   1.11.0   1.11.0  node_traning
```
Current means current version of package that we install.
Wanted means latest update with same major release.
Latest is last version of package that release.
If we want to update packages, we should use below cammand

```Terminal
npm update
```
```Output
+ underscore@1.11.0
+ mongoose@4.13.21
added 11 packages from 11 contributors, removed 8 packages, updated 19 packages and audited 33 packages in 5.66s
```
### Note 
Update command update package to Wanted version of package

### Note 
If we want to update package to Latest release we use npm-check-updates package.

```Terminal
sudo npm i -g npm-check-updates
``` 
After installing complete run below command to check outdated packages

```Terminal
npm-check-updates
```
```Output
Checking /home/USER/Desktop/node_traning/package.json
[====================] 2/2 100%

 mongoose  ^4.13.21  →  ^5.10.15     

Run ncu -u to upgrade package.json

```
Then run below command to update packages in package.json

```Terminal
npm-check-updates -u
```
In last step run below command to install latest version of package

```Terminal
npm i
```
## Install DevDependencies
When we want packages only in development and we don't need them in production we install the packages with below command

```Terminal
npm install jshint --save-dev
```

## Uninstall a Package
We run below command for uninstall package

```Terminal
npm un mongoose
```
## Global Packages
If you want to work with global package use '-g' command.

## Publishing Our Owen Packages
When we want to publish our owen packages, we should follow this instructions:
- Create account in npmjs.org with below command
  ```Terminal
  npm adduser
  ```
- Login to your account
  ```Terminal
  npm login
  ``` 
- Publish your package
  ```Terminal
  npm publish
  ```
### Note
If get an error change your package name.

## Updating Owen Packages
If you want update your owen packages on npmjs after change your package increase package version with below command
```Terminal
npm version major or minor or pacth
```
Then publish your update

``` Terminal
npm publish
```
