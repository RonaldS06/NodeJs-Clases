# Pasos

npm init -y
npm i express
npm i typescript
tsc --init (Para que cree el tsconfig)
Configurar el outdir en tsconfig.ts -> "outDir":". /dist"

* npm i nodemon
* tsc --watch
* nodemon ./dist/app.js

# Para que reconozca el import de los types de express
npm i --save-dev @types/express

# Para que se guarde en devDependecies
- npm i nodemon --save-dev

# Para ejecutar rapidamente nodemon
scripts -> dev : "nodemon app.ts"

- Se ejecuta con npm run dev
