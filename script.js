function runCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = `<style>${document.getElementById("cssCode").value}</style>`;
    const jsCode = `<script>${document.getElementById("jsCode").value}<\/script>`;

    const outputFrame = document.getElementById("outputFrame").contentWindow.document;
    outputFrame.open();
    outputFrame.write(htmlCode + cssCode + jsCode);
    outputFrame.close();
}

function runCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = `<style>${document.getElementById("cssCode").value}</style>`;
    const jsCode = `<script>${document.getElementById("jsCode").value}<\/script>`;

    const outputFrame = document.getElementById("outputFrame").contentWindow.document;
    outputFrame.open();
    outputFrame.write(htmlCode + cssCode + jsCode);
    outputFrame.close();
}

function downloadCode(type) {
    let code;
    let fileName;

    if (type === 'html') {
        code = document.getElementById("htmlCode").value;
        fileName = "index.html";
    } else if (type === 'css') {
        code = document.getElementById("cssCode").value;
        fileName = "styles.css";
    } else if (type === 'js') {
        code = document.getElementById("jsCode").value;
        fileName = "script.js";
    }

    const blob = new Blob([code], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}
