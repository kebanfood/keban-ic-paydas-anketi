const fs = require('fs');

function fixFile(file) {
  let lines = fs.readFileSync(file, 'utf8').split('\n');
  let changed = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('const evalBy = row[')) {
      lines[i] = '          const evalBy = row["Değerlendiren Departman"];';
      changed = true;
    } else if (lines[i].includes('const evalTarget = row[')) {
      lines[i] = '          const evalTarget = row["Değerlendirilen Departman"];';
      changed = true;
    } else if (lines[i].includes('const fb = row[')) {
      lines[i] = '          const fb = row["Açık Uçlu Geri Bildirim"];';
      changed = true;
    } else if (lines[i].includes('const dateStr = row[')) {
      lines[i] = '          const dateStr = row["Zaman Damgası"] || "";';
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, lines.join('\n'), 'utf8');
    console.log(file + ' updated.');
  }
}

fixFile('index.html');
fixFile('netlify-deploy/index.html');
fixFile('Ic_Paydas_Anketi.aspx');
