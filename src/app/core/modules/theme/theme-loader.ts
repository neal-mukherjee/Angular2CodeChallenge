export class ThemeLoader {

    public loadTheme(): void {
        // Bootstrap Dependencies
        window['Tether'] = require('tether/dist/js/tether.js');
        window['jQuery'] = require('jquery/dist/jquery.js');
        require('bootstrap/dist/js/bootstrap.js');

        require('!!style-loader!css-loader!sass-loader!./theme.scss');
        const highlight = require('highlightjs');
        highlight.initHighlightingOnLoad();
    }

}
