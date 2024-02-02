require.config({ paths: { 'vs': 'node_modules/monaco-editor/min/vs' }});
    require(['vs/editor/editor.main'], function() {
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false
        });

        var initialHTMLCode = atob(`
        PGh0bWw+CiAgPGhlYWQ+CiAgICA8dGl0bGU+SFRNTCBTYW1wbGU8L3RpdGxlPgogICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAgIGgxIHsKICAgICAgICBjb2xvcjogI0NDQTNBMzsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0Ij4KICAgICAgYWxlcnQoIkkgYW0gYSBzYW1wbGUuLi4gdmlzaXQgaHR0cHM6Ly9naXRodWIuY29tL21hcmluYWlyaXMvZGV2Q2hhbGxlbmdzLmlvIGZvciBtb3JlIHByb2plY3RzISIpOwogICAgPC9zY3JpcHQ+CiAgPC9oZWFkPgogIDxib2R5PgogICAgPGgxPkhlYWRpbmcgTm8uMTwvaDE+CiAgICA8aW5wdXQgZGlzYWJsZWQgdHlwZT0iYnV0dG9uIiB2YWx1ZT0iQ2xpY2sgbWUiIC8+CiAgPC9ib2R5Pgo8L2h0bWw+
    `);

        var editor = monaco.editor.create(document.getElementById('editor'), {
            value: initialHTMLCode,
            language: 'html',
            theme: 'vs-ligth',
            automaticLayout: true,
            fontSize: 14,
            lineNumbers: "on",
            wordWrap: "on",
            renderWhitespace: "all",
            tabSize: 2,
            minimap: {
                enabled: true
            },
            folding: true,
            scrollbar: {
                vertical: 'auto',
                horizontal: 'auto',
                useShadows: false,
                verticalHasArrows: true,
                horizontalHasArrows: true,
                horizontalScrollbarSize: 17,
                verticalScrollbarSize: 17,
                arrowSize: 30
            }
        });
    });

function changeTheme() {
    var selectedTheme = document.getElementById('theme-toggle').value;
    monaco.editor.setTheme(selectedTheme === 'light' ? 'vs' : 'vs-dark');
    document.getElementById('theme-toggle').classList.toggle('dark', selectedTheme === 'dark');

    var editorContainer = document.getElementById('editor');
    editorContainer.style.backgroundColor = selectedTheme === 'dark' ? '#1E1E1E' : '#FFFFFE' ;
    console.log(selectedTheme);
}