// This is a test/development-only script
// Copy files to use different versions for debugging
// Save this as 'debug.ps1' in the root of the frontend folder

$rootPath = $PSScriptRoot
Write-Host "Working directory: $rootPath"

# Option 1: Use the debug version of AnimationWrapper
Write-Host "Applying debug version of AnimationWrapper..."
Copy-Item -Path "$rootPath\components\animations\AnimationWrapper.debug.tsx" -Destination "$rootPath\components\animations\AnimationWrapper.tsx" -Force
Write-Host "Debug version applied"

# Option 2: Use the new layout
# Write-Host "Applying new layout..."
# Copy-Item -Path "$rootPath\app\(main)\layout.new.tsx" -Destination "$rootPath\app\(main)\layout.tsx" -Force
# Write-Host "New layout applied"

Write-Host "Done! Restart the development server to see changes."
