$htmlSnippet = @"
    <header class="navbar">
        <div class="container nav-container">
            <a href="index.html" class="nav-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                </svg>
                Virtual Assistant Agency
            </a>

            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="home-2.html">Home 2</a>
                <a href="about.html">About</a>
                <a href="services.html">Services</a>
                <a href="pricing.html">Pricing</a>
            </nav>

            <div class="nav-actions">
                <a href="dashboard.html" class="btn btn-secondary btn-nav-dashboard" title="Dashboard">Dashboard</a>
                <a href="login.html" class="btn btn-secondary">Login</a>
                <button id="rtl-toggle" class="btn btn-secondary" title="Toggle RTL/LTR" aria-label="Toggle RTL/LTR">
                    <span style="font-size: 0.75rem; font-weight: 700;">RTL</span>
                </button>
                <button id="theme-toggle" class="btn btn-secondary" aria-label="Toggle Dark Mode">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                </button>
                <a href="signup.html" class="btn btn-primary">Hire a VA</a>
            </div>
        </div>
    </header>
"@

$files = Get-ChildItem -Path "d:\March Websites\Virtual_Assistant_Agency_Website" -Filter *.html

foreach ($file in $files) {
    if ($file.Name -match '^(dashboard\.html|admin-dashboard\.html|login\.html|signup\.html)$') { continue }
    $content = Get-Content $file.FullName -Raw
    $content = $content -replace '(?s)<header class="navbar">.*?</header>', $htmlSnippet
    $content = $content -replace 'style\.css\?v=[0-9A-Za-z.]+', 'style.css?v=2.0'
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
