export default `\`\`\`css
/*Solarized Palette*/
html:root {
    --toolbar-background-alt:#05262e;
    --toolbar-background:#002b36;
    --toolbar-background-hover:#073642;
    --toolbar-background-active:#083d4a;
    --toolbar-search-background:var(--toolbar-background-alt);
    --toolbar-search-border:var(--toolbar-border);
    --toolbar-border:#03171c;
    --toolbar-text-muted:#a8b8bd;
    --toolbar-text-normal:#c5d0d3;
    --accent:42, 161, 152;
}

html.theme-dark,
html.theme-dark body #app-mount .theme-light .root-1gCeng,
html.theme-dark body .force-theme.theme-light {
    --background-modifier-hover:rgba(255,255,255,0.1);
    --background-modifier-active:rgba(255,255,255,0.2);
    --text-normal:#a8b8bd;
    --text-focus:#c5d0d3;
    --text-muted:#586e75;
    --background-alt:#05262e;
    --background-light:#073642;
    --background-dark:#002129;
    --background:#002b36;
    --base-border:#03171c;
}

html.theme-light,
html.theme-light body #app-mount .theme-light .root-1gCeng,
html.theme-light body .force-theme.theme-light {
    --background-modifier-hover:rgba(0,0,0,0.05);
    --background-modifier-active:rgba(0,0,0,0.1);
    --text-focus:#073642;
    --text-normal:#586e75;
    --text-muted:#839496;
    --background-alt:#fdf6e3;
    --background-light:#fdf6e3;
    --background-dark:#fdf6e3;
    --background:#eee8d5;
    --base-border:#dacea4;
}
\`\`\``;
