// File export function
function exportToFile(content, fileName) {
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(content);
    const link = document.createElement('a');
    link.setAttribute('href', dataUri);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Add these JS functions to the window object to make them callable from Blazor
window.exportToFile = exportToFile;