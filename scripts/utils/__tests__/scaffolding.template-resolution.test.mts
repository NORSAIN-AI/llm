#!/usr/bin/env node
import { scaffoldGPT } from '../scaffolding.mts';
import { stat, rm, readFile } from 'fs/promises';
import { join } from 'path';
import assert from 'node:assert/strict';

async function run(): Promise<void> {
  const name = `test_template_resolve_${Date.now()}`;
  try {
    const gptPath = await scaffoldGPT({ name, description: 'test scaffold', author: 'tester', tags: ['test'] });

    // Verify gpt.json exists and contains the expected name
    const gptJsonPath = join(gptPath, 'gpt.json');
    await stat(gptJsonPath);
    const gptJson = JSON.parse(await readFile(gptJsonPath, 'utf-8'));
    assert.equal(gptJson.name, name, 'gpt.json.name should match scaffolded name');

    // Verify instructions/main.md was copied and updated
    const instructionsPath = join(gptPath, 'instructions', 'main.md');
    await stat(instructionsPath);

    // Verify actions/schema.json exists
    const actionsPath = join(gptPath, 'actions', 'schema.json');
    await stat(actionsPath);

    console.log('✓ Scaffold test passed for', name);

    // Cleanup
    await rm(gptPath, { recursive: true, force: true });
    console.log('✓ Cleaned up', gptPath);
    process.exit(0);
  } catch (err) {
    console.error('✗ Scaffold template-resolution test failed:', err);
    // Best-effort cleanup
    try {
      const maybe = join(process.cwd(), 'agents', name);
      await rm(maybe, { recursive: true, force: true });
    } catch (_) {}
    process.exit(1);
  }
}

run();
