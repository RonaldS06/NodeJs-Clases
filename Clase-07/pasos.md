# Pasos

npm init -y
npm i express
npm i typescript
tsc --init
npm i nodemon
Configurar el outdir en tsconfig.ts -> "outDir":". /dist"
tsc --watch
nodemon ./dist/app.js

Para que reconozca el import de los types de express
npm i --save-dev @types/express
