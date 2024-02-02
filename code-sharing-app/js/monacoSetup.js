require.config({ paths: { 'vs': 'node_modules/monaco-editor/min/vs' }});
    require(['vs/editor/editor.main'], function() {
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: false,
            noSyntaxValidation: false
        });

        var initialHTMLCode = atob(`
        PGh0bWw+CiAgPGhlYWQ+CiAgICA8dGl0bGU+SFRNTCBBbW9zdHJhPC90aXRsZT4KICAgIDxtZXRhIGh0dHAtZXF1aXY9IlgtVUEtQ29tcGF0aWJsZSIgY29udGVudD0iSUU9ZWRnZSI+CiAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICAgICBoMSB7CiAgICAgICAgY29sb3I6ICNDQ0EzQTM7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCI+CiAgICAgIGFsZXJ0KCJFdSBzb3UgdW1hIGFtb3N0cmEuLi4uLiB2aXNpdGUgaHR0cHM6Ly9naXRodWIuY29tL21hcmluYWlyaXMvZGV2Q2hhbGxlbmdzLmlvIHBhcmEgbWFpcyBkZXRhbGhlcyEiKTsKICAgIDwvc2NyaXB0PgogIDwvaGVhZD4KICA8Ym9keT4KICAgIDxoMT5DYWJlY2FsaG8gTm8uMTwvaDE+CiAgICA8aW5wdXQgZGlzYWJsZWQgdHlwZT0iYnV0dG9uIiB2YWx1ZT0iQ2xpcXVlIGFxdWkiIC8+CiAgPC9ib2R5Pgo8L2h0bWw+
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
    // editorContainer.style.backgroundColor = selectedTheme === 'light' ? 'vs' : 'vs-dark';
}