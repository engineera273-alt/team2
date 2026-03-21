$path = "index.html"
$lines = Get-Content $path
$index = -1

for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "^\s*</html\s*>\s*$") {
        $index = $i
        break
    }
}

if ($index -ge 0) {
    $lines = $lines[0..$index]
    Set-Content $path -Value $lines
    Write-Host "Truncated at line $($index + 1)"
} else {
    Write-Host "</html> not found!"
}
