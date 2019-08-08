# Example how to use [TypeORM](https://github.com/typeorm/typeorm) with JavaScript + Babel

1. clone repository 
2. run `npm i`
3. edit `ormconfig.json` and change your database configuration (you can also change a database type, but don't forget to install specific database drivers)
4. run `npm start`
5. enjoy!

## How to use CLI?

1. install `typeorm` globally: `npm i -g typeorm`
2. run `typeorm -h` to show list of available commands


fixed my TS hightlight
https://github.com/Microsoft/TypeScript-TmLanguage/


use babel with typescript entity

@babel/preset-typescript

https://github.com/Kononnable/typeorm-model-generator

schema gen:
npx typeorm-model-generator -h localhost -d tempdb -u sa -x !Passw0rd -e mysql