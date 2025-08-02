// Basic syntax highlighting enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons to code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(function(codeBlock) {
        const pre = codeBlock.parentNode;
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = 'Copy';
        
        copyButton.addEventListener('click', function() {
            const text = codeBlock.textContent;
            navigator.clipboard.writeText(text).then(function() {
                copyButton.innerHTML = 'Copied!';
                setTimeout(function() {
                    copyButton.innerHTML = 'Copy';
                }, 2000);
            });
        });
        
        pre.style.position = 'relative';
        pre.appendChild(copyButton);
    });
    
    // Add language labels to code blocks
    const preElements = document.querySelectorAll('pre');
    preElements.forEach(function(pre) {
        const code = pre.querySelector('code');
        if (code && code.className) {
            const language = code.className.replace('language-', '');
            if (language && language !== 'text') {
                const label = document.createElement('span');
                label.className = 'code-language';
                label.textContent = language.toUpperCase();
                pre.appendChild(label);
            }
        }
    });
}); 