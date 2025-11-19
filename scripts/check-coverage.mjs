import fs from 'fs';
import path from 'path';

const summaryPath = path.resolve(process.cwd(), 'coverage', 'coverage-summary.json');
if (!fs.existsSync(summaryPath)) {
  console.error('coverage-summary.json not found. Did vitest generate coverage?');
  process.exit(2);
}

const data = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));

function aggregateForPrefix(prefix) {
  let linesTotal = 0, linesCovered = 0;
  let branchesTotal = 0, branchesCovered = 0;

  for (const [file, metrics] of Object.entries(data)) {
    if (file === 'total') continue;
    if (!file.startsWith(prefix)) continue;

    if (metrics.lines && typeof metrics.lines.total === 'number') {
      linesTotal += metrics.lines.total;
      linesCovered += metrics.lines.covered;
    }
    if (metrics.branches && typeof metrics.branches.total === 'number') {
      branchesTotal += metrics.branches.total;
      branchesCovered += metrics.branches.covered;
    }
  }

  const linesPct = linesTotal === 0 ? 100 : (linesCovered / linesTotal) * 100;
  const branchesPct = branchesTotal === 0 ? 100 : (branchesCovered / branchesTotal) * 100;
  return { linesPct, branchesPct, linesTotal, branchesTotal };
}

const src = aggregateForPrefix('src/');
const scripts = aggregateForPrefix('scripts/');

const thresholds = {
  src: { lines: 85, branches: 75 },
  scripts: { lines: 80, branches: 70 },
};

let failed = false;

function check(name, actual, required, metric) {
  const ok = actual >= required;
  if (!ok) {
    console.error(`Coverage threshold failed for ${name}: ${metric} ${actual.toFixed(1)}% < ${required}%`);
    failed = true;
  } else {
    console.log(`Coverage OK for ${name}: ${metric} ${actual.toFixed(1)}% >= ${required}%`);
  }
}

check('src', src.linesPct, thresholds.src.lines, 'lines');
check('src', src.branchesPct, thresholds.src.branches, 'branches');
check('scripts', scripts.linesPct, thresholds.scripts.lines, 'lines');
check('scripts', scripts.branchesPct, thresholds.scripts.branches, 'branches');

if (failed) process.exit(2);
console.log('All coverage thresholds met.');
process.exit(0);
