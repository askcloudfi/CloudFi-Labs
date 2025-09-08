const fs = require('fs');
const path = require('path');

// Define the base directory
const basePath = path.join(__dirname, '..', 'apps', 'frontend', 'src', 'app');

// List of expected page files
const expectedPages = [
  // Admin pages
  'admin/analytics/page.tsx',
  'admin/settings/page.tsx',
  'admin/users/page.tsx',
  'admin/reports/page.tsx',
  'admin/profile/page.tsx',
  
  // Company pages
  'company/page.tsx',
  'company/about/page.tsx',
  'company/contact/page.tsx',
  'company/news/page.tsx',
  'company/partners/page.tsx',
  
  // Product pages
  'products/page.tsx',
  'products/cost-management/page.tsx',
  
  // Pricing page
  'pricing/page.tsx',
  
  // Resources pages
  'resources/page.tsx',
  'resources/blog/page.tsx',
  'resources/documentation/page.tsx',
  'resources/api/page.tsx',
  'resources/contact/page.tsx',
  'resources/partners/page.tsx',
  'resources/case-studies/page.tsx',
  
  // Solutions pages
  'solutions/page.tsx',
  'solutions/enterprise/page.tsx',
  'solutions/startup/page.tsx',
  'solutions/multi-cloud/page.tsx',
  'solutions/compliance/page.tsx',
  
  // Test page
  'test/page.tsx',
  
  // Profile page
  'profile/page.tsx'
];

// Function to check if a file exists
function fileExists(filePath) {
  return fs.existsSync(path.join(basePath, filePath));
}

// Function to verify all pages
function verifyPages() {
  console.log('🔍 Verifying CloudFi Labs page structure...\n');
  
  let missingPages = [];
  let existingPages = [];
  
  expectedPages.forEach(page => {
    if (fileExists(page)) {
      existingPages.push(page);
      console.log(`✅ ${page}`);
    } else {
      missingPages.push(page);
      console.log(`❌ ${page}`);
    }
  });
  
  console.log('\n📊 Verification Results:');
  console.log(`✅ Found: ${existingPages.length} pages`);
  console.log(`❌ Missing: ${missingPages.length} pages`);
  
  if (missingPages.length > 0) {
    console.log('\n📋 Missing Pages:');
    missingPages.forEach(page => console.log(`   ${page}`));
    process.exit(1);
  } else {
    console.log('\n🎉 All pages are present!');
    process.exit(0);
  }
}

// Run verification
verifyPages();