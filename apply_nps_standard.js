const fs = require('fs');

function updateNps(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log("File not found:", filePath);
    return;
  }
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace NPS population logic
  const oldPopulate = `            // NPS Hesaplamaları için (Ortalama)
            if (!isNaN(npsScore)) {
              if (!npsData[evalTarget]) npsData[evalTarget] = { sum: 0, total: 0 };
              npsData[evalTarget].total += 1;
              npsData[evalTarget].sum += npsScore;
            }`;
            
  const newPopulate = `            // NPS Hesaplamaları için (Geleneksel NPS)
            if (!isNaN(npsScore)) {
              if (!npsData[evalTarget]) npsData[evalTarget] = { promoters: 0, passives: 0, detractors: 0, total: 0 };
              npsData[evalTarget].total += 1;
              if (npsScore >= 9) npsData[evalTarget].promoters += 1;
              else if (npsScore >= 7) npsData[evalTarget].passives += 1;
              else npsData[evalTarget].detractors += 1;
            }`;
            
  // Use regex to replace the old populate in case of minor whitespace differences
  html = html.replace(/\/\/ NPS Hesaplamalar.*?if \(!isNaN\(npsScore\)\) \{.*?npsData\[evalTarget\]\.sum \+= npsScore;.*?\}/s, newPopulate);

  // Replace NPS display logic
  const oldDisplayRegex = /\/\/ NPS Skoru Hesaplama \(Ortalama 10 üzerinden\).*?npsDisplay = `<span style="font-size: 13px.*?<\/span>`;/s;
  
  const newDisplay = `// NPS Skoru Hesaplama (Geleneksel NPS)
          let npsDisplay = \`<div style="display:flex; flex-direction:column; margin-left:15px; border-left:1px solid var(--gray-200); padding-left:15px;">
                              <span style="font-size: 12px; color: var(--gray-400);">NPS: Veri Yok</span>
                            </div>\`;
          if (npsData[targetDept] && npsData[targetDept].total > 0) {
            const data = npsData[targetDept];
            const pPromoters = (data.promoters / data.total) * 100;
            const pDetractors = (data.detractors / data.total) * 100;
            const npsFinal = Math.round(pPromoters - pDetractors);
            
            let npsColor = "#16a34a"; // green
            if (npsFinal < 0) npsColor = "#ef4444"; // red
            else if (npsFinal < 30) npsColor = "#f59e0b"; // yellow
            
            npsDisplay = \`
            <div style="display:flex; flex-direction:column; margin-left:15px; border-left:1px solid var(--gray-200); padding-left:15px;" title="Geleneksel NPS = % Destekçiler (9-10 Puan) - % Kötüleyenler (0-6 Puan)">
                <span style="font-size: 13px; font-weight: 700; color: \${npsColor};">NPS: \${npsFinal}</span>
                <span style="font-size: 10px; color: var(--gray-500); margin-top:2px;">(-100 ile +100 Arası)</span>
            </div>\`;
          }`;

  html = html.replace(oldDisplayRegex, newDisplay);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log("Updated", filePath);
}

updateNps('index.html');
updateNps('netlify-deploy/index.html');
