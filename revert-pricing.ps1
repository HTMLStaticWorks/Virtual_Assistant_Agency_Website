$files = Get-ChildItem -Path d:\March` Websites\Virtual_Assistant_Agency_Website -Filter *.html
foreach ($file in $files) {
    if ($file.Name -match "^(replace\.ps1|task\.md)$") { continue }
    $content = [IO.File]::ReadAllText($file.FullName)
    $originalContent = $content
    
    # 1. Remove Pricing from nav-actions
    $content = $content.Replace('<a href="pricing.html" class="btn btn-secondary">Pricing</a>`n                ', '')
    $content = $content.Replace('<a href="pricing.html" class="btn btn-secondary">Pricing</a>', '')
    
    # Ensure no duplicates exists near Services before inserting
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, '(?s)\s*<a href="pricing\.html">Pricing</a>', '')

    # 2. Add normal Pricing link after Services link in the nav-links div
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, '(?s)(<a\s+href="services\.html"[^>]*>Services</a>)', '$1`n                <a href="pricing.html">Pricing</a>')
    
    if ($content -ne $originalContent) {
        [IO.File]::WriteAllText($file.FullName, $content)
        Write-Host "Re-adjusted $($file.Name)"
    }
}
Write-Host "Done styling pricing as standard nav-link"
