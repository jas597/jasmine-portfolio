import {cpSync,existsSync,mkdirSync,readFileSync,rmSync} from 'node:fs';
for (const file of ['index.html','style.css','app.js','playground.css']) {
  if (!existsSync(`public/${file}`)) throw new Error(`Missing public/${file}`);
}
const source=['index.html','style.css','app.js','playground.css'].map(file=>readFileSync(`public/${file}`,'utf8')).join('\n');
rmSync('dist',{recursive:true,force:true});
mkdirSync('dist',{recursive:true});
cpSync('public','dist',{recursive:true});
console.log('Built Jasmine’s standalone portfolio.');
