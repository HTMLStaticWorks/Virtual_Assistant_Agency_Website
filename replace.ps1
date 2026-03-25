$files = Get-ChildItem -Path "d:\March Websites\Virtual_Assistant_Agency_Website" -Filter *.html
foreach ($file in $files) {
    if ($file.Name -match "^(replace\.ps1|task\.md)$") { continue }
    $content = [IO.File]::ReadAllText($file.FullName)
    $originalContent = $content
    
    $callback = [System.Text.RegularExpressions.MatchEvaluator] {
        param([System.Text.RegularExpressions.Match]$match)
        $header = $match.Value
        
        # Remove standard Pricing link from nav-links
        $header = [System.Text.RegularExpressions.Regex]::Replace($header, '(?s)\s*<a\s+href="pricing\.html"[^>]*>Pricing</a>', '')
        
        # Insert Pricing Button right before Dashboard Button if it doesn't already exist
        if ($header -notmatch 'href="pricing\.html"\s*class="btn btn-secondary"') {
            $header = [System.Text.RegularExpressions.Regex]::Replace($header, '(?s)(<a\s+href="dashboard\.html"\s+class="btn btn-secondary[^>]*>Dashboard</a>)', '<a href="pricing.html" class="btn btn-secondary">Pricing</a>`n                $1')
        }
        
        # Remove Hamburger menu button (user requested removal earlier and didn''t ask to undo this specifically)
        $header = [System.Text.RegularExpressions.Regex]::Replace($header, '(?s)\s*<button\s+class="mobile-menu-btn"[^>]*>.*?</button>', '')
        
        return $header
    }
    
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, '(?s)<header class="navbar">.*?</header>', $callback)
    
    if ($content -ne $originalContent) {
        [IO.File]::WriteAllText($file.FullName, $content)
        Write-Host "Updated $($file.Name)"
    }
}
Write-Host "Alignment and Buttons Updated"
