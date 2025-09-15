const { execSync } = require('child_process');
const path = require('path');

try {
  // Change to build directory
  const buildDir = path.join(__dirname, 'build');
  process.chdir(buildDir);

  // Configure git for long paths
  execSync('git config core.longpaths true', { stdio: 'pipe' });

  // Initialize git repository
  execSync('git init', { stdio: 'pipe' });

  // Add all files
  console.log('Adding files...');
  execSync('git add .', { stdio: 'pipe' });

  // Commit
  console.log('Creating commit...');
  execSync('git commit -m "Deploy"', { stdio: 'pipe' });

  // Set branch name
  execSync('git branch -M gh-pages', { stdio: 'pipe' });

  // Add remote
  execSync('git remote add origin https://github.com/YuankunHuang/yuankunhuang.github.io.git', { stdio: 'pipe' });

  // Force push
  console.log('Pushing to GitHub...');
  execSync('git push -u origin gh-pages --force', { stdio: 'pipe' });

  console.log('✅ Deployment successful!');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
} finally {
  // Clean up - go back to project root and remove .git
  process.chdir(__dirname);
  try {
    execSync('rmdir /s /q "build\\.git"', { shell: true, stdio: 'ignore' });
  } catch (e) {
    // Ignore cleanup errors
  }
}